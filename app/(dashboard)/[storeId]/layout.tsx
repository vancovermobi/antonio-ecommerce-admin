import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { prismadbPLSC } from '@/lib/prismadb';
import Navbar from '@/components/navbar';

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // console.log("StoreId:", params.storeId);

  const store = await prismadbPLSC.store.findFirst({
    where: {
        id: params.storeId,
        userId,
    }
  });

  if (!store) {
    redirect('/');
  };

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
