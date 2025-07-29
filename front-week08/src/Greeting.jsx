import React, { useEffect } from "react";
import { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    const assessToken = localStorage.getItem("access_token");
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${assessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      userData.then((data) => {
        setName(data.properties.nickname);
        setProfileImg(data.properties.profile_image);
      });
    });
  }, []);
  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
