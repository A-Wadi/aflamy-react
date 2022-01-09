import React from "react";

const Dashboard = ({ classes }) => {
  return (
    <div>
      <h3>User Page</h3>
      <div>
        <label>My name</label>
        <input value="Vlad" readOnly />
      </div>
      <div>
        <label>My Email</label>
        <input value="some@mail.com" readOnly />
      </div>
    </div>
  );
};
export default Dashboard;
