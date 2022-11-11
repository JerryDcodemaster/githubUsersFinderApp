function CardInfo({ img, twitter, login, html_url, hireable, followers, following, gists, repos, email, bio, company, blog, location }) {
  return (
    <div className="container">
        <p className="bg-light p-2">
            <small>
                <a href="/" className='text-decoration-none'>Back to search</a>
            </small>
        </p>
        <div className="card p-5 shadow-sm">
            <div className="row g-5">
                <div className="col-md-5">
                    <img src={img} alt="user-img" className="w-100 img-thumbnail mb-0" />
                    <a href={html_url} target='_blank' rel="noopener noreferrer" className="btn rounded btn-danger w-100 btn-lg btn-block mb-3">{login}</a>
                </div>

                <div className="col-md-7">
                    <span className="badge bg-secondary">followers {followers}</span>
                    <span className="badge bg-danger mx-2">following {following}</span>
                    <span className="badge bg-warning text-dark">public gists {gists}</span>
                    <span className="badge bg-info mx-2">public repos {repos}</span>

                    <ul className="list-group mt-5 shadow-sm">
                        <li className="list-group-item">Username: {login}</li>
                        <li className="list-group-item">Email: {email || 'N/A'}</li>
                        <li className="list-group-item">Bio: {bio || 'N/A'}</li>
                        <li className="list-group-item">
                            Twitter Username: <a href={`https://twitter.com/${twitter}`} target='_blank' rel="noopener noreferrer">
                                {twitter === null ? 'N/A' : 'Visit Profile'}
                            </a>
                        </li>
                        <li className="list-group-item">Company: {company || 'N/A'}</li>
                        <li className="list-group-item">Hireable: {hireable ? 'True' : 'False'}</li>
                        <li className="list-group-item">
                            Blog / Website: 
                            &nbsp;
                            <a href={blog?.startsWith('http://') || blog?.startsWith('https://') ? blog : `http://${blog}`} target='_blank' rel="noopener noreferrer">
                                Click Me
                            </a>
                        </li>
                        <li className="list-group-item">Location: {location || 'N/A'}</li>
                        <li className="list-group-item">
                            <a className="text-decoration-none" href={html_url}>Visit Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <h3 className="mt-3">Repositories</h3>
        <hr />
    </div>
  )
}

export default CardInfo