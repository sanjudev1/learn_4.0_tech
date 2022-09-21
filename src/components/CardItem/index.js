// Write your code here.
import './index.css'

const Technologies = props => {
  const {technology} = props
  return (
    <li className={technology.className}>
      <h1>{technology.title}</h1>
      <p>{technology.description}</p>
      <img className="image" src={technology.imgUrl} alt={technology.title} />
    </li>
  )
}
export default Technologies
