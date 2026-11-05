import { PRODUCTS } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return PRODUCTS.map(({ slug }) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ProductDetailClient key={params.slug} params={params} />;
}
