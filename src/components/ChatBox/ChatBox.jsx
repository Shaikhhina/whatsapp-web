import assets from "../../assets/assets";
import "./ChatBox.css";

function ChatBox() {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Richard Sanford
          <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">
            bdbjdwdwfjwefhjwhjkw
            <span className="time">2:30 PM</span>
          </p>
          <div>
            <img src={assets.profile_img} alt="Profile" />
          </div>
        </div>

        <div className="s-msg">
        <img src={assets.pic1} alt="Sent Image"  className="msg-img" />
        <span className="time-1">2:30 PM</span>         
          <div>
            <img src={assets.profile_img} alt="Profile" />
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            bdbjdwdwfjwefhjwhjkw
            <span className="time">2:30 PM</span>
          </p>
          <div>
            <img src={assets.profile_img} alt="Profile" />
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <i className="fas fa-paper-plane send-icon" ></i> {/* FontAwesome send icon */}

      </div>
    </div>
  );
}

export default ChatBox;
