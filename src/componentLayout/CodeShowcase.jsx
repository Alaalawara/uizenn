import Prism from "prismjs"; // or shiki, highlight.js etc.

export default function CodeLayout({ children, code, filename = "Demo.jsx" }) {
  const highlighted = Prism.highlight(code, Prism.languages.jsx, "jsx");

  return (
    <div className="rounded-xl border p-4 bg-secondary flex flex-col gap-4 my-4">
      <div>{children}</div>
      <pre className="mt-4 text-xs bg-[var(--bg)] p-3 rounded-lg border overflow-auto">
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
      <div className="text-xs mt-2 text-foreground/50">{filename}</div>
    </div>
  );
}
