import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";


const App = () => {
  const [img, setImg] = useState("");

  const [{ res }, fetchRequest] = useFetch(
    `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=Pt113kk2jxJ9iyCENUrz29xF0HXB1uhzsl_BW-LuLR8&per_page=24`
  );

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  const Submit = () => {
    fetchRequest();
    setImg("");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center input">
            <input
              className="col-lg-3 col-md-5 col-sm-6 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
              type="text"
              placeholder="Search Anything..."
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <button
              type="submit"
              onClick={Submit}
              className="btn bg-dark text-white fs-5 mx-3"
            >
              Search
            </button>
          </div>
          <div className="col-12 d-flex justify-content-evenly flex-wrap result">
            {res.map((val) => {
              return (
                <>
                  <img
                    key={val.id}
                    className="col-3 img-fluid img-thumbnail"
                    src={val.urls.small}
                    alt="val.alt_description"
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
