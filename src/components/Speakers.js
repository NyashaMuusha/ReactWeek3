import React, { useState } from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolBar from "./SpeakersToolBar";

const Speakers = ({ theme, setTheme }) => {
  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolBar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
};

export default Speakers;
