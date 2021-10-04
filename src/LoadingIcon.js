import React from "react";
import RingLoader from "react-spinners/RingLoader";

export default function LoadingIcon(props) {
  return (
    <RingLoader
      loading={true}
      color={props.color}
      speedMultiplier={2}
      margin={50}
      size={60}
    />
  );
}
