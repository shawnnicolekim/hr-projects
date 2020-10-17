import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {repos.map(repo => {
      return <RepoListEntry repo={repo} />
    })}
  </div>
)

export default RepoList;