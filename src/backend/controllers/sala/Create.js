import { set, push } from 'firebase/database';
import { refSala } from '../../firebase';

const Post = (newRecord) => {
  console.log('teste')
    const newPost = push(refSala);
    if (Boolean(newRecord)) {
      set(newPost,{
          sala: newRecord,
        }   
      ).then(() => {
        console.log('Registro criado com sucesso! Chave:', newPost.key);
        alert('Registro criado com sucesso!')
      }).catch((error) => {
        console.log('Erro ao criar o registro:', error);
        alert('Erro ao criar o registro!')
      });
    }

}

export default Post;