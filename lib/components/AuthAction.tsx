import { SUPABASE_ENABLED } from "@/lib/config";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export async function AuthAction() {
  if (!SUPABASE_ENABLED) return <></>;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <>
      hey {user.email} :) <Link href="/logout">Log Out</Link>
    </>
  ) : (
    <Link href="/login">Log In</Link>
  );
}