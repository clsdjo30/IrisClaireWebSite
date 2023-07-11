import BlogGridItem from "./BlogGridItem";
export default function BlogGrid({ posts}) {
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {posts.map((post) => (
            <BlogGridItem key={post.id} post={post.attributes} />                          
        ))}
     </div>
  )       
         
}
