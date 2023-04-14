import { Card } from '../../components/Card';
import { Form } from '../../components/Form';
import { Layout } from '../../components/Layout';
import { motion } from 'framer-motion';
import './style.css';

function App() {
  return (
    <Layout >
       <motion.h2 
        className='text_home'
        initial={{x: -200}}
        animate={{x: 0}}
        transition={{duration: 0.8}}
       >
          O seu celular caiu? Quebrou? Você está com problema em seu celular e 
          não sabe como resolver? 
          Venha para WILL TEC Assistência técnica especializada em celulares. 
          Fazemos também troca de tela, conectores, desbloqueio, Acessórios e muito mais… 
          Menor preço e maior qualidade.   
       </motion.h2>
      <div className='conteiner_cards'>
        <Form />
        <Card />
      </div>
    </Layout>
  );
}

export default App;
