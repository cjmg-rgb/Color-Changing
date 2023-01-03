const ColorName = ({ setText }) => {
  return (  
    <input className="name-input" 
      type="text" 
      placeholder="Add color name"
      onChange={e => setText(e.target.value)}
    />
  );
}
 
export default ColorName;