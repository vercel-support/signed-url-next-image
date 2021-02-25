import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const SIGNED_URL =
  "https://posh-onyx-image-uploadswebsite-dev.s3.us-east-1.amazonaws.com/public//product-reviews/Infinito%2030/IMG_3330%20%281%29.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ3XPYBRSFNYP4VGE%2F20210225%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210225T055140Z&X-Amz-Expires=172800&X-Amz-Signature=7a2fbaf74db4af2b8e5b994426fed4faaafe064f32675283035cdbc91ff787fb&X-Amz-SignedHeaders=host";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Signed URL `next/image` Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>next/image</h1>
        <Image src={SIGNED_URL} alt="Yo" height={640} width={480} />
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
