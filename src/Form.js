import React from "react";

export default function Form() {
  return (
    <div className="form">
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="cityResearch"
            placeholder="Enter your city"
          />
          &nbsp; &nbsp;
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
