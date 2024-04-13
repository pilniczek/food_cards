// https://supabase.com/docs/reference/javascript/initializing

import { createClient } from "@supabase/supabase-js";

import { Database } from "@/types/supabase";

export { type Provider } from "@supabase/supabase-js";

const supabase = createClient<Database>(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export default supabase;
