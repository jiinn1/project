import React from "react";

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 papaapa w świecie podróży kosmicznych</h1>

      <p style={styles.text}>
        Kosmos to nieskończona przestrzeń pełna tajemnic, planet, gwiazd
        i galaktyk. Od pierwszego lotu człowieka w przestrzeń kosmiczną
        po współczesne misje na Marsa — ludzkość nieustannie przesuwa
        granice poznania.
      </p>

      <p style={styles.text}>
        Ta aplikacja zabierze Cię w podróż poza Ziemię 🌍 — odkryj rakiety,
        stacje kosmiczne i przyszłość eksploracji wszechświata.
      </p>

      <button style={styles.button}>Rozpocznij podróż</button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  text: {
    maxWidth: "600px",
    fontSize: "1.1rem",
    lineHeight: 1.6,
    marginBottom: "1rem",
  },
  button: {
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ff9800",
    color: "#000",
    fontWeight: 600,
  },
};

export default App;