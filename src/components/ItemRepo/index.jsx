import './styles.css'

function ItemRepo({repo, handleRemoveRepo}){
  const handleRemove = () =>{
    handleRemoveRepo(repo.id);
  }
  return (
    <div className='containerItem'>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel="noreferrer" className='repo'>Ver repositório</a><br />
      <a href='#'  onClick={handleRemove} className='remover'>Remover</a>
      <hr />
    </div>
  )
}

export default ItemRepo;