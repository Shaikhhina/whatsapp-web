import assets from "../../assets/assets";
import "./RightSidebar.css";

function RightSideBar() {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Richard Sanford <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>Hey, There I am using whatsapp</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <i className="fas fa-trash-alt delete-icon">
        <p>Delete Chat</p>
      </i>
     
    </div>
  );
}

export default RightSideBar;
