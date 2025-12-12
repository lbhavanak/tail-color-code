function ColorBox({ color }) {
  return (
    <div
      style={{
        margin: "30px auto",
        width: "90px",
        height: "90px",
        backgroundColor: color,
        borderRadius: "780px",
        border: "10px solid #46d41fff",
      }}
    ></div>
  );
}

export default ColorBox;