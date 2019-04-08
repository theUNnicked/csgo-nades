import React, { Component } from 'react';
import Layout from "../components/layout"

class HowTo extends Component {
  render() {
    return(
      <Layout>
        <div>
          <h2>Configuring the training map</h2>
          <ol>
            <li>
              Download the config file: <a href="/files/serversetup.cfg">serversetup.cfg</a>
            </li>
            <li>
              Put the file into the directory: steam/userdata/&#60;YOUR_STEAM_USER_FOLDER&#62;/730/local/cfg<br />
            </li>
            <li>
              Lauch CS:GO
            </li>
            <li>
              From the menu open the developer console and enter: map &#60;MAP_NAME&#62;
              For Mirage enter: de_mirage
              For Inferno enter: de_inferno
            </li>
            <li>
              After the map has loaded enter in the console: exec serversetup
            </li>
            <li>
              After the reload enter in the console: guns
            </li>
          </ol>
          <ul>
            <li>By pressing 'n' you can toggle noclip option which allows you to move faster in ordedr to check if the throw was performed correctly</li>
            <li>Infinite ammo and grenades</li>
            <li>Highlighted impact points and throw trajectories</li>
            <li>The majority of grenade throws is performed by doing a standing throw (clicking the left mouse button). If you should make a different throw, it will be stated by the screenshots.</li>
          </ul>
          <h2>Enabling the developer console</h2>
          <ol>
            <li>Launch CS:GO</li>
            <li>Open settings (cog icon on the left side of the screen)</li>
            <li>Enter 'Game settings' tab</li>
            <li>Set 'Enable developer console' to 'YES'</li>
          </ol>
          The developer console can be launched by pressing '~' (tilde)
          <h2>Jump throws</h2>
          <h3>Standing jump throw</h3>
          <ol>
            <li>Line up the throw</li>
            <li>Pull the pin (hold left mouse button)</li>
            <li>Jump and let the grenade go at the same time (press jump and release mouse button)</li>
          </ol>
          <h3>Crouch jump throw</h3>
          <ol>
            <li>Crouch</li>
            <li>Line up the throw (while crouching)</li>
            <li>Pull the pin (hold left mouse button)</li>
            <li>Jump (from crouch) and let the grenade go at the same time (press jump and release mouse button)</li>
          </ol>
        </div>
      </Layout>
    );
  }
}

export default HowTo;
