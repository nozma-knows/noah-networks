import Page from "@/components/ui/pages/Page";
import { FaGithub, FaLink } from "react-icons/fa";
import { Header, Content } from "@/components/feature-projects";

// Content
const title = "Anonymess";
const links = [
  {
    label: <FaGithub />,
    href: "https://github.com/nozma-knows/anonymess",
  },
  {
    label: <FaLink />,
    href: "https://www.anonymess.app/",
  },
];
const description = `Anonymess is a real-time anonymous message board. Users can enter a message (title and entry), that message is saved to the cloud and rendered to the website in real time.`;

const content = [
  `# Front-end`,
  `The front end for Anonymess is writen in Javascript using the React library. The interface of this web application is a form for writing to an AWS DynamoDB database using a GraphQL API. Entries saved in the database are read and displayed to the screen from newest to oldest and cannot be deleted.`,
  `# Back-end`,
  `The back end for Anonymess is written in Javascript and set up using the AWS CLI (Amazon Web Services Command Line Interface). The back end consits of a GraphQL API that connects a DynamoDB database hosted by AWS and made accessible by the AWS console.`,
];

export default function Project() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full items-center gap-8">
        <Header title={title} links={links} description={description} />
        <Content content={content} />
      </div>
    </Page>
  );
}
