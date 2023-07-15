import { formatDistance, format } from "date-fns";
import ReactMarkdown from "react-markdown";
export default function SingleBlog({
  title,
  publishedAt,
  content,
  author,
  featureImage,
  readingTime,
}) {
  const imageUrl = featureImage.data[0].attributes.formats.medium.url;

  return (
    <>
      <div className=" my-4">
        <h1 className="text-2xl leading-tight text-violet-800 mt-4 font-bold">
          {title}
        </h1>
        <div className="text-gray-500 flex justify-end items-center space-x-2">
          <span className="flex space-x-2 items-start overflow-hidden">
            <p className="font-medium text-xs text-orange-500 cursor-pointer">
              {author.data.attributes?.name}
            </p>
          </span>
          <span>&middot;</span>
          <span className="font-medium text-xs text-orange-500 cursor-pointer">{format(new Date(publishedAt), "MM/dd/yyyy")}</span>
          <span>&middot;</span>
          <span>{readingTime}</span>
        </div>
      </div>
      <div className="w-full">
        <img
          className="object-contain w-full"
          src={`http://iris-api.candcom.com/${imageUrl}`}
        />
      </div>
      <article className="prose  max-w-full w-full mx-10 my-16 text-justify text-violet-900">
        <ReactMarkdown
          components={{
            img: (props) => {
              const copyProps = { ...props };
              if (!props?.src.includes("http")) {
                copyProps.src = `http://iris-api.candcom.com/${url}`;
              }
              return <img {...copyProps} />;
            },
            h3: ({ node, ...props }) => {
              return <h3 className="text-2xl font-bold text-violet-800" {...props} />;
            }
          }}
          >
        
          {content}
        </ReactMarkdown>
      </article>
    </>
  );
}
