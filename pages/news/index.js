import Link from 'next/link'
import React from "react";

function NewsPage() {
  return (
    <React.Fragment>
      <h1>the news page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great-framework">
            Nextjs is a greatframework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </React.Fragment>
  );
}

export default NewsPage;
