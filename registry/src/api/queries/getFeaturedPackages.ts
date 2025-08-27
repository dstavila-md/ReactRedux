import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES: string[] = [
	'react',
	'typescript',
	'esbuild',
	'vite'
];

export async function getFeaturedPackages(): Promise<PackageDetails[]> {
	const promises = FEATURED_PACKAGES.map(async(name)=>{
		const result = await fetch(`https://registry.npmjs.org/${name}`);
		return result.json();
	});

	const data = await Promise.all(promises);

	return data as PackageDetails[];
}