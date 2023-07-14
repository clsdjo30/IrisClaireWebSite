import { formatDistance, format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
export default function SingleBlog(  { title, publishedAt, content, author, featureImage, readingTime } ) {
    const imageUrl = featureImage.data[0].attributes.formats.medium.url;
       
    return (
        <>
            <div className=" my-4 text-center">
                <h1 className="text-center text-4xl leading-tight text-gray-900 my-4 font-bold">{title}</h1>
                <div className="text-gray-500 flex justify-center items-center space-x-2">
                    <span className="flex space-x-2 items-center overflow-hidden">
                       
                        <p className="font-medium text-xs text-gray-600 cursor-pointer">{author?.name}</p>
                    </span>
                    <span>&middot;</span>
                    <span>{format(new Date(publishedAt), 'MM/dd/yyyy')}</span>
                    <span>&middot;</span>
                    <span>{readingTime}</span>
                </div>
            </div>
            <div className="rounded-md h-56 w-full overflow-hidden">
                <img
                    className="object-cover"
                    src={`http://iris-api.candcom.com/${imageUrl}`}
                />
            </div>
            <article className="prose  max-w-full w-full my-4">
                <ReactMarkdown
                    components={{
                        img: (props) => {
                            const copyProps = { ...props };
                            if (!props?.src.includes('http')) {
                                copyProps.src = `http://localhost:1337${url}`;
                            }
                            return <img {...copyProps} />;
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </>
    );
}