import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const {user, timestamp, message} = props.tweet
  return (
    <div className="tweet">
      
      <ProfileImage userImage={user}/>

      <div className="body">
        <div className="top">
          <User userInfo={user}/>
          <Timestamp timestamp={timestamp}/>
        </div>

        <Message message={message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
