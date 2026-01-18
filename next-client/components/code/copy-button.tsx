'use client';

import { useState } from "react";

type CopyButtonProps = {
      text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
      const [ copied, setCopied ] = useState(false);

      async function handleCopy() {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
      }

      return (
            <button className="copy-btn" onClick={handleCopy}>
                  {copied ? 'Copied' : 'Copy'}
            </button>
      );
}