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
      <h1>Loading ...</h1>
    </>
  ) : (
    <main>
      <div className="container">
        <div className="comics-container">
          {data.map((comic) => {
            console.log(comic);
            return (
              <div className="comics-items" key={comic._id}>
                <h2>{comic.title}</h2>
                <img
                  src={
                    comic.thumbnail.path +
                    "/portrait_uncanny." +
                    comic.thumbnail.extension
                  }
                  alt={`photo de ${comic.title}`}
                />

                <p className="hide-description">{comic.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Comics;
