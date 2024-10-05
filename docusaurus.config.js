// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Jack's Economy",
	tagline:
		'Automatable Economy Mod For Modpacks or Servers with Create Integration',
	favicon: './img/favicon.png',

	// Set the production url of your site here
	url: 'https://scsupercraft.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/jacks-economy/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'SCsupercraft', // Usually your GitHub org/user name.
	projectName: 'jacks-economy', // Usually your repo name.

	onBrokenLinks: 'ignore',
	onBrokenMarkdownLinks: 'ignore',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	plugins: [
		[
			require.resolve('@cmfcmf/docusaurus-search-local'),
			{
				// whether to index docs pages
				indexDocs: true,

				// Whether to also index the titles of the parent categories in the sidebar of a doc page.
				// 0 disables this feature.
				// 1 indexes the direct parent category in the sidebar of a doc page
				// 2 indexes up to two nested parent categories of a doc page
				// 3...
				//
				// Do _not_ use Infinity, the value must be a JSON-serializable integer.
				indexDocSidebarParentCategories: 0,

				// Includes parent categories path in search result
				includeParentCategoriesInPageTitle: false,

				// whether to index blog pages
				indexBlog: false,

				// whether to index static pages
				// /404.html is never indexed
				indexPages: false,

				// language of your documentation, see next section
				language: 'en',

				// setting this to "none" will prevent the default CSS to be included. The default CSS
				// comes from autocomplete-theme-classic, which you can read more about here:
				// https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
				// When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
				// overwrites with `!important`, because they might otherwise not be applied as expected. See the
				// following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
				style: undefined,

				// The maximum number of search results shown to the user. This does _not_ affect performance of
				// searches, but simply does not display additional search results that have been found.
				maxSearchResults: 8,

				// lunr.js-specific settings
				lunr: {
					// When indexing your documents, their content is split into "tokens".
					// Text entered into the search box is also tokenized.
					// This setting configures the separator used to determine where to split the text into tokens.
					// By default, it splits the text at whitespace and dashes.
					//
					// Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
					tokenizerSeparator: /[\s\-]+/,
					// https://lunrjs.com/guides/customising.html#similarity-tuning
					//
					// This parameter controls the importance given to the length of a document and its fields. This
					// value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
					// reduces the effect of different length documents on a term’s importance to that document.
					b: 0.75,
					// This controls how quickly the boost given by a common word reaches saturation. Increasing it
					// will slow down the rate of saturation and lower values result in quicker saturation. The
					// default value is 1.2. If the collection of documents being indexed have high occurrences
					// of words that are not covered by a stop word filter, these words can quickly dominate any
					// similarity calculation. In these cases, this value can be reduced to get more balanced results.
					k1: 1.2,
					// By default, we rank pages where the search term appears in the title higher than pages where
					// the search term appears in just the text. This is done by "boosting" title matches with a
					// higher value than content matches. The concrete boosting behavior can be controlled by changing
					// the following settings.
					titleBoost: 150,
					contentBoost: 1,
					tagsBoost: 50,
					parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
				},
			},
		],
	],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',

					includeCurrentVersion: false,
					lastVersion: '1.20.1',
					versions: {
						'1.20.1': {
							label: '1.20.1',
							path: '/1.20.1',
							badge: true,
						},
						'1.19.2': {
							label: '1.19.2',
							path: '/1.19.2',
							badge: true,
						},
					},

					editUrl:
						'https://github.com/SCsupercraft/jacks-economy/tree/main/',
				},
				blog: {
					routeBasePath: '/updates',
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					postsPerPage: 'ALL',
					blogSidebarTitle: 'All updates',
					blogSidebarCount: 'ALL',
					editUrl:
						'https://github.com/SCsupercraft/jacks-economy/tree/main/',
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'ignore',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Jack's Economy",
				logo: {
					alt: "Jack's Economy Logo",
					src: './img/logo2.png',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'sidebar',
						position: 'left',
						label: 'Documentation',
					},
					{ to: '/updates', label: 'Updates', position: 'left' },
					{
						type: 'docsVersionDropdown',
						position: 'right',
					},
					{
						href: 'https://github.com/Khajiitos/JacksEconomy',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Player Guide',
								to: '/docs/category/player-guide',
							},
							{
								label: 'Admin Tutorial',
								to: '/docs/category/admin-tutorial',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/3F8gBbMCXU',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Updates',
								to: '/updates',
							},
							{
								label: 'Curseforge',
								href: 'https://www.curseforge.com/minecraft/mc-mods/flapjacks-economy',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/Khajiitos/JacksEconomy',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} SCsupercraft. Copyright © ${new Date().getFullYear()} FlapjacksMods. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
		}),
};

export default config;
