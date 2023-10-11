// apiClient.ts
export async function fetchPosts() {
    const response = await fetch(`http://iris-api.candcom.com/api/posts?populate=*`);
    const data = await response.json();
    return data.data;
  }
  
  export async function fetchCategories() {
    const response = await fetch(`https://iris-api.candcom.com/api/categories?populate=*`);
    const data = await response.json();
    return data.data;
}
  
export async function fetchCardSignification() {
    const response = await fetch(`https://iris-api.candcom.com/api/cartes?populate=*`);
    const data = await response.json();
    return data.data;
}
  