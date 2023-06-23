import Page from "@/components/ui/pages/Page";
import { FaGithub, FaLink } from "react-icons/fa";
import { Header, Content } from "@/components/feature-projects";

// Content
const title = "Frankenotes";
const links = [
  {
    label: <FaGithub />,
    href: "https://github.com/nozma-knows/frankenotes",
  },
  {
    label: <FaLink />,
    href: "https://frankenotes.com/",
  },
];
const description = `Frankenotes is a cutting-edge AI-powered tool that empowers you to ask your notes any question you desire. Built using [OpenAI](https://openai.com/) and [LangChain](https://github.com/hwchase17/langchain), this tool provides advanced features that can make your note-taking experience more efficient and productive.`;

const content = [
  `# Frontend`,
  `At its core, Frankenotes is built using [NextJS](https://nextjs.org/), written in [TypeScript](https://www.typescriptlang.org/), and deployed using [Vercel](https://vercel.com/). Styling is made easy with [TailwindCSS](https://tailwindcss.com/) and remote data is fetched and modified with [GraphQL](https://graphql.org/) using [Apollo Client](https://www.apollographql.com/docs/react/). All form fields use customized [MUI](https://mui.com/) components with [React-Hook-Form](https://react-hook-form.com/) under the hood for validation and error handling. AI features are added using, [LangChain](https://github.com/hwchase17/langchain) in conjunction with [OpenAI](https://openai.com/)'s natural language processing (NLP) capabilities to add intelligent and intuitive querying capabilities. All user notes are embedded and stored in a [Pinecone](https://www.pinecone.io/) vector store in order to index and grab only the most relevant content for OpenAI's APIs. These technologies work together seamlessly to deliver a smooth and intuitive user experience that makes asking questions and getting answers from your notes a breeze.`,
  `# Backend`,
  `On the backend, Frankenotes leverages a [GraphQL](https://graphql.org/) server built using [Express](https://expressjs.com/) and [Apollo](https://www.apollographql.com/docs/apollo-server/), written in [TypeScript](https://www.typescriptlang.org/) and hosted with [Heroku](https://dashboard.heroku.com/apps). [Prisma](https://www.prisma.io/), an open-source [ORM](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/), is used to manage and interact with a [Postgres](https://www.postgresql.org/) database and [Docker](https://www.docker.com/) is used to manage a local instance of that database. These technologies work together to create a powerful and scalable infrastructure that can handle even the most complex queries.`,
  `# Summary`,
  `With Frankenotes, you can easily upload/edit all your notes and documents into the tool, and the AI will automatically index them and make them searchable. Then, all you have to do is ask a question, and Frankenotes will quickly search through your notes to find the most relevant information and provide you with accurate and comprehensive answers.`,
  `Frankenotes is perfect for students, researchers, writers, and anyone who needs to quickly and easily access information from their notes. Its intuitive interface, combined with its powerful AI capabilities, makes it an indispensable tool for anyone looking to improve their productivity and streamline their note-taking process.`,
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
