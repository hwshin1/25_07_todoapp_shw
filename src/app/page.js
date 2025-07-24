import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        항상 함께 해
      </main>
      <div>
        대전 너와함께 웃고 너와 함께 울고 항상 함께 해 랄라 라라라라라라 라라라라라 라라라라라
      </div>
    </div>
  );
}
