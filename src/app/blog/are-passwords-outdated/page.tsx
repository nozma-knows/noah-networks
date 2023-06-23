import Page from "@/components/ui/pages/Page";
import { Header, Content } from "@/components/feature-blog";
import { ArePasswordsOutdated } from "@/assets/blog-cover-images";

// Content
const title = `Are passwords outdated?`;
const category = `Technology`;
const coverImg = ArePasswordsOutdated;
const published = `April 24, 2023`;

const content = [
  `When it comes to the success of a web/mobile application, ease of use is essential. Requiring users to remember passwords and go through a laborious process to reset them when forgotten adds an unnecessary barrier to entry that could be easily mitigated. Passwords also pose a security risk if compromised. By removing passwords from the equation entirely, attackers are left with one less approach to compromise your system. This is where passwordless authentication and magic links come into play.`,
  `# What is passwordless Authentication?`,
  `Passwordless authentication, as the name suggests, refers to authentication methods that don't require users to enter a password. In the traditional approach to web-based authentication, users are required to enter some public identifier such as an email address, username, or phone number along with a secure proof of identity, typically a user-set password. Passwordless approaches on the other hand allow users to signup/login with just an email address, known as a magic link, or through an existing social network such as Google, Facebook, or Twitter, known as a social login`,
  `# Magic Links`,
  `Magic links are a form of passwordless authentication that verifies user identity through an email sent to the user. Applications generate a link with an embedded token and send it via email. When a user opens the link, the token is verified and the user is granted access. To increase the security of this workflow, links are ardtypically made to be one-time use and have a set expiration date. `,
  `# Social Logins`,
  `Social logins piggyback off of existing information from commonly used social networking services such as Google, Facebook, and Twitter, to provide a passwordless authentication experience. This approach allows users to sign in to an application using their credentials from a different platform, eliminating the need to remember new credentials for every new site/app the user uses.`,
  `# Benefits of Passwordless Authentication`,
  `## Quick and easy authentication experience for users
  Passwordless methods tend to be a faster and easier method of authentication for users. Without the need for passwords, users are also left with one less thing to create, maintain and update.`,
  `## No need to maintain infrastructure for safely storing passwords
  When using passwords, its imperative to maintain infrastructure for encrypting, storing, and protecting those passwords. This requires serious development time and resources to implement correctly.`,
  `## Safer than password-based alternative`,
  `Password attacks account for a majority of corporate data breaches. According to an [article](https://www.tracesecurity.com/blog/articles/weak-passwords-cause-data-breaches) posted by Tracesecurity in 2018, 81% of hacking-related breaches leveraged stolen or weak passwords. With the number of password attacks skyrocketing, according to the [2022 Microsoft Digital Defense Report](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE5bcRe?culture=en-us&country=us), 2022 saw a 74% increase in password-based attacks, it's clear to see that passwordless approaches are going to become more and more mainstream over the coming years.`,
  `# Challenges of using Passwordless Authentication`,
  `## Reliance on emailing services
  In order for passwordless authentication approaches such as magic links or multi-factor authentication to work, the ability to reliably send emails becomes imperative. It's important to choose an emailing service that you trust as any downtime they experience, is downtime you'll be experiencing as well.`,
  `## Emails going to spam`,
  `A common issue with any service that relies on emailing is the spam folder. If verification emails are going to spam, the user experience can quickly go down the drain and end up causing more friction than simply using passwords.`,
  `## Password security fully linked to email or other accounts`,
  `Magic links are only as secure as the email provider the user uses. If someone gains access to your email inbox, they have access to any passwordless accounts that depend on that email.`,
  `# Should you go passwordless?`,
  `Even with the security risks that passwords pose, they still remain the most common authentication method used today, and they aren't going away anytime soon. With that said, it looks like passwords will slowly be phased out for passwordless solutions.`,
  `Considering these factors, if your system already relies on password-based authentication, the best way forward may be to start integrating passwordless options such as magic links, multi-factor authentication, or social logins as an alternative. This approach allows you to slowly migrate users off of passwords as they become less popular.`,
  `On the other hand, if you are starting from scratch, relying solely on passwordless methods could be the right move for you. With the increased security and ease of use for users, passwordless approaches have clear benefits and potential.`,
  `With that said, at the end of the day, the best approach is always what your users want, so when and doubt ask your users what they’d prefer and build out a system that works best for them.`,
  `# How to Quickly get started with Passwordless Authentication`,
  `A great way to set up passwordless authentication in your applications with minimal development effort is to opt into a third-party solution such as [Magic Link](https://magic.link/).`,
  `Magic Link is a company that provides software development kits (SDKs) for multiple features including authentication. [Magic Auth](https://magic.link/auth), their authentication offering, allows developers to quickly and easily integrate passwordless authentication features into web/mobile applications.`,
  `Other popular passwordless authentication solutions include [Auth0](https://auth0.com/passwordless), [AuthSignal](https://www.authsignal.com/features/passwordless-authentication), and [Okta](https://www.okta.com/passwordless-authentication/).`,
  `# Resources for getting started`,
  `- [Magic Auth Documentation](https://magic.link/docs/auth/overview)
- [Next.js Application](https://magic-link-test-theta.vercel.app/) I put together to test out Magic Link - [Source code](https://github.com/nozma-knows/magic-link-test)`,
];

export default function Blog() {
  return (
    <Page>
      <div className="flex flex-col w-full h-full items-center gap-8">
        <Header
          title={title}
          category={category}
          coverImg={coverImg}
          published={published}
        />
        <Content content={content} />
      </div>
    </Page>
  );
}
