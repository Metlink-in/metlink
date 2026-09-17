/** Renders one JSON-LD <script> tag. `data` should be a plain schema.org object (or array of them). */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output never contains unescaped `<` sequences that could break out of
      // the script tag here (no user-supplied HTML is ever passed into these schema builders).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
