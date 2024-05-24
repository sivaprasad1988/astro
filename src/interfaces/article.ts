export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    images: ImageData;
    content: Content[];
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface ImageData {
  data: {
    id: number;
    attributes: Record<string, any>; // Assuming attributes is an object with any properties
  };
}

interface Content {
  type: "heading" | "paragraph";
  children: Array<{ text: string }>; // Assuming children is an array of text objects
  level?: number; // Only for headings
}
