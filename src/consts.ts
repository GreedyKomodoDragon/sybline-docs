export const SITE = {
  title: "Sybline Docs",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://gitlab.com/Sybline/docs-website/-/tree/main/src/content/docs`;

export const COMMUNITY_INVITE_URL = ``;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, Record<string, { text: string; link: string }[]>>
>;
export const SIDEBAR: Sidebar = {
  en: {
    v010: {
      "About Sybline": [
        { text: "Introduction", link: "en/v010/about/introduction" },
        { text: "FIFO Queues", link: "en/v010/about/fifo" },
        { text: "Routing", link: "en/v010/about/routing" },
        { text: "Snapshotting", link: "en/v010/about/snapshotting" },
        { text: "Authentication", link: "en/v010/about/authentication" },
      ],
      "Cluster Setup": [
        { text: "Overview", link: "en/v010/cluster/options" },
        { text: "Configuration", link: "en/v010/cluster/configurations" },
        { text: "Docker", link: "en/v010/cluster/docker" },
      ],
      "Go Client": [
        { text: "Getting Started", link: "en/v010/golang/install" },
        { text: "Authentication", link: "en/v010/golang/auth" },
        { text: "Queue Creation", link: "en/v010/golang/queue" },
        { text: "Routing", link: "en/v010/golang/routing" },
        { text: "Publishing", link: "en/v010/golang/publisher" },
        { text: "Consuming", link: "en/v010/golang/consuming" },
      ],
    },
    v020: {
      "About Sybline": [
        { text: "Introduction", link: "en/v020/about/introduction" },
        { text: "FIFO Queues", link: "en/v020/about/fifo" },
		{ text: "Dead Letter Queues", link: "en/v020/about/deadletterqueue" },
        { text: "Routing", link: "en/v020/about/routing" },
        { text: "Snapshotting", link: "en/v020/about/snapshotting" },
        { text: "Authentication", link: "en/v020/about/authentication" },
      ],
      "Cluster Setup": [
        { text: "Overview", link: "en/v020/cluster/options" },
        { text: "Configuration", link: "en/v020/cluster/configurations" },
        { text: "Docker", link: "en/v020/cluster/docker" },
      ],
      "Go Client": [
        { text: "Getting Started", link: "en/v020/golang/install" },
        { text: "Authentication", link: "en/v020/golang/auth" },
        { text: "Queue Creation", link: "en/v020/golang/queue" },
        { text: "Routing", link: "en/v020/golang/routing" },
        { text: "Publishing", link: "en/v020/golang/publisher" },
        { text: "Consuming", link: "en/v020/golang/consuming" },
      ],
    },
  },
};

export const KNOWN_VERSIONS = ["v0.2.0", "v0.1.0"];
