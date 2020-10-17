import React from 'react';

function CowListEntry({cow, getSpotlight}) {
  return (
    <tr>
      <td data-value={cow.name}
      onClick={(event) => getSpotlight(event)}
      onMouseEnter={(event) => {event.target.style.background="pink"}}
      onMouseLeave={(event) => {event.target.style.background="lightgrey"}}
      >{cow.name}
      </td>
    </tr>
  )
}

export default CowListEntry