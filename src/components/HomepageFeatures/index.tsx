import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Professional Experience',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A walkthrough of my professional experience.
      </>
    ),
    link: '/job-experience'
  },
  {
    title: 'Projects',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Random standalone projects for convenience and professional development.
      </>
    ),
    link: '/projects'
  },
  {
    title: 'Personal Life',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A little more about myself.
      </>
    ),
    link: '/personal-life'
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    // <div className={clsx('col col--4')}>
    <div className={ clsx('col col--4')}>
      <a href={link}>
        <div className="text--center">
          {/* <Svg className={styles.featureSvg} role="img" /> */}
        </div>
        <div className={styles.singlefeature +  " text--center padding-horiz--md"}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
