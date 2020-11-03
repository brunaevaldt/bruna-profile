import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Bruna Evaldt Carlos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>PHOTO</div>
                <h1>Bruna Evaldt Carlos</h1>
                <h1>QA Engineer</h1>
                <a href="mailto:bruna.evaldt@gmail.com" alt="send me an email">
                    mail
                </a>
                <Link href="#cv" alt="show and print my resume">
                    Print and show CV
                </Link>
            </main>
        </div>
    );
}
