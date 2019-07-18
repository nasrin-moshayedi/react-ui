import React from "react";

function MainImage() {
  return (
    <div className="imageMain">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/e05838ebeb54f3e8fc19088a9c73f84e.svg"
        className="imageLeft"
      />
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/1711cb7beddbd850819d973ecef309f5.svg"
        className="imageRight"
      />
      <div className="searchBox">
        <h1 className="imageText">Restaurants you love, delivered to you</h1>

        <form class="ui form">
          <div class="inline fields">
            <div class="tens ">
              <svg
                width="24px"
                height="24px"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12.0001 2.83398c2 0 4.0833.75 5.5833 2.33334 3.0833 3.08333 3.0833 8.16668 0 11.16668l-5.5833 5.6667-5.58335-5.5834c-3.08334-3.0833-3.08334-8.16665 0-11.24998 1.5-1.58334 3.58335-2.33334 5.58335-2.33334zm0 15.66672 3.8333-3.8334c2.0833-2.1666 2.0833-5.58332 0-7.74998-1-1-2.4167-1.58334-3.8333-1.58334-1.4167 0-2.83335.58334-3.83335 1.58334-2.08334 2.16666-2.08334 5.58338 0 7.74998zm1.6666-7.75c0 .9204-.7462 1.6666-1.6666 1.6666-.9205 0-1.6667-.7462-1.6667-1.6666 0-.92052.7462-1.66672 1.6667-1.66672.9204 0 1.6666.7462 1.6666 1.66672z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#1F1F1F"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter delivery address"
                className="inputStyle"
              />
            </div>

            <button class="ui button btnFood" type="submit">
              find food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainImage;
