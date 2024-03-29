export const SITE = {
  title: "Sybline Docs",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/GreedyKomodoDragon/Sybline/blob/main/images/logo_full.svg",
    alt:
      "Sybline logo",
  },
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/GreedyKomodoDragon/sybline-docs/tree/main/src/content/docs`;

export const COMMUNITY_INVITE_URL = ``;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: import.meta.env.PUBLIC_ALGORIA_INDEX_NAME,
  appId: import.meta.env.PUBLIC_ALGORIA_ID,
  apiKey: import.meta.env.PUBLIC_ALGORIA_API,
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
    v031: {
      "About Sybline": [
        { text: "Introduction", link: "en/v031/about/introduction" },
        { text: "FIFO Queues", link: "en/v031/about/fifo" },
		{ text: "Dead Letter Queues", link: "en/v031/about/deadletterqueue" },
        { text: "Routing", link: "en/v031/about/routing" },
        { text: "Snapshotting", link: "en/v031/about/snapshotting" },
        { text: "Authentication", link: "en/v031/about/authentication" },
      ],
      "Cluster Setup": [
        { text: "Overview", link: "en/v031/cluster/options" },
        { text: "Configuration", link: "en/v031/cluster/configurations" },
        { text: "Docker", link: "en/v031/cluster/docker" },
      ],
      "Go Client": [
        { text: "Getting Started", link: "en/v031/golang/install" },
        { text: "Authentication", link: "en/v031/golang/auth" },
        { text: "Queue Creation", link: "en/v031/golang/queue" },
        { text: "Routing", link: "en/v031/golang/routing" },
        { text: "Publishing", link: "en/v031/golang/publisher" },
        { text: "Consuming", link: "en/v031/golang/consuming" },
        { text: "mTLS", link: "en/v031/golang/mtls" },
      ],
    },
    v040: {
      "About Sybline": [
        { text: "Introduction", link: "en/v040/about/introduction" },
        { text: "FIFO Queues", link: "en/v040/about/fifo" },
		{ text: "Dead Letter Queues", link: "en/v040/about/deadletterqueue" },
        { text: "Routing", link: "en/v040/about/routing" },
        { text: "Snapshotting", link: "en/v040/about/snapshotting" },
        { text: "Authentication", link: "en/v040/about/authentication" },
        { text: "Authorisation (RBAC)", link: "en/v040/about/rbac" },
      ],
      "Cluster Setup": [
        { text: "Overview", link: "en/v040/cluster/options" },
        { text: "Configuration", link: "en/v040/cluster/configurations" },
        { text: "Docker", link: "en/v040/cluster/docker" },
      ],
      "Go Client": [
        { text: "Getting Started", link: "en/v040/golang/install" },
        { text: "Authentication", link: "en/v040/golang/auth" },
        { text: "Queue Creation", link: "en/v040/golang/queue" },
        { text: "Routing", link: "en/v040/golang/routing" },
        { text: "Publishing", link: "en/v040/golang/publisher" },
        { text: "Consuming", link: "en/v040/golang/consuming" },
        { text: "mTLS", link: "en/v040/golang/mtls" },
        { text: "RBAC", link: "en/v040/golang/rbac" },
      ],
    },
    v060: {
      "About Sybline": [
        { text: "Introduction", link: "en/v060/about/introduction" },
        { text: "FIFO Queues", link: "en/v060/about/fifo" },
		    { text: "Dead Letter Queues", link: "en/v060/about/deadletterqueue" },
        { text: "Routing", link: "en/v060/about/routing" },
        { text: "Snapshotting", link: "en/v060/about/snapshotting" },
        { text: "Authentication", link: "en/v060/about/authentication" },
        { text: "Authorisation (RBAC)", link: "en/v060/about/rbac" },
      ],
      "Cluster Setup": [
        { text: "Overview", link: "en/v060/cluster/options" },
        { text: "Configuration", link: "en/v060/cluster/configurations" },
        { text: "Docker", link: "en/v060/cluster/docker" },
        { text: "Kubernetes", link: "en/v060/cluster/kubernetes" },
      ],
      "API": [
        { text: "REST", link: "en/v060/api/rest" },
        { text: "gRPC", link: "en/v060/api/grpc" },
      ],
      "Go Client": [
        { text: "Getting Started", link: "en/v060/golang/install" },
        { text: "Authentication", link: "en/v060/golang/auth" },
        { text: "Queue Creation", link: "en/v060/golang/queue" },
        { text: "Routing", link: "en/v060/golang/routing" },
        { text: "Publishing", link: "en/v060/golang/publisher" },
        { text: "Consuming", link: "en/v060/golang/consuming" },
        { text: "mTLS", link: "en/v060/golang/mtls" },
        { text: "RBAC", link: "en/v060/golang/rbac" },
      ],
    },
  },
};

export const KNOWN_VERSIONS = ["v0.6.0", "v0.4.0", "v0.3.1", "v0.2.0", "v0.1.0"];
