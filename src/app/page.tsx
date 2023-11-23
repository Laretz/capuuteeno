"use client"

import { QueryClientProvider, QueryClient } from "react-query";
import Image from 'next/image'
import styles from './page.module.css'
import { ProductsList } from "./components/products-list";
import { FilterBar } from './components/filter-bar'

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
    <main className={styles.main}>
      <FilterBar/>
      <ProductsList/>
    </main>
  </QueryClientProvider>
)
}
