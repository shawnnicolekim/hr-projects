import React from 'react';
import CowListEntry from './CowListEntry.jsx';

function CowList({cows, getSpotlight}) {
  return (
    <table>
      <tbody>
      <tr>
        <th>Pick a cow! Any cow!</th>
      </tr>
      {cows.map(cow => {
        return <CowListEntry cow={cow} getSpotlight={getSpotlight}/>
      })}
      </tbody>
    </table>
  )
}

export default CowList