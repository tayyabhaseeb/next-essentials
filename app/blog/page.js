import Link from "next/link";
import React from "react";

function page({ params }) {
  return (
    <>
      <h2>Thank you for visiting the blogs</h2>
      <p>{params.slug}</p>
    </>
  );
}

export default page;
