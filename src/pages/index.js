import * as React from "react"
import Counter from "../components/Counter"
import UserCard from "../components/UserCard"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Redux Vs react-query
      </h1>
      <div>
      <h2>redux counter</h2>
      <Counter />
      </div>
      <div>
      <h2>react query </h2>
      <UserCard />
      </div>
    </main>
  )
}

export default IndexPage
