import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Comics.css";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/comics");
      //console.log(response.data.results);
      setData(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <>
      <main>
        <h1>Loading ...</h1>
      </main>
    </>
  ) : (
    <main>
      <div className="container">
        <div className="comics-container">
          {data.map((comic) => {
            return (
              <Link to={`/comic/${comic._id}`}>
                <div className="comics-items" key={comic._id}>
                  <img
                    src={
                      comic.thumbnail.path +
                      "/portrait_incredible." +
                      comic.thumbnail.extension
                    }
                    alt={`photo de ${comic.title}`}
                  />
                  <div className="comic-description-container">
                    <h2>{comic.title}</h2>
                    <p>{comic.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Comics;
