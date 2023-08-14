import React, {useState} from 'react';
import SpeakersList from './SpeakersList';
import SpeakersToolBar from './SpeakersToolBar';

const Speakers = ({data,theme,setTheme}) => {
  return ( 
<>
  <SpeakersToolBar them={theme} setTheme={setTheme}/>
  <SpeakersList data={data}/>
</>
   );
}
 
export default Speakers;