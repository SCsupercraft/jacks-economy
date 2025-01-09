import React from 'react';

export function Box({ children }) {
	return (
		<div
			style={{
				color: '#fff',
				padding: '0.5rem',
				width: 'fit-content',
				border: '1px solid var(--ifm-alert-border-color)',
			}}
			class="details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module"
		>
			{children}
		</div>
	);
}

export function Highlight({ children, color, className }) {
	return (
		<span
			style={{
				backgroundColor: color,
				borderRadius: '2px',
				color: '#fff',
				padding: '0.2rem',
			}}
			className={className}
		>
			{children}
		</span>
	);
}

export function CurseforgeLink({ link }) {
	return (
		<div
			style={{
				paddingTop: '0.2rem',
				paddingBottom: '0.2rem',
			}}
		>
			<a
				href={link}
				target="_blank"
				style={{
					backgroundColor: '#ff784d',
					borderRadius: '2px',
					color: '#000',
					textDecoration: 'none',
					fontWeight: '500',
					padding: '0.2rem',
					marginBottom: '0.5rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: 214,
					height: 32,
				}}
			>
				<img
					src="/jacks-economy/img/curse-download.png"
					width={30}
					height={30}
					style={{ marginRight: '4px' }}
				></img>
				Available on Curseforge
			</a>
		</div>
	);
}

export function ModrinthLink({ link }) {
	return (
		<div
			style={{
				paddingTop: '0.2rem',
				paddingBottom: '0.2rem',
			}}
		>
			<a
				href={link}
				target="_blank"
				style={{
					backgroundColor: '#1bd96a',
					borderRadius: '2px',
					color: '#000000',
					padding: '0.2rem',
				}}
			>
				Available on Modrinth
			</a>
		</div>
	);
}
