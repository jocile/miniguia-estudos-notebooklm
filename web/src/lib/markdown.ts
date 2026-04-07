import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the content directory
const contentDirectory = path.join(process.cwd(), 'src/content');

export interface DocumentData {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  content: string;
}

export function getAllDocumentSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  
  const fileNames = fs.readdirSync(contentDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

export function getDocumentData(slug: string): DocumentData | null {
  try {
    const decodedSlug = decodeURIComponent(slug);
    const fullPath = path.join(contentDirectory, `${decodedSlug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Extract a title from the content if not in frontmatter
    let title = matterResult.data.title;
    if (!title) {
        // Try to find the first H1 tag
        const match = matterResult.content.match(/^#\s+(.*)/m);
        title = match ? match[1] : slug.replace(/-/g, ' ');
    }

    return {
      slug: decodedSlug,
      title,
      content: matterResult.content,
      ...(matterResult.data as { date?: string; excerpt?: string }),
    };
  } catch (error) {
    console.error(`Error reading document ${slug}:`, error);
    return null;
  }
}

export function getAllDocuments(): Omit<DocumentData, 'content'>[] {
  if (!fs.existsSync(contentDirectory)) return [];
  
  const fileNames = fs.readdirSync(contentDirectory);
  const allDocumentsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const doc = getDocumentData(slug);
      
      return {
        slug: doc?.slug || slug,
        title: doc?.title || slug,
        date: doc?.date,
        excerpt: doc?.excerpt,
      };
    });

  // Sort documents alphabetically by title for now
  return allDocumentsData.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
}
