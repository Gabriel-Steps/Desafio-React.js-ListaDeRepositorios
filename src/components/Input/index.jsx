import './styles.css'

export const InputGit = ({value, onChange}) => {
  return (
    <div className='container'>
        <input type="text" value={value} onChange={onChange}/>
    </div>
  )
}
