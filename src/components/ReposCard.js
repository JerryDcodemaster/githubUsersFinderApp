function ReposCard({ name, id, html_url, license, description, language, forks_count }) {
  return (
    <div className="card my-5 p-3 border-0 shadow" id={id}>
        <div className="row">
            <div className="col-md-6">
                <strong className="d-block">{name}</strong>
                <small>{description}</small>
                <br />
                <small>license: {license?.name || 'N/A'}</small>
            </div>
            <div className="col-md-3">
                <span className="badge bg-danger mx-2">
                    {forks_count} forks
                </span>

                <span className="badge bg-dark">
                    language: {language || 'N/A'}
                </span>
            </div>
            <div className="col-md-3">
                <a href={html_url} className="btn btn-dark">View repo</a>
            </div>
        </div>
    </div>
  )
}

export default ReposCard