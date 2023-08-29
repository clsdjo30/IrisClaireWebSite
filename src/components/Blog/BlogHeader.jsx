export default function BlogHeader({ posts }) {
  // isAhead
  const isAhead = posts.find((post) => post.attributes.isAhead === true);
  const aheadImage =
    isAhead.attributes.featureImage.data[0].attributes.formats.large.url;
  const aheadTitle = isAhead.attributes.title;
  const aheadContent = isAhead.attributes.description;
  const firstContent =
    aheadContent.length > 100
      ? aheadContent.substring(0, 150) + "..."
      : aheadContent;
  const aheadSlug = isAhead.attributes.slug;
  const aheadCategory = isAhead.attributes.category.data.attributes?.name;

  // isSecond
  const isSecond = posts.find((post) => post.attributes.isSecond === true);
  const secondPostImage =
    isSecond.attributes.featureImage.data[0].attributes.formats.large.url;
  const secondPostTitle = isSecond.attributes.title;
  const secondPostContent = isSecond.attributes.description;
  const secondContent =
    secondPostContent.length > 50
      ? secondPostContent.substring(0, 100) + "..."
      : secondPostContent;
  const secondSlug = isSecond.attributes.slug;
  const secondCategory = isSecond.attributes.category.data.attributes?.name;

  // isThird
  const isThird = posts.find((post) => post.attributes.isThird === true);
  const thirdPostImage =
    isThird.attributes.featureImage.data[0].attributes.formats.large.url;
  const thirdPostTitle = isThird.attributes.title;
  const thirdPostContent = isThird.attributes.description;
  const thirdContent =
    thirdPostContent.length > 50
      ? thirdPostContent.substring(0, 100) + "..."
      : thirdPostContent;
  const thirdSlug = isThird.attributes.slug;
  const thirdCategory = isThird.attributes.category.data.attributes?.name;
  

  return (
    <div className="w-full flex ">
      <div className="flex flex-col w-full">
        {/* //HEADER POST */}
        <div className="m-5 border border-violet-900 flex flex-col justify-start items-center rounded-lg p-5">
          <div className="relative w-full">
            <img
              src={`http://iris-api.candcom.com${aheadImage}`}
              alt="gallery"
              className="object-cover object-top h-72 w-full rounded-t-lg"
            />
            <div className="absolute bottom-10 w-32 flex p-1 bg-white justify-center content-center font-semibold text-orange-400 ">
              {aheadCategory}
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-violet-800">{aheadTitle}</h2>
            <p className="text-sm font-light mt-3 text-violet-900">
              {firstContent}
            </p>
          </div>
          <div className="w-full">
            <button class=" mt-5 mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-1 px-8 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg">
              <a
                href={`/blog/${aheadCategory}/${aheadSlug}`}
                className="text-sm">
                Lire la suite
              </a>
            </button>
          </div>
        </div>
        {/* HEADER DOWN POSTS */}
        <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0">
          <div className="flex-col lg:w-1/2 border border-violet-900 flex items-center rounded-xl p-5 mx-5">
            <div className="relative">
              <img
                src={`http://iris-api.candcom.com${secondPostImage}`}
                alt="gallery"
                className="object-cover object-top h-48 w-96 rounded-t-lg"
              />
              <div className="absolute bottom-5 w-1/3 flex p-1 bg-white justify-center content-center font-semibold text-orange-400 ">
                {secondCategory}
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-lg font-bold text-violet-800">
                {secondPostTitle}
              </h2>
              <p className="text-sm font-light mt-3 text-violet-900">
                {secondContent}
              </p>
            </div>
            <div className="w-full">
              <button class="mt-5 mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-1 px-8 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg">
                <a
                  href={`/blog/${secondCategory}/${secondSlug}`}
                  className="text-sm">
                  Lire la suite
                </a>
              </button>
            </div>
          </div>

          <div className="flex-col lg:w-1/2 border border-violet-900 flex  items-center rounded-xl p-5 mx-5">
            <div className="relative">
              <img
                src={`http://iris-api.candcom.com${thirdPostImage}`}
                alt="gallery"
                className="object-cover object-top h-48 w-96 rounded-t-lg"
              />
              <div className="absolute bottom-5 w-1/3 flex p-1 bg-white justify-center content-center font-semibold text-orange-400 ">
                {thirdCategory}
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-lg font-bold text-violet-800">
                {thirdPostTitle}
              </h2>
              <p className="text-sm font-light mt-3 text-violet-900">
                {thirdContent}
              </p>
              <button class="mt-5 mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-1 px-8 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg">
                <a
                  href={`/blog/${thirdCategory}/${thirdSlug}`}
                  className="text-sm">
                  Lire la suite
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
