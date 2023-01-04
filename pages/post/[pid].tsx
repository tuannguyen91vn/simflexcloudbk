import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../../styles/Home.module.css';
import { HeaderMiddle } from 'components/headerMiddle';
import { FooterSocial } from 'components/footerSocial';
import { HeroBullets } from 'components/heroBullets';
import { UserCardImage } from 'components/userCardImage';
import { IntroductionImages } from 'components/introductionImages';
import { ProjectsCardsGrid } from 'components/projectsCardsGrid';
import { headersConfig, profile, introductionData } from 'config/information';
import { usePost } from '../../swr/hooks';
import { markdownToHtml } from '../../utils/markdown';

const inter = Inter({ subsets: ['latin'] })

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const { post } = usePost(pid);
  console.log(post);
  return (
    <>
      <Head>
        <title>SimflexCloud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderMiddle links={headersConfig.links} />
        <p>Post ID: {pid}</p>
        <div className={`crayons-article__main`} dangerouslySetInnerHTML={{ __html: post?.body_html }} />
        <FooterSocial />
      </main>
    </>
  )
}
