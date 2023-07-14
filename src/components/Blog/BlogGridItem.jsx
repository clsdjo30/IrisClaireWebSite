import React from "react";

export default function BlogGridItem({ post }) {
  const { title } = post;

  const featuredImage = post.featureImage.data[0].attributes;
  const category = post.category.data?.attributes?.name;
  const categorySlug = post.category.data?.attributes?.slug;
  const slug = post.slug; 

  let { content } = post;
  content = content.length > 100 ? content.substring(0, 100) + "..." : content;

  return (
    <div className="md:4/6 overflow-hidden transition-transform h-auto mt-8">
      <div className="h-48 w-full overflow-hidden">
        <div className="">
          <p className=" font-extrabold text-lg text-orange-600 cursor-pointer z-1000 capitalize">
            {category}
          </p>
        </div>
        <img
          className="relative object-cover z-0"
          src={`http://iris-api.candcom.com${featuredImage?.url}`}
        />
      </div>
      <div>
        <h1 className="my-2 font-bold text-sm md:text-md text-gray-900">
          {title}
        </h1>
        <p className="my-2 font-light text-xs md:text-md text-gray-900 text-justify">
          {content}
        </p>
      </div>
      <div className="flex justify-between my-4 items-center">
        <div className="inline-flex rounded-md ">
          <a
            href={`/blog/${categorySlug}/${slug}`}
            className="inline-flex items-center justify-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-violet-500 hover:bg-violet-400">
            Lire la suite
          </a>
        </div>
      </div>
    </div>
  );
}
