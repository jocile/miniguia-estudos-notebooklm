import { getDocumentData, getAllDocumentSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const paths = getAllDocumentSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const documentData = getDocumentData(params.slug);
  
  if (!documentData) {
    return {
      title: "Documento não encontrado",
    };
  }

  return {
    title: `${documentData.title} | Miniguia NotebookLM`,
    description: documentData.excerpt || "Documentação sobre o NotebookLM",
  };
}

export default async function DocumentPage(props: { params: Params }) {
  const params = await props.params;
  const documentData = getDocumentData(params.slug);

  if (!documentData) {
    notFound();
  }

  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto pb-16">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Home
        </Link>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-img:rounded-xl prose-img:shadow-md">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {documentData.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
