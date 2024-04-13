import supabase, { type Provider } from "@/supabase";

const signIn = async (url: string, provider: Provider) => {
	const result = await supabase.auth.signInWithOAuth({
		provider: provider,
		options: {
			redirectTo: url,
		},
	});
	if (result.error) {
		throw new Error(result.error.message);
	}
	return result;
};

export default signIn;
