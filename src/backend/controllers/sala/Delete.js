import { remove, ref } from "firebase/database";
import { database } from "../../firebase";

export default function Delete(key){
  console.log(key)
  var keyRef = ref(database, '/Sala/'+`${key}`)
  remove(keyRef)
    .then(() => {
      console.log('Registro excluído com sucesso.');
    })
    .catch((error) => {
      console.error('Erro ao excluir o registro:', error);
    });
}