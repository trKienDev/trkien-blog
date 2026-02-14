import { SUPPORTED_LOCALES } from "@/lib/i18n";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
      const headerList = await headers();
      const acceptLang = headerList.get("accept-language") || "";

      const preferred = acceptLang.split(",")[0];

      if (SUPPORTED_LOCALES.includes(preferred as any)) {
            redirect(`/${preferred}`);
      }

      redirect("/en");
}