import './styles.css';
import background from '../../assets/github.png';
import { InputGit } from '../../components/Input';
import ItemRepo from '../../components/ItemRepo';
import { useState } from 'react';
import { Button } from '../../components/Button';
import {api} from '../../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos,setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id);
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
    }else{
      alert("O Repositório não foi encontrado");
    }
    alert('Esse repositório já está na lista!');
  }
  const handleRemoveRepo = (id) => {
    console.log("Removendo: ", id);
    const found = repos.find((repo) => repo.id === id);
    setRepos(repos.filter(repo => found.id !== repo.id));
  }
  return (<>
    <div className='body'>
      <header>
          <img src={background} alt="Imagem de logo do GitHub" />
      </header>
      <InputGit value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </div>
    </>);
}

export default App;