import React from "react";
var data = require("./../../../menu.json");

function Footer() {
  return (
    <div
      style={{
        marginTop: 80,
        background: "#1f1f1f",
        padding: "72px 80px 88px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ marginBottom: "85px" }}>
            <a>
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg"
                height="24px"
              />
            </a>
          </div>
          <div>
            <a>
              <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg" />
            </a>
            <a>
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png"
                height="40px"
              />
            </a>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              About Uber Eats
            </a>
          </div>
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              Read our blog
            </a>
          </div>
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              Buy gift cards
            </a>
          </div>
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              Sign up to deliver
            </a>
          </div>
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              Add your restaurant
            </a>
          </div>
        </div>
        <div className="links">
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              Get Help
            </a>
          </div>
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              Read FAQs
            </a>
          </div>
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              View All Cities
            </a>
          </div>
          <div style={{ marginBottom: 16 }}>
            <a href="#" className="hrefstyle">
              English
            </a>
          </div>
        </div>
      </div>

      <hr style={{ background: "#fff", border: "none", height: 1 }} />

      <div
        className="gridCity"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <div>
          <p className="hrefstyle smallFont">© 2019 Uber Technologies Inc.</p>
        </div>
        <div>
          <div
            style={{
              marginLeft: "-10px",
              textAlign: "center",
              display: "flex",
              justifyContent: "start"
            }}
          >
            <a href="#" className="hrefstyle" style={{ marginRight: 48 }}>
              Privacy Policy
            </a>
            <a href="#" className="hrefstyle" style={{ marginRight: 48 }}>
              Terms of Use
            </a>
            <a href="#" className="hrefstyle" style={{ marginRight: 48 }}>
              Pricing
            </a>
          </div>
          <div style={{ marginTop: 40 }}>
            <a href="#" style={{ margin: "10px 8px 10px -12px" }}>
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ccfc8856107f17665b7c82df307d35ee.svg"
                width="16px"
                height="16px"
                style={{ margin: 20, marginLeft: 0 }}
              />
              >
            </a>
            <a href="#" style={{ margin: "10px 8px 10px -12px" }}>
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/db07894edae0a7dde4b9f7477489eb3f.svg"
                width="16px"
                height="16px"
                style={{ margin: 20, marginLeft: 0 }}
              />
              >
            </a>
            <a href="#" style={{ margin: "10px 8px 10px -12px" }}>
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8c75d9d92274d2f1df48a02f35a7b1f0.svg"
                width="16px"
                height="16px"
                style={{ margin: 20, marginLeft: 0 }}
              />
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Footer;
