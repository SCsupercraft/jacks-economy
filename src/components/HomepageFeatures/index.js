import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { type } from '@generated/site-storage';

const FeatureList = [
	{
		title: 'All Items and Machines',
		type: 'img',
		img: '/jacks-economy/img/featured/all_items.png',
		description: (
			<>
				Jack's Economy offers lots of items from machines, to currency
				and wallets.
			</>
		),
	},
	{
		title: 'Money Stacks',
		type: 'img',
		img: '/jacks-economy/img/featured/money_stacks.png',
		description: (
			<>Placeable money stacks for each denomination of currency</>
		),
	},
	{
		title: 'Auto-Exporting',
		type: 'img',
		img: '/jacks-economy/img/featured/exporting_diamonds.png',
		description: (
			<>
				Here is a machine selling diamonds using rotational power from
				the Create Mod.
			</>
		),
	},
	{
		title: 'Configurable Shop',
		type: 'img',
		img: '/jacks-economy/img/featured/admin_shop.png',
		description: (
			<>
				Completely configurable admin shop for modpack creators or
				server owners.
			</>
		),
	},
	{
		title: 'Using RF',
		type: 'img',
		img: '/jacks-economy/img/featured/rf_variants.png',
		description: (
			<>
				There are machine variants that use RF instead of rotational
				power.
			</>
		),
	},
];

function Feature({ type, svg, img, title, description }) {
	let imgElement;
	switch (type) {
		case 'svg': {
			const Svg = svg;
			imgElement = (
				<Svg
					className={styles.featureSvg}
					role="img"
				/>
			);
			break;
		}
		case 'img': {
			imgElement = (
				<img
					src={img}
					className={styles.featureImg}
				></img>
			);
			break;
		}
		default:
			throw 'Featured Item Has No Type';
	}
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">{imgElement}</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature
							key={idx}
							{...props}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
