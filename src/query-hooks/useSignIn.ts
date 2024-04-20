import { OAuthResponse } from "@supabase/supabase-js";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

import supabase, { type Provider } from "@/supabase";

const useSignIn = (): UseMutationResult<
	OAuthResponse,
	Error,
	{ url: string; provider: Provider },
	unknown
> => {
	return useMutation({
		mutationFn: ({ url, provider }: { url: string; provider: Provider }) => {
			return supabase.auth.signInWithOAuth({
				provider: provider,
				options: {
					redirectTo: url,
				},
			});
		},
	});
};

export default useSignIn;
