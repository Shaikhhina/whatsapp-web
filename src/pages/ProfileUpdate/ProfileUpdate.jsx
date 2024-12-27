import { useState } from "react";
import assets from "../../assets/assets";
import "./ProfileUpdate.css";

function ProfileUpdate() {
  const [image, setImage] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
              onChange={handleImageChange}
            />
            <img src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
            upload profile image
          </label>
          <input type="text" placeholder="Your Name" required />
          <textarea placeholder="Write profile bio"></textarea>
          <button type="submit">Save</button>
        </form>
        <img className="profile-pic" src={image ? URL.createObjectURL(image) : assets.whatsapp_logo} alt="" />
      </div>
    </div>
  );
}

export default ProfileUpdate;
