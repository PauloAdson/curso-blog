import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postTable); // ISSO LIMPA A BASE DE DADOS ||CUIDADO!!!
    await drizzleDb.insert(postTable).values(posts);

    console.log();
    console.log(`${posts.length} posts foram salvos na base de dados.`);
    console.log();
  } catch (error) {
    console.log();
    console.log(`Ocorreu um erro ao inserir os posts no banco de dados:`);
    console.log();
    console.log(error);
  }
})();
