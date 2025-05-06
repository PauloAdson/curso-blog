import { Container } from '@/components/container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeadin/indes';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage href="#" src="/images/bryen_0.png" />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2025 10:00
          </time>

          <PostHeading as="h2" url="#">
            Começando
          </PostHeading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            consectetur modi nisi et, perferendis maiores enim dolore, omnis ad
            doloremque officiis quae aliquid cupiditate iure molestias eveniet
            excepturi vel exercitationem.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
