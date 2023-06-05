import { set, push } from 'firebase/database';
import { refPatrimonio } from '../../firebase';

const Post = (newRecord) => {
    const newPost = push(refPatrimonio);
    const { patrimonio, quantidade } = newRecord
    if (Boolean(newRecord) && quantidade > 0) {
      set(newPost,{
          patrimonio: patrimonio,
          quantidade: quantidade,
        }   
      ).then((snapshot) => {
        const key = snapshot.key;
        console.log('Registro criado com sucesso! Chave:', key);
      }).catch((error) => {
        console.log('Erro ao criar o registro:', error);
      });
    } else if (quantidade <= 0) {
       alert('Quantidade deve ser maior que zero')
    }

}

export default Post;