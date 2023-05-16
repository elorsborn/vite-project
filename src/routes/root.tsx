import { Link } from "react-router-dom";
import ReloadPrompt from "../ReloadPrompt";

function Root() {
  return (
    <main>
      <Link to="/test">test</Link>
      <ReloadPrompt />
      <div
        style={{
          textAlign: "center",
          color: "orange",
          fontSize: "4rem",
        }}
      >
        UPDATED
      </div>
    </main>
  );
}

export default Root;
