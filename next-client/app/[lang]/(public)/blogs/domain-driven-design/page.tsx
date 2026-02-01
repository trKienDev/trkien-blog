import { notFound } from "next/navigation";
import DomainDrivenDesignEN from "./en";
import DomainDrivenDesignVI from "./vi";

type Props = {
      params: Promise<{ lang: string }>;
};

export default async function Page({ params }: Props) {
      const { lang } = await params;

      switch(lang) {
            case "vi": 
                  return <DomainDrivenDesignVI />;

            case "en":
                  return <DomainDrivenDesignEN />;

            default: 
                  notFound();
      }
}