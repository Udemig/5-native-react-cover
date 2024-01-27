import React from "react";

const Button = ({ title, stil, Count }) => {
  // console.log(Count);
  //   console.log(props);
  // const { title, stil } = props;
  //   console.log(title, stil);
  //   console.log(props.title);
  //   console.log(props.class);
  /*
   * Props(Properties):React componentlerine dışardan veri iletmek için
   * kullanırız.
   */
  return (
    <button
      className={`btn border text-white px-3 py-1 m-1 ${stil}`}
      onClick={Count}
    >
      {title}
    </button>
  );
};

export default Button;
