import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import HeroAnimation from '../components/HeroAnimation';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      description={siteConfig.tagline}
    >
      <header className={styles.Herobanner}>
        <div className={styles.Container}>
          <div>
            <h1 className={styles.DisplayTitle}>{siteConfig.title}</h1>
            <p className={styles.Tagline}>{siteConfig.tagline}</p>

            <div className={styles.CTAs}>
              <Link
                className="button button--primary button--lg"
                to={useBaseUrl('docs/')}
              >
                Getting Started
              </Link>
              <a
                className="button button--secondary button--lg"
                href="https://native-elements.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Build your theme
              </a>
            </div>
          </div>
          <div className={styles.AnimationContainer}>
            <HeroAnimation />
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
