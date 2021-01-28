import React from "react";
import { connect } from "react-redux";

const Alert = ({ alerts }) => (
  <div className="alert">
    {alerts.length > 0 &&
      alerts.map((alert) => {
        return <div key={alert.id}>{alert.message}</div>;
      })}
  </div>
);

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, null)(Alert);
