import React from "react";
import { useState, useEffect } from "react";
import Response from "../component/Body";

const Label = (props) => {
  const [data, setdata] = useState("");

  useEffect(() => {
    _setCred();
  }, [data]);

  const _onChangeHandler = (e) => {
    return setdata(e.target.value);
  };

  const _setCred = () => {
    if (props.label == "Email_Address" && props.setEm) {
      props.setEm(data);
    }
    if (props.label == "Password" && props.setPass) {
      props.setPass(data);
    }
  };

  return (
    <div className="form-group">
      <label for={props.label}></label>
      <input
        type={props.type}
        className="form-control"
        id={props.label}
        placeholder={props.placeholder}
        value={data}
        onChange={_onChangeHandler}
      ></input>
    </div>
  );
};

export default Label;
