import { type Database } from "@/types/supabase";

export type FoodType = Database["public"]["Tables"]["food"]["Row"];
