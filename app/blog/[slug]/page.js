import React from "react";

function BlogSlugPage({ params }) {
  console.log(params);
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  );
}

export default BlogSlugPage;
