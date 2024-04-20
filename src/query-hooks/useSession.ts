import { useQuery } from "@tanstack/react-query";

import supabase from "@/supabase";

export const useSession = () => {
	return useQuery({
		queryFn: async () => {
			return await supabase.auth.getSession();
		},
		queryKey: ["session"],
	});
};
