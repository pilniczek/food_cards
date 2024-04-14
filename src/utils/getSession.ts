import supabase from "@/supabase";

const getSession = async () => {
	const response = await supabase.auth.getSession();
	return response.data.session;
};

export default getSession;
