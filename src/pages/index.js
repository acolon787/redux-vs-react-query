import * as React from "react"
import * as styles from "./index.module.css"
import Container from "../components/Container"
import Counter from "../components/Counter"
import UserCard from "../components/UserCard"

const IndexPage = () => {
  return (
    <main>
      <Container>
      <title>Home Page</title>
      <h1>
        Redux Vs react-query
      </h1>
      <div className={styles.counter}>
      <h2>redux counter</h2>
      <Counter />
      </div>
      <div className={styles.card}>
      <h2>react query </h2>
      <UserCard />
      </div>
      </Container>
    </main>
  )
}

export default IndexPage
