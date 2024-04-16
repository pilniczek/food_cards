import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { type LocalesEnum } from "@/types/locale";

export const locales: [LocalesEnum] = ["cs"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
	locales,
	localePrefix,
});
