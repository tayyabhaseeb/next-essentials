import Link from "next/link";
import React from "react";

function MainBlogPage() {
  return (
    <>
      <h2>Thank you for visiting the blogs</h2>
      <p>
        <Link href="/blog/blog-1">Blog-1</Link>
      </p>
      <p>
        <Link href="/blog/blog-2">Blog-2</Link>
      </p>
    </>
  );
}

export default MainBlogPage;
