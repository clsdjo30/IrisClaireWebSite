export default function BlogHeader({ posts }) {
  // isAhead
  const isAhead = posts.find((post) => post.attributes.isAhead === true);
  const aheadImage =
    isAhead.attributes.featureImage.data[0].attributes.formats.medium.url;
  const aheadTitle = isAhead.attributes.title;
  const aheadContent = isAhead.attributes.content;
  const firstContent =
    aheadContent.length > 100
      ? aheadContent.substring(0, 100) + "..."
      : aheadContent;
  const aheadSlug = isAhead.attributes.slug;
  // console.log("1 Slug", aheadSlug);

  // isSecond
  const isSecond = posts.find((post) => post.attributes.isSecond === true);
  const secondPostImage =
    isSecond.attributes.featureImage.data[0].attributes.formats.small.url;
  const secondPostTitle = isSecond.attributes.title;
  const secondPostContent = isSecond.attributes.content;
  const secondContent =
    secondPostContent.length > 50
      ? secondPostContent.substring(0, 50) + "..."
      : secondPostContent;
  const secondSlug = isSecond.attributes.slug;
  // isThird
  const isThird = posts.find((post) => post.attributes.isThird === true);
  const thirdPostImage =
    isThird.attributes.featureImage.data[0].attributes.formats.small.url;
  const thirdPostTitle = isThird.attributes.title;
  const thirdContent =
    thirdPostTitle.length > 50
      ? thirdPostTitle.substring(0, 50) + "..."
      : thirdPostTitle;
  const thirdSlug = isThird.attributes.slug;
  // SLug

  return (
    <div className="w-full flex flex-row flex-wrap mx-auto justify-content-center">
      <div className="w-full pt-64 relative mb-3 lg:mb-0.5">
        <img
          src={`http://iris-api.candcom.com${aheadImage}`}
          alt="gallery"
          className="w-full object-cover h-full object-center block absolute inset-0 "
        />
        <div className=" w-full">
          <div className=" z-20 w-full h-1/3 bg-slate-100 opacity-75 py-8 px-6">
            <h2 className="text-2xl text-violet-800 font-medium title-font mb-2">
              {aheadTitle}
            </h2>
            <p className="leading-relaxed text-violet-800 font-normal">
              {firstContent}
            </p>
            <a
              href={`/blog/${aheadSlug}`}
              className="mt-3 text-orange-500 inline-flex items-center font-semibold">
              Lire la suite
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-0.5">
        <div className="relative w-full lg:w-1/2">
          <div className="pt-64 lg:pt-72 flex flex-wrap w-full relative">
            <img
              alt="gallery"
              className="w-full object-cover h-10/12 object-center block opacity-75 absolute inset-0"
              src={`http://iris-api.candcom.com${secondPostImage}`}
            />
            <div className="z-20 w-full bg-slate-100 opacity-75 py-5 px-6">
              <div className="z-10 w-full">
                <h2 className="text-sm text-violet-800 font-medium title-font mb-2">
                  {secondPostTitle}
                </h2>
                <p className="leading-relaxed text-xs text-violet-800">{secondContent}</p>
                <a
                  href={`/blog/${secondSlug}`}
                  className="mt-3 text-orange-500 inline-flex items-center text-xs">
                  Lire la suite
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2">
          <div className="pt-64 lg:pt-72 flex flex-wrap w-full relative">
            <img
              alt="gallery"
              className="w-full object-cover h-10/12 object-center block opacity-75 absolute inset-0"
              src={`http://iris-api.candcom.com${thirdPostImage}`}
            />
            <div className="z-20 w-full bg-slate-100 opacity-75 py-5 px-6">
              <div className="z-10 w-full">
                <h2 className="text-sm text-violet-800 font-medium title-font mb-2">
                  {thirdPostTitle}
                </h2>
                <p className="leading-relaxed text-xs text-violet-800">{thirdContent}</p>
                <a
                  href={`/blog/${thirdSlug}`}
                  className="mt-3 text-orange-500 inline-flex items-center text-xs">
                  Lire la suite
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
