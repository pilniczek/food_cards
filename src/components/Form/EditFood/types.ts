import { PostgrestError } from "@supabase/supabase-js";

import { type Database } from "@/types/supabase";

export type Data = Database["public"]["Tables"]["food"]["Insert"];

export type Error = PostgrestError | { message: string } | null | undefined;
