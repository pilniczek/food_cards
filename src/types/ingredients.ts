import { type Database } from "@/types/supabase";

export type IngredientsType = Database["public"]["Tables"]["ingredients"]["Row"];
