import { createHighlighter } from 'shiki';

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

export async function highlightCode(
      code: string,
      lang: string = 'csharp'
): Promise<string> {
      if (!highlighterPromise) {
            highlighterPromise = createHighlighter({
                  themes: ['github-dark'],
                  langs: ['csharp', 'java', 'ts', 'js']
            });
      }

      const highlighter = await highlighterPromise;

      return highlighter.codeToHtml(code, {
            lang,
            theme: 'github-dark'
      });
}