// dataHelpers.ts
export function sortPosts(posts) {
    return posts.sort((a, b) => {
      const dateA = new Date(a.attributes?.updatedAt).getTime();
      const dateB = new Date(b.attributes?.updatedAt).getTime();
      return dateB - dateA;
    });
  }
  
  export function getLatestPosts(posts, count = 5) {
    return sortPosts(posts).slice(0, count);
  }
  
  export function createBreadcrumbs(categoriesList) {
    return [
      {
        text: "Home",
        href: "/blog",
      },
      ...categoriesList.map((category) => ({
        text: category.attributes?.name,
        href: `/blog/${category.attributes?.name}`,
      })),
    ];
  }
  