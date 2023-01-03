const Box = ({ text }) => {
  return (
    <div className="box" 
      style={
        {backgroundColor: text}
        }>
      {text.length ? (<h1>{text}</h1>) : (<h1>Empty Value</h1>)}
    </div>
  );
}

Box.defaultProps = {
  text: 'Empty value'
}
 
export default Box;