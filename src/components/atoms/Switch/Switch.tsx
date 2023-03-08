import React from "react";
import { useSwitchStyles } from "@/static/stylesheets/atoms";

interface SwitchProps {}

const Switch: React.FC<SwitchProps> = (props) => {
  const classes = useSwitchStyles();

  return (
    <>
      <span className={classes.root}>
        <label className={"switch"}>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </span>
    </>
  );
};

export { Switch };
