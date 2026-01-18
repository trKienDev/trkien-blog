import CodeBlock from "./codeBlock";
import CopyButton from "./copy-button";

type CodeBlockClientProps = {
      code: string;
      language?: string;
};

export default function CodeBlockClient({
      code, language
} : CodeBlockClientProps) {
      return (
            <div className="code-block-wrapper">
                  <CopyButton text={code} />
                  {/* Server Component render Server Component */}
                  <CodeBlock code={code} language={language} />
            </div>
      );
}