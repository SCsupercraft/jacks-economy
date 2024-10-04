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

	onBrokenLinks: 'warn',
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
			require.resolve('docusaurus-lunr-search'),
			{
				fields: {
					title: { boost: 200 },
					content: { boost: 2 },
					keywords: { boost: 100 },
				},
				excludeRoutes: ['/jacks-economy/docs/about'],
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
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
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
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/SCsupercraft/jacks-economy/tree/main/',
					// Useful options to enforce blogging best practices
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
