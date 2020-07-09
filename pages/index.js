import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <>
    <Link href="/about" as="/au/about">
      <a>About</a>
    </Link>&nbsp;
    <Link href="/category" as="/au/categories/1">
      <a>Category top level 1</a>
    </Link>&nbsp;
    <Link href="/category" as="/au/categories/1/2">
      <a>Category parent/child 1/2</a>
    </Link>&nbsp;
    <h1>Home</h1>
    <img src="/home.jpeg" />
    </>
)
}

export default Home