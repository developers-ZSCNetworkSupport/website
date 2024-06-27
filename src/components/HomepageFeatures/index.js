import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '网络维护科wiki',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        wiki是每一个网维的成员的知识结晶，在浏览wiki的同时，你也可以帮助我们将wiki变得更好
      </>
    ),
  },
  {
    title: '开发组文档',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        如果你是开发组的成员，在正式开始接触项目前一定要看一下文档
      </>
    ),
  },
  {
    title: '公告',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        这里记载了网络维护科的历史公告
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
