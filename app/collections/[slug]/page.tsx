import { COLLECTIONS } from '@/data/products';
import CollectionDetailClient from './CollectionDetailClient';

export function generateStaticParams() {
  return COLLECTIONS.map(({ slug }) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <CollectionDetailClient key={params.slug} params={params} />;
}
