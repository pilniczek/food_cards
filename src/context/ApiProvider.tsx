// https://supabase.com/blog/react-query-nextjs-app-router-cache-helpers#creating-a-react-query-client
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";

export const ApiProvider = ({ children }: { children: ReactNode }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// With SSR, we usually want to set some default staleTime
						// above 0 to avoid refetching immediately on the client
						staleTime: 60 * 1000,
					},
				},
			}),
	);
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
