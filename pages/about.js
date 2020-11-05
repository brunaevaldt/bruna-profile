import Head from "next/head";

export default function Hello() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>About</h1>
        <section>This page was created to help Bruna find a job.</section>
      </header>
    </div>
  );
}
