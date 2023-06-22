import { set, push } from 'firebase/database';
import { Authentication, refPatrimonio } from '../../firebase';

const Post = (newRecord) => {
    const newPost = push(refPatrimonio);
    const { patrimonio, quantidade } = newRecord
    if (Boolean(newRecord) && quantidade > 0) {
      auth = Authentication;
      set(newPost,{
          patrimonio: patrimonio,
          quantidade: quantidade,
          usuario   : auth,
        }   
      ).then(() => {
        console.log('Registro criado com sucesso! Chave:', newPost.key);
        alert('Registro criado com sucesso!');
      }).catch((error) => {
        console.log('Erro ao criar o registro:', error);
        alert('Erro ao criar o registro!');
      });
    } else if (quantidade <= 0) {
       alert('Quantidade deve ser maior que zero')
    }

}

export default Post;