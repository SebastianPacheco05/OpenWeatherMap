import React from "react";

const WeatherInfo = (props) => {
  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}

      <div className="card card-body">
        <p>
          Location: {props.city} {props.country}
        </p>
        <p>
          temperature: {props.temperature} {props.description}
        </p>
        <p>humidity: {props.humidity}</p>
      </div>
      
    </div>
  );
};

export default WeatherInfo;
