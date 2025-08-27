import type { Params } from 'react-router-dom';
import { getPackage } from '../../api/queries/getPackage';

interface LoaderArgs {
  params: Params;
}



export async function detailsLoader({ params }: LoaderArgs) {
  const { name } = params;
  if (!name) {
    throw new Error('Package name is required');
  }

  const details = await getPackage(name);

  return { details };
}
