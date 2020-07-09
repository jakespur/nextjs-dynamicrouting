import React from 'react'
import Link from 'next/link'

function Category() {
  return (
    <>
      <Link href="/" as="/au">
        <a>Home</a>
      </Link>
      <h1>Category page</h1>
    </>
  )
}

export default Category;