import "./LeftSidebar.css";
import assets from "../../assets/assets";

export default function LeftSideBar() {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <h2>Chats</h2>
          <div className="menu">
            <i className="fas fa-ellipsis-v three-dot-icon"></i>
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="ls-search">
          <i className="fas fa-search search-icon"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="ls-list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div key={index} className="friends">
              <img src={assets.profile_img} alt="" />
              <div>
                <p>Richard Sanford</p>
                <span>Hello, how are you?</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
