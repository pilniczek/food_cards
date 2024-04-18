import { PostgrestError } from "@supabase/supabase-js";

export type Error = PostgrestError | { message: string } | null | undefined;
