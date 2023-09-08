import React from "react";

export default function BlogGridItem({ post }) {
  
  const title = post.attributes.title;

  const featuredImage = post.attributes.featureImage.data[0].attributes.formats.small?.url;
  const category = post.attributes.category.data.attributes.name;
  const categorySlug = post.attributes.category.data?.attributes?.slug;
  const slug = post.slug;
  console.log('IMAGE', featuredImage)

  let content = post.attributes?.description;

  content = content.length > 100 ? content.substring(0, 160) + "..." : content;

  return (
    <div className="border border-violet-900 flex flex-col lg:flex-row justify-center items-center rounded-xl p-5 mx-5 md:4/6 overflow-hidden transition-transform h-auto mt-5">
      <div className="relative lg:w-1/2 ">
        <img
          src={`http://iris-api.candcom.com${featuredImage}`}
          alt="gallery"
          className="object-cover object-top h-54 lg:h-48 rounded-t-lg"
        />
        <div className="absolute bottom-5 w-1/3 flex p-1 bg-white justify-center content-center font-semibold text-orange-400 ">
          {category}
        </div>
      </div>
      <div className="mt-3 lg:w-1/2 flex flex-col justify-start items-center">
        <div>
          <h2 className="text-base font-bold text-violet-800">{title}</h2>
          <p className="text-sm font-light mt-3 text-violet-900">{content}</p>
        </div>
        <div className="w-full h-20 relative left-56 top-5 ">
          <button class="mt-5 mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-1 px-8 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg">
            <a href={`/blog/${categorySlug}/${slug}`} className="text-sm">
              Lire la suite
            </a>
          </button>
        </div>
      </div>
    </div>

    // <div className="md:4/6 overflow-hidden transition-transform h-auto mt-8">
    //   <div className="h-48 w-full overflow-hidden">
    //     <div className="">
    //       <p className=" font-extrabold text-lg text-orange-600 cursor-pointer z-1000 capitalize">
    //         {category}
    //       </p>
    //     </div>
    //     <img
    //       className="relative object-cover z-0"
    //       src={`http://iris-api.candcom.com${featuredImage?.url}`}
    //     />
    //   </div>
    //   <div>
    //     <h1 className="my-2 font-bold text-sm md:text-md text-gray-900">
    //       {title}
    //     </h1>
    //     <p className="my-2 font-light text-xs md:text-md text-gray-900 text-justify">
    //       {content}
    //     </p>
    //   </div>
    //   <div className="flex justify-between my-4 items-center">
    //     <div className="inline-flex rounded-md ">
    //       <a
    //         href={`/blog/${categorySlug}/${slug}`}
    //         className="inline-flex items-center justify-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-violet-500 hover:bg-violet-400">
    //         Lire la suite
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}
