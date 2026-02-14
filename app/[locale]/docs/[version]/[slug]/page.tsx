import fs from "fs";
import path from "path";
import { marked } from "marked";
import TableOfContents from "@/app/components/TableOfContents";
import Feedback from "@/app/components/Feedback";
import CodeCopyEnhancer from "@/app/components/CodeCopyEnhancer";
export const revalidate = 60;

export default async function DocPage({
  params,
}: {
  params: Promise<{ locale: string; version: string; slug: string }>;
}) {
  const { locale, version, slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "_docs",
    version,
    locale,
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return <div>Document not found</div>;
  }

  const markdown = fs.readFileSync(filePath, "utf-8");

  // 👇 THIS IS THE FIX
  const content = await marked.parse(markdown);

  return (
  <div style={{ display: "flex", gap: "40px" }}>
    
    {/* LEFT SIDE */}
    <div style={{ flex: 1 }}>
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <CodeCopyEnhancer/>

      {/* Feedback below content */}
      <Feedback />
    </div>

    {/* RIGHT SIDE */}
    <div style={{ width: "250px" }}>
      <TableOfContents />
    </div>

  </div>
);

}
