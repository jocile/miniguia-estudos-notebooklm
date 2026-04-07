import { getAllDocuments } from "@/lib/markdown";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function Home() {
  const documents = getAllDocuments();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <section className="space-y-4 pb-8 border-b border-border">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Miniguia de Estudos
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          Bem-vindo à documentação do projeto Miniguia de Estudos do NotebookLM. 
          Selecione um tópico abaixo para começar a ler.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {documents.map((doc) => (
          <Link 
            key={doc.slug} 
            href={`/${doc.slug}`}
            className="group block"
          >
            <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 group-hover:-translate-y-1 bg-gradient-to-br from-background to-muted/50">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue-500" />
                </div>
                
                <h3 className="font-semibold text-xl tracking-tight mt-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {doc.title}
                </h3>
                
                {doc.excerpt ? (
                  <p className="text-muted-foreground line-clamp-2 mt-1 text-sm">
                    {doc.excerpt}
                  </p>
                ) : (
                  <p className="text-muted-foreground text-sm mt-1">
                    Ler documentação completa
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
        
        {documents.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            <p>Nenhuma documentação encontrada no diretório content.</p>
          </div>
        )}
      </div>
    </div>
  );
}
