interface IBoxSx {
  value?: number[];
  onClick?: any;
}

const myStyle = {
  color: "black",
  backgroundColor: "yellow",
  width: 240,
  height: 240,
  fontFamily: "Sans-Serif",
  fontSize: 190,
};

const Square = (params: IBoxSx): JSX.Element => {
  return (
    <button style={myStyle} onClick={params.onClick}>
      {params.value}
    </button>
  );
};
export default Square;
