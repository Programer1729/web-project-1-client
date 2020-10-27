import React from "react";

function SocialMedia() {
  return (
    <div>
      <img
        src={require("../images/instagram.PNG")}
        className="img-fluid"
        alt="Responsive"
      />

      <div className="mt-2 d-flex justify-content-center">
        <button type="button" className="btn btn-primary">
          Siguenos
        </button>
      </div>
    </div>
  );
}

export default SocialMedia;
