/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields, tagline } = {} } = context;
  const description = customFields.description as string;
  return (
    <Layout title={tagline} description={description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <img
              alt="Kuberise logo"
              className={styles.heroLogo}
              src={useBaseUrl("img/kuberise.io-Icon-transparent.png")}
            />
            <h1 className={styles.heroProjectTagline}>

              kuberise.io
            </h1>
            <h2 className={styles.heroProjectSubLine}>An Internal Developer Platform for Kubernetes</h2>
            <div className={styles.indexCtas}>
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src="https://ghbtns.com/github-btn.html?user=kuberise&amp;repo=kuberise.io&amp;type=star&amp;count=true&amp;size=large"
                  width={160}
                  height={30}
                  title="GitHub Stars"
                />
              </span>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl("/docs/introduction")}
              >
                Get Started with Kuberise
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx(styles.announcement, styles.announcementBanner)}>
          <div className={styles.announcementInner}>
            <h1>Install and configure platfrom tools and services with one command</h1> <h4>Increase the productivity of your developers and reduce time to market. </h4>
          </div>
          <div>
            {/* <img
              src={useBaseUrl("img/kuberise-console.png")}
              alt="kuberise bash console"
              width="800"
              height="600"
            /> */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
