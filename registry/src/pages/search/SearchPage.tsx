import { useLoaderData } from "react-router-dom";

export default function SearchPage() {
  const data = useLoaderData();

	console.log(data);

  return (
    <div>
      <h1>Welcome to the Search Page</h1>
    </div>
  );
}
