import createMiddleware from "next-intl/middleware";

import { localePrefix, locales } from "./navigation"; // https://next-intl-docs.vercel.app/docs/routing/navigation#shared-pathnames

export default createMiddleware({
	// A list of all locales that are supported
	locales,

	// Used when no locale matches
	defaultLocale: "cs",

	localePrefix,
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(cs)/:path*"],
};
