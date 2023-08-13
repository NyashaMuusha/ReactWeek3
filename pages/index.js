import { data } from "../speakerData";
import Speaker from '../src/components/Speaker';
const IndexPage = () => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => {
          const {
            id,
            bio,
            first,
            last,
            favorite,
            twitterHandle,
            company,
            sessions,
          } = speaker;
          return <Speaker key={speaker.id} speaker={speaker} />;
        })}
      </div>
    </div>
  );
};
export default IndexPage;
