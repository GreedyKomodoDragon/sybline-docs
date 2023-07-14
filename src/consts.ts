export const SITE = {
	title: 'Sybline Docs',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://gitlab.com/Sybline/docs-website/-/tree/main/src/content/docs`;

export const COMMUNITY_INVITE_URL = ``;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'About Sybline': [
			{ text: 'Introduction', link: 'en/about/introduction' },
			{ text: 'FIFO Queues', link: 'en/about/fifo' },
			{ text: 'Routing', link: 'en/about/routing' },
			{ text: 'Snapshotting', link: 'en/about/snapshotting' },
			{ text: 'Authentication', link: 'en/about/authentication' },
		],
		'Cluster Setup': [
			{ text: 'Overview', link: 'en/cluster/options' },
			{ text: 'Configuration', link: 'en/cluster/configurations' },
			{ text: 'Docker', link: 'en/cluster/docker' },
		],
		'Go Client': [
			{ text: 'Getting Started', link: 'en/golang/install' },
			{ text: 'Authentication', link: 'en/golang/auth' },
			{ text: 'Queue Creation', link: 'en/golang/queue' },
			{ text: 'Routing', link: 'en/golang/routing' },
			{ text: 'Publishing', link: 'en/golang/publisher' },
			{ text: 'Consuming', link: 'en/golang/consuming' },
		],
	},
};

export const KNOWN_VERSIONS = [
	'0.1.0'
]