import { useLoaderData } from 'react-router-dom';
import type { SearchLoaderResult } from './searchLoader';

export default function SearchPage() {
  const data: SearchLoaderResult = useLoaderData();

  console.log(data);

  return (
    <div>
      <h1>Welcome to the Search Page</h1>
    </div>
  );
}
