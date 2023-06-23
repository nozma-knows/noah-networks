import Page from "@/components/ui/pages/Page";
import { FaGithub, FaLink } from "react-icons/fa";
import { Header, Content } from "@/components/feature-projects";

// Content
const title = "Noah Networks";
const links = [
  {
    label: <FaGithub />,
    href: "https://github.com/nozma-knows/noah-networks-website",
  },
  {
    label: <FaLink />,
    href: "https://www.noahnetworks.com/",
  },
];
const description = `Noah Networks is my personal website. This full-stack web application is a portal to my projects, hosts my blog, and has built-in tools for quickly adding/managing content.`;

const content = [
  `# Frontend`,
  `The client-side application is built using [NextJS](https://nextjs.org/), written in [TypeScript](https://www.typescriptlang.org/), and deployed using [Vercel](https://vercel.com/). Styling is made easy with [TailwindCSS](https://tailwindcss.com/) and remote data is fetched and modified with [GraphQL](https://graphql.org/) using [Apollo Client](https://www.apollographql.com/docs/react/).`,
  `All form fields use customized [MUI](https://mui.com/) components with [React-Hook-Form](https://react-hook-form.com/) under the hood for validation and error handling.`,
  `When a user logs in, a [JWT](https://jwt.io/) token is created and saved in localStorage for use in validating API requests and routing permissions.`,
  `Logging in gives the user access to an additional tab called **Editor** for managing content on the website. This editor is capable of creating, editing, and deleting projects and blog entries.`,
  `# Backend`,
  `The backend application is a [GraphQL](https://graphql.org/) server built using [Express](https://expressjs.com/) and [Apollo](https://www.apollographql.com/docs/apollo-server/), written in [TypeScript](https://www.typescriptlang.org/) and hosted with [Heroku](https://dashboard.heroku.com/apps). [Prisma](https://www.prisma.io/), an open-source [ORM](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/), is used to manage and interact with a [Postgres](https://www.postgresql.org/) database and [Docker](https://www.docker.com/) is used to manage a local instance of that database.`,
  `APIs for authentication, and content management are made available along with tables for holding users, sessions, logins, blogs, and projects.`,
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
