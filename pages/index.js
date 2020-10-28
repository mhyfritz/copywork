import Head from "next/head";
import Link from "next/link";

import ArrowNarrowRightIcon from "heroicons/outline/arrow-narrow-right.svg";
import ExternalLinkIcon from "heroicons/outline/external-link.svg";

import LogoDribble from "@/components/logo-dribble";
import LogoTailwindCss from "@/components/logo-tailwind-css";
import LogoUiDesignDaily from "@/components/logo-ui-design-daily";

const items = [
  {
    title: "Sidebar Navigation",
    author: "Steve Schoger",
    url: "https://dribbble.com/shots/10907005-Sidebar-navigation/",
    site: "dribble",
  },
  {
    title: "Tailwind Take-Home Project",
    author: "Adam Wathan",
    url: "https://github.com/adamwathan/tailwind-take-home-project",
    site: "tailwind-css",
  },
  {
    title: "Sign Up UI Design",
    author: "Ildiko Gaspar",
    url:
      "https://uidesigndaily.com/posts/sketch-sign-up-ui-design-form-day-1206",
    site: "ui-design-daily",
  },
];

function Logo({ site }) {
  switch (site) {
    case "dribble":
      return <LogoDribble className="h-5 fill-current" />;
    case "tailwind-css":
      return <LogoTailwindCss className="h-10" />;
    case "ui-design-daily":
      return <LogoUiDesignDaily className="h-8" />;
  }
}

export default function Index() {
  return (
    <>
      <Head>
        <title>Copywork</title>
      </Head>

      <div className="container px-8 py-16 mx-auto">
        <ol className="space-y-4">
          {items.map((item, i) => (
            <li key={`${i + 1}:${item.name}`}>
              <div className="flex items-center py-4 pr-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-40">
                  <Logo site={item.site} />
                </div>
                <div>
                  <div className="border-2 border-gray-200 rounded-md">
                    <img
                      className="h-16 p-1 rounded-md"
                      src={`/${i + 1}/screenshot.png`}
                      alt="preview"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1 ml-6">
                  <h2 className="font-semibold text-gray-900">{item.title}</h2>
                  <h3 className="text-sm text-gray-500">
                    original by {item.author}
                  </h3>
                </div>
                <div className="flex items-center space-x-6 text-gray-700">
                  <a
                    className="flex items-center space-x-1"
                    href={item.url}
                    target="_blank"
                  >
                    <span>original</span>
                    <ExternalLinkIcon className="h-6" />
                  </a>
                  <Link href={`/${i + 1}`}>
                    <a className="flex items-center space-x-1">
                      <span>copy</span>
                      <ArrowNarrowRightIcon className="h-6" />
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
