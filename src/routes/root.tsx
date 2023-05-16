import { Link } from "react-router-dom";

function Root() {
  return (
    <main>
      <Link to="/test">test</Link>
      <div
        style={{
          textAlign: "center",
          color: "green",
          fontSize: "4rem",
        }}
      >
        UPDATED
      </div>
    </main>
  );
}

export default Root;
