import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log('\n', 'D findAllPublic', '\n');

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log('\n', 'D findBySlugPublic', '\n');

    const post = await drizzleDb.query.posts.findFirst({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post não encontrado para o slug');

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    console.log('\n', 'D findAll', '\n');

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log('\n', 'D findById', '\n');

    const post = await drizzleDb.query.posts.findFirst({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não encontrado para o ID');

    return post;
  }
}

// (async () => {
//   // como-a-tecnologia-impacta-nosso-bem-estar false
//   // 6b204dab-2312-4525-820a-a0463560835f false
//   // os-desafios-do-trabalho-remoto-moderno true
//   // 76396dd3-9581-43b5-856d-fe1a78714e8c true

//   const repo = new DrizzlePostRepository();
//   // const posts = await repo.findAll();
//   // const posts = await repo.findAllPublic();
//   // const post = await repo.findById('76396dd3-9581-43b5-856d-fe1a7874e8c');
//   const post = await repo.findBySlugPublic(
//     'os-desafios-do-trabalho-remoto-moderno',
//   );

//   // posts.forEach((post) => console.log(post.id, post.published));
//   console.log(post);
// })();
