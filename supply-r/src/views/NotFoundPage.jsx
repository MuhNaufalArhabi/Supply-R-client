import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        <h1
          style={{ textAlign: "center", marginTop: "25px", color: "#204e64" }}
        >
          Sorry, The Page You're Looking For is Missing
        </h1>
        <img
          src="https://gifimage.net/wp-content/uploads/2017/09/404-gif-1.gif"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </>
  );
}
