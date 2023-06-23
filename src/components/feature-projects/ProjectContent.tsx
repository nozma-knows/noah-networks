import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectContentProps {
  content: string[];
}

export default function ProjectContent({ content }: ProjectContentProps) {
  return (
    <div className="flex flex-col gap-4">
      {content.map((item, index) => (
        <ReactMarkdown
          className="markdown"
          linkTarget="_blank"
          remarkPlugins={[remarkGfm]}
          key={index}
        >
          {item}
        </ReactMarkdown>
      ))}
    </div>
  );
}
