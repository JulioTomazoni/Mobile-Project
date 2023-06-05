import { set, push } from 'firebase/database';
import { refSala } from '../../firebase';

const Post = (newRecord) => {
  console.log('teste')
    const newPost = push(refSala);
    if (Boolean(newRecord)) {
      set(newPost,{
          sala: newRecord,
        }   
      ).then((snapshot) => {
        const key = snapshot.key;
        console.log('Registro criado com sucesso! Chave:', key);
      }).catch((error) => {
        console.log('Erro ao criar o registro:', error);
      });
    }

}

export default Post;