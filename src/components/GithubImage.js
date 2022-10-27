import img from '../img/github.png'

const GithubImage = () => {
  return (
    <div className='navbar navbar-brand p-2'>
      <img className='github' src={img} alt="" />
      <h4 className="text-white px-3 fw-bold">GitHub Finder</h4>
    </div>
  )
}

export default GithubImage