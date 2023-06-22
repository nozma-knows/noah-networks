"use client";

import LinkButton from "@/components/ui/buttons/LinkButton";
import Page from "@/components/ui/pages/Page";

// Message Content
const title = "Hi, my name is Noah.";
const subtitle = "You've stumbled upon my personal website.";
const about =
  "I'm a passionate learner, creator and friend. My goal is to make the world happier. I choose to do it through building.";

// Button Content
const buttonLabel = "Check out my blog";

function Message() {
  return (
    <div className="flex w-fit h-fit flex-col gap-2 max-w-3xl">
      <h1 className="w-fit text-transparent bg-gradient-to-r from-white/80 to-white/40 bg-clip-text ">
        {title}
      </h1>
      <h2>{subtitle}</h2>
      <div className="">{about}</div>
    </div>
  );
}

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full justify-center items-center gap-4">
        <Message />
        <LinkButton label={buttonLabel} href="/blog" />
      </div>
    </Page>
  );
}
