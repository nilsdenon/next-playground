import type { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { SINGLE_PAGE_QUERY } from "../api/queries"
import { PageProps } from "../api/types"
import { client } from "../api/wordpressClient"
import styles from "../styles/Home.module.css"
import { Heading, Text } from "@chakra-ui/react"

export default function Homepage({ page }: PageProps) {
  console.log(page)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h1" size="3xl">
          Homepage
        </Heading>
        <Text colorScheme={"brand"}>test</Text>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: SINGLE_PAGE_QUERY,
    variables: { slug: "homepage" },
  })

  return {
    props: {
      page: data?.page,
    },
  }
}
