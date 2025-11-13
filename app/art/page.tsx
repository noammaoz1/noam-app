"use client"; // We'll fetch data on the client side

import { useState, useEffect } from "react";
// We import the Next.js Image component for optimized images
import Image from "next/image";

import styles from "./page.module.css";

// Define the API base URL
// We define this once at the top so we can reuse it easily.
const MET_API_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

async function getArtData(departmentId: string, count: number): Promise<any[]> {
// Get all object IDs for the department
  const objectsResponse = await fetch(
    `${MET_API_URL}/objects?departmentIds=${departmentId}`
  );
  if (!objectsResponse.ok) {
    throw new Error("Failed to fetch the list of art objects.");
  }
  const objectsData = await objectsResponse.json();

  // Check if the department has any objects at all
  if (!objectsData.objectIDs || objectsData.objectIDs.length === 0) {
    return []; // Return an empty array if no objects
  }

  const allIDs = objectsData.objectIDs;
  const randomIDs = [];
  
  // Use a 'Set' to keep track of IDs we've already picked
  // This prevents duplicates
  const pickedIDs = new Set();
  
  // Loop until we have 'count' IDs, or we've picked all available IDs
  while (randomIDs.length < count && randomIDs.length < allIDs.length) {
    // Pick a random index from the entire list
    const randomIndex = Math.floor(Math.random() * allIDs.length);
    const randomID = allIDs[randomIndex];

    // Check if we already picked this ID
    if (!pickedIDs.has(randomID)) {
      // If not, add it to our list and to the 'picked' Set
      randomIDs.push(randomID);
      pickedIDs.add(randomID);
    }
  }

  // Fetch details for each random ID in parallel
  // We create an array of Promises. Each promise is a fetch request.
  const artPromises = randomIDs.map(id => 
    fetch(`${MET_API_URL}/objects/${id}`).then(res => {
      // Inside the .then(), we check if this specific request succeeded
      if (!res.ok) {
        console.error(`Failed to fetch object ${id}`);
        return null; // Return null if it failed
      }
      return res.json();
    })
  );

  // 'Promise.all' waits for all promises in the array to finish.
  // This runs all 9 fetch requests concurrently.
  const artObjects = await Promise.all(artPromises);
  
  // Filter out any 'null' results from failed requests, and return the final clean array.
  return artObjects.filter(art => art !== null);
}

async function getDepartmentData(departmentId: string): Promise<any> {
  // Use the fetch API to make a network request
  const response = await fetch(`${MET_API_URL}/departments`);

  // If the server responds with an error, 'ok' will be false.
  if (!response.ok) {
    // We 'throw' an error, which will be caught by our 'catch' block in the useEffect hook later.
    throw new Error(`Failed to fetch department data: ${response.statusText}`);
  }
  const data = await response.json();
  
  // Find our specific department (the one with ID 11) within the list
  // We parse the departmentId to a number for comparison
  const department = data.departments.find(
    (dept: any) => dept.departmentId === parseInt(departmentId, 10)
  );

  if (!department) {
    throw new Error(`Could not find department with ID ${departmentId}`);
  }

  // Return only the department we found
  return department;
}

export default function ArtPage() {
  // States for data, loading, and errors
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [department, setDepartment] = useState<any>(null);
  const [artList, setArtList] = useState<any[]>([]);

  // Hardcoded values for the assignment
  const DEPARTMENT_ID_TO_FETCH = "11"; // "European Paintings"
  const ART_COUNT_TO_FETCH = 9;

  useEffect(() => {
    // This function runs once when the component mounts
    async function loadData() {
      try {
        setIsLoading(true); // Set loading true at the start
        setError(null);

        // We run both API calls in parallel.
        // 'Promise.all' waits for both to finish.
        const [deptData, artData] = await Promise.all([
          getDepartmentData(DEPARTMENT_ID_TO_FETCH), // Call 1
          getArtData(DEPARTMENT_ID_TO_FETCH, ART_COUNT_TO_FETCH) // Call 2
        ]);

        // Save both results to our state
        setDepartment(deptData);
        setArtList(artData);

      } catch (err: any) {
        // Handle errors by updating the state
        setError(err.message || "An unknown error occurred.");
      } finally {
        // This runs whether it succeeded or failed
        setIsLoading(false);
      }
    }

    loadData();
  }, []); // The empty array [] means this runs only once

  // Render UI based on state
  if (isLoading) {
    return <main className={styles.container}><p>Loading art...</p></main>;
  }
  if (error) {
    return <main className={styles.container}><p>Error: {error}</p></main>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        {department?.displayName || "Art Gallery"}
      </h1>

      <div className={styles.grid}>
        {/* --- START OF STEP 5 UPDATES --- */}
        {artList.map((art) => (
          // We replace the placeholder 'p' tag with our new,
          // fully-featured ArtItemCard component.
          <ArtItemCard key={art.objectID} art={art} />
        ))}
        {/* --- END OF STEP 5 UPDATES --- */}
      </div>
    </main>
  );
}

/**
 * React component for each art item
 * Displays the art title, artist, image, and 3+ other properties.
 * @param art A single art object from the Met API.
 */
function ArtItemCard({ art }: { art: any }) {

  // Helper function to show 'N/A' (Not Available) if data is missing
  const orNA = (value: string | undefined | null) => value || "--";

  return (
    <div className={styles.card}>
      {/* We check if 'art.primaryImageSmall' exists.
        If YES, we render the Next.js 'Image' component.
        If NO, we render a placeholder 'div'.
      */}
      {art.primaryImageSmall ? (
        <Image
          src={art.primaryImageSmall}
          alt={art.title || "Artwork"}
          width={400} // We must provide width/height for layout stability
          height={400}
          className={styles.cardImage}
        />
      ) : (
        <div className={styles.imagePlaceholder}>
          <span>No Image Available</span>
        </div>
      )}

      {/* This 'div' holds all the text content */}
      <div className={styles.cardContent}>
        {/* Title */}
        <h3 className={styles.cardTitle}>{orNA(art.title)}</h3>

        {/* Artist */}
        <p><strong>Artist:</strong> {orNA(art.artistDisplayName)}</p>

        {/* At least 3 other properties */}
        <p><strong>Date:</strong> {orNA(art.objectDate)}</p>
        <p><strong>Medium:</strong> {orNA(art.medium)}</p>
        <p><strong>Accession:</strong> {orNA(art.accessionNumber)}</p>
      </div>
    </div>
  );
}
