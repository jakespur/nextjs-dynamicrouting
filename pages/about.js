import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <>
      <Link href="/" as="/au">
        <a>Home</a>
      </Link>
      <h1>About</h1>
      <img src="/about.jpeg" />
    </>
  )
}

export default About