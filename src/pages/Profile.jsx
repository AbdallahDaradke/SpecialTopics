import React from "react";
import { useParams } from "react-router-dom";
function Profile() {
  const { username } = useParams();
  return <div>Hello {username} welocme to your Profile</div>;
}

export default Profile;
