function ColorBox({ color }) {
  return (
    <div 
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: color,
        border: '5px solid green',
        marginTop: '20px'
      }}
    ></div>
  )
}

export default ColorBox
