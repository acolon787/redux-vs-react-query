import * as React from "react"
import * as styles from "./demo.module.css"
import Container from "../components/Container"
import QueryTable from "../components/ReactQueryTable"

const DemoPage = () => {
  return (
    <main>
      <Container>
      <title>Demo Page</title>
      <h1>
        Redux Vs react-query
      </h1>
      <div className={styles.table}>
      {"react-query pagination demo"}
      <QueryTable />
      </div>
      </Container>
    </main>
  )
}

export default DemoPage
