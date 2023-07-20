import React, { useState, useEffect } from 'react';
import BlogHeader from "@components/Blog/BlogHeader";
import BlogContainer from "@components/Blog/BlogContainer";
import Aside from "@components/Blog/BlogAsideSection";


function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [customCrumbs, setCustomCrumbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const responsePosts = await fetch(`http://iris-api.candcom.com/api/posts?populate=*`);
        const responseCategories = await fetch("https://iris-api.candcom.com/api/categories?populate=*");

        if (responsePosts.status === 200 && responseCategories.status === 200) {
          const dataPosts = await responsePosts.json();
          const dataCategories = await responseCategories.json();

          setPosts(dataPosts.data);
          setCategoriesList(dataCategories.data);

          const sortedPosts = dataPosts.data.sort((a, b) => {
            const dateA = new Date(a.attributes?.updatedAt).getTime();
            const dateB = new Date(b.attributes?.updatedAt).getTime();
            return dateB - dateA;
          });

          setLatestPosts(sortedPosts.slice(0, 5));

          setCustomCrumbs([
            {
              text: "Home",
              href: "/blog",
            },
            ...dataCategories.data.map((category) => ({
              text: category.attributes?.name,
              href: `/blog/${category.attributes?.name}`,
            })),
          ]);

          setLoading(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setError(true);
      }
    }

    fetchData();
  }, []);

  if (loading) {
     
      return <div>Loading...</div>;
    }
    
    if (error) {
        return <Redirect to="/404" />;
    }

  return (
    <div>
      <BlogHeader posts={posts} />
      <BlogContainer posts={posts} />
      <Aside categoriesList={categoriesList} latestPosts={latestPosts} />
      {/* ... code pour afficher les liens de navigation (breadcrumbs) ... */}
      <Breadcrumbs
          mainBemClass="c-breadcrumbs"
          indexText="Home"
          ariaLabel="a structured list of pages"
          crumbs={customCrumbs}>
          <svg
            slot="index"
            aria-label="Home Page"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>

          <svg
            slot="separator"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Breadcrumbs>
    </div>
  );
}

export default BlogPage;
