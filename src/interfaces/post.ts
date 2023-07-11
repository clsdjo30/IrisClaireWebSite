export default interface Posts {
    id: number;
    attributes: {
      title: string;
      content: string;
      slug: string;
      visibility: boolean;
      readingTime: string;
      categories: string[];
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }