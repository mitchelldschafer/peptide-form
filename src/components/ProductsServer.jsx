import { fetchPeptides } from '@/utils/fetchPeptides';
import ProductsClient from './ProductsClient';

export default async function ProductsServer() {
  const peptides = await fetchPeptides();
  
  return <ProductsClient initialPeptides={peptides} />;
}
