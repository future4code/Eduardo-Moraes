import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';

const CardGrandeContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="../minhaFoto.jpeg"
          nome="Eduardo" 
          descricao="Oi, eu sou o Eduardo. Sou aluno da Labenu. Adoro experimentar coisas novas e senpre tentar superar meus limites dia após dia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"
          nome="Email:"
          descricao="dudugugusm@gmail.com"
        />

        <CardPequeno
          imagem="http://www.atlagroup.com.br/wp-content/uploads/2019/04/endere%C3%A7o-icone-preto-300x300.png"
          nome="Endereço:"
          descricao="Brasília"
        />
      </div>

      <div className="page-section-container">
        <h2>Institutos de ensino</h2>
        <CardGrande 
          imagem="https://media.licdn.cn/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0/1588617268603?e=2159024400&v=beta&t=a88brKeePgoXCa0PpjouqjPLfp25RQso7CCWfbvQ9qg" 
          nome="Labenu" 
          descricao="curso full-stack" 
        />
        
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLRIYqffphLkoTlUA-hlcySXppGOpDgcAFjLaiB2gg=s800-c-k-c0x00ffffff-no-rj" 
          nome="curso em video" 
          descricao="curso JavaScript básico." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
