// BlogContainer.jsx
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';  // Vous pouvez utiliser n'importe quelle bibliothèque de skeleton que vous aimez
import BlogHeader from './BlogHeader';
import BlogContainer from './BlogContainer';
import Aside from './BlogAsideSection';
import { fetchPosts, fetchCategories } from "../../requests/apiClient"
import { getLatestPosts } from '../../utils/dataHelpers';


function BlogLoaderContainer() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  
 
  useEffect(() => {
    const fetchData = async () => {
          const postsData = await fetchPosts();
          const categoriesData = await fetchCategories();
          const latestPostsData = getLatestPosts(postsData.data.data);
    
      console.log("latestPostsData", latestPostsData);
          setPosts(postsData);
          setCategoriesList(categoriesData);
          setLatestPosts(latestPostsData);
          setLoading(false); // une fois que les données sont chargées, arrêter le chargement
        }
        
        
        fetchData();
      }, []);
      
  

  if (!loading) {
    // Si les données sont en cours de chargement, affichez un skeleton loader
    return <Skeleton count={5} />;  // Modifier selon votre design
  }
  console.log('Dernier posts', latestPosts)
  // Une fois les données chargées, les afficher comme d'habitude
  return (
    // votre code pour afficher les posts ici...
    <div class="container w-full mx-auto flex flex-wrap py-6">
      <div class="w-full md:w-2/3 flex flex-col items-center px-3">
        <BlogHeader posts={posts} />
        <BlogContainer posts={posts}/>
      </div>
      <Aside categoriesList={categoriesList} latestPosts={latestPosts} />
    </div>
  );
}

export default BlogLoaderContainer;
