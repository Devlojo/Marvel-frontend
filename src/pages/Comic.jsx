import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import "./css/Comic.css";
const Comic = () => {
  const { comicId } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--bf7zj7wtgltq.code.run/comic/${comicId}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <div className="comic-container">
        <img
          src={
            data.thumbnail.path +
            "/portrait_uncanny." +
            data.thumbnail.extension
          }
          alt={`photo de ${data.title}`}
        />
        <div className="comic-description-container">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </main>
  );
};

export default Comic;
