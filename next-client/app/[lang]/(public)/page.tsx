import { notFound } from "next/navigation";
import HomepageVI from "./vi";
import HomepageEN from "./en";

type Props = {
      params: Promise<{ lang: string }>;
}

export default async function HomePage({ params}: Props) {
      const { lang } = await params;

      switch(lang) {
            case "vi": 
                  return <HomepageVI />;

            case "en":
                  return <HomepageEN />;

            default: 
                  notFound();
      }
}