import React, { useState } from "react";

function YesOnlyCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.checkboxWrapper}>
        <label style={styles.label}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            style={styles.checkbox}
          />
          Yes 💖
        </label>

        <label style={{ ...styles.label, color: "gray" }}>
          <input type="checkbox" disabled style={styles.checkbox} />
          No ❌
        </label>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "top",
    height: "20vh", // Centers in the full viewport height
    backgroundColor: "transparent", // Light pink background
  },
  checkboxWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
  label: {
    fontSize: "24px", // Bigger text
    fontWeight: "bold",
    cursor: "pointer",
  },
  checkbox: {
    width: "30px", // Bigger checkbox size
    height: "30px",
    marginRight: "10px",
  },
};

export default YesOnlyCheckbox;
