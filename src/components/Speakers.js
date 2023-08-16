import React, { useState } from "react";
import SpeakersList from "./SpeakersList";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";
import SpeakersToolbar from "../components/SpeakersToolBar";

function Speakers() {
  return (
    <SpeakerFilterProvider startingShowSessions={false}>
      <SpeakersToolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}

export default Speakers;
