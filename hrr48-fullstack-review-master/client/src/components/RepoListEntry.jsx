import React from 'react';

const RepoListEntry = ({repo}) => (
  <div>
    <h3>{repo.username}</h3>
    <ul>
      <li>Repo Name: <a href={repo.url}>{repo.reponame}</a></li>
      <li>Watchers: {repo.watchers}</li>
    </ul>
  </div>
)

export default RepoListEntry;