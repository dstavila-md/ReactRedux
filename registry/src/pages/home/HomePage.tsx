import type { HomeLoaderResult } from "./homeLoader";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {

  const {featuredPackages} = useLoaderData() as HomeLoaderResult;
  
  console.log(featuredPackages);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}
