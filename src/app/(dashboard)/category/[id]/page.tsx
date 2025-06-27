'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { useParams } from 'next/navigation';

export default function CategoriesPlaylist() {
  const params = useParams();
  return (
    <>
      <CenterBlock title={`Плейлист дня ${params.id}`} />
    </>
  );
}
