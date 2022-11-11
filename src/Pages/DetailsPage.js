import Navbar from "../components/Navbar"
import CardInfo from "../components/CardInfo"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ReposCard from "../components/ReposCard";

function DetailsPage() {
  const [usersAcct, setUsersAcct] = useState([])
  const [usersRepo, setUsersRepo] = useState([])
  
  const { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => setUsersAcct(data))
    .catch(err => console.error(err))

    fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(data => {
      setUsersRepo(data)
      console.log(data.length)
    })
    .catch(err => console.error(err))
  }, [username])

  // console.log(usersRepo)
  return (
    <div>
      <Navbar />
      <CardInfo 
        key={username}
        img={usersAcct.avatar_url}
        login={usersAcct.login}
        html_url={usersAcct.html_url}
        followers={usersAcct.followers}
        following={usersAcct.following}
        bio={usersAcct.bio}
        blog={usersAcct.blog}
        company={usersAcct.company}
        email={usersAcct.email}
        hireable={usersAcct.hireable}
        twitter={usersAcct.twitter_username}
        gists={usersAcct.public_gists}
        repos={usersAcct.public_repos}
        location={usersAcct.location}
      />
      <div className="container">
        {usersRepo.map((repo) => (
          <ReposCard
            key={repo.node_id}
            id={repo.id}
            name={repo.name}
            license={repo.license}
            language={repo.language}
            html_url={repo.html_url}
            forks_count={repo.forks_count}
            description={repo.description}
          />
        ))}
      </div>
    </div>
  )
}

export default DetailsPage