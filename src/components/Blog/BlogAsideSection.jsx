

export default function BlogAsideSection({ latestPosts, categoriesList}) {
  return (
    <aside class="w-full md:w-1/3 flex flex-col items-center">
        {/* <!-- bloc Last Post --> */}
        <div
          class="w-11/12 md:w-10/12 flex flex-col bg-purple-100 px-2 py-3 rounded-md border mb-10">
          <h3 class="text-xl font-semibold text-purple-900 mb-3 ml-4">
            Articles Recents
          </h3>
          {
            latestPosts .map((post) => (
              
              <ul class="list-disc ml-8 my-1">
                <li class="text-sm font-light text-purple-900 hover:text-orange-500">
                  <a href={`/blog/${post.attributes?.category.data.attributes?.name}/${post.attributes?.slug}`}>
                    {post.attributes?.title}
                  </a>
                </li>
              </ul>
            ))
          }
        </div>
        {/* <!-- banniere pub iris --> */}
        <div class="px-5 md:px-10">
          <div
            class="bg-gradient-to-r from-violet-700 from-10% via-violet-800 to-violet-900 to-70% py-8 px-8 rounded-md">
            <h3 class="mt-10 text-xl font-bold text-violet-100 text-center">
              Votre compagnon divinatoire personnalisé
            </h3>
            <div class="mt-10">
              <img src="/header.png" alt="Astronaut in the air" class="w-96" />
            </div>
            <div class="mb-6">
              <p class="text-sm mt-4 text-violet-200 max-w-xl text-justify">
                Plongez dans votre avenir et découvrez les mystères qui
                l'entourent ! Vous obtiendrez des réponses qui vont aideront à
                mieux vous comprendre et à prendre des décisions.
              </p>
              <div class="w-full mt-20 flex flex-col gap-5">
                <button
                  class="flex mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-2 px-16 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg">
                  App Store
                </button>
                <button
                  class="flex mx-auto text-violet-900 font-semibold rounded-full bg-violet-100 border-0 py-2 px-16 focus:outline-none hover:bg-violet-600 hover:text-violet-100 text-lg">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bloc Category --> */}
        <div
          class="w-11/12 md:w-10/12 flex flex-col bg-purple-100 px-2 py-3 rounded-md border mt-10">
          <h3 class="text-xl font-semibold text-purple-900 mb-3 ml-1">
            Catégories
          </h3>
          {
            categoriesList.map((category) => (
              <ul class="list-disc ml-8 my-1">
                <li class="text-md font-light text-purple-900 hover:text-orange-500">
                  <a href={`/blog/${category.attributes?.name}`}>
                    {category.attributes?.name}
                  </a>
                </li>
              </ul>
            ))
          }
        </div>
      </aside>
)

}