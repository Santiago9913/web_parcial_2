import React from "react";

function Card({ name, address, getRooms, id }) {
  return (
    <React.Fragment>
      <div className="card mx-2 mt-2" style={{ width: "18rem" }} onClick={() => getRooms(id)}>
        <div className="card-body">
          <img
            src={
              name.includes("Apartamento")
                ? "https://www.seekpng.com/png/detail/63-632819_building-png-flat-building-icon-png.png"
                : "https://static.vecteezy.com/system/resources/previews/001/200/294/original/house-png.png"
            }
            className="card-img-top mx-5 mb-2"
            alt="..."
            style={{ width: "10rem" }}
          />
          <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
          <p className="card-text">{address}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
