import Link from 'next/link';

export async function getServerSideProps(context) {
    const query = context.query; // get the search query from the URL query parameters
    const searchParams = new URLSearchParams(query)
    const results = await fetch(`http://localhost:3000/properties/search?${searchParams}`);
    const data = await results.json();
    return { props: { data } };
}

export default function Search({ data }) {
  return (
    <div>
      <h1>Search results</h1>
      {data.map((result) => (
        <div key={result.id}>
          <Link href={`/post/${result.id}`}>
            <a>{result.title}</a>
          </Link>
          <p>{result.excerpt}</p>
        </div>
      ))}
    </div>
  );
}