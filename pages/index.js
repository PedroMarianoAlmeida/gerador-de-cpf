import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gerador de CPF</title>
        <meta name="description" content="Gere CPF aleatórios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gerador de CPF</h1>
        <p className={styles.description}>Essa api retorna CPFs aleatórios!</p>
        Clique em /cpf-aleatorio e pegue seu JSON
      </main>
    </div>
  );
}
