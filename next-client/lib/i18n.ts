export const SUPPORTED_LOCALES = ["vi", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type LangRouteProps = { params: Promise<{ lang: string }>; };

export async function resolveLocale (
      params: Promise<{ lang: string }>
): Promise<Locale> {
      const { lang } = await params;

      if(!SUPPORTED_LOCALES.includes(lang as Locale)) {
            throw new Error("Invalid locale");
      }

      return lang as  Locale;
}