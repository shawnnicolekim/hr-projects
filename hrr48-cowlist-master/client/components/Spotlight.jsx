import React from 'react';

function Spotlight({spotlight}) {
  if (!spotlight) {
    return <h1 id="noSpotlight">{'Click on a cow to put it in the spotlight!'}</h1>
  } else {
    return (
      <div id="spotlightCow">
        <h1 className="spotlight">You've chosen {spotlight.name}!</h1>
        <h3 className="spotlight">{spotlight.description}</h3>
        <p className="spotlight">Feel free to pick another cow to see their description.</p>
      </div>
    )
  }
}

export default Spotlight