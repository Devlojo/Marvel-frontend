import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/");
      //console.log(response.data.results);

      setData(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <h1>Loading ....</h1>
  ) : (
    <>
      {" "}
      <main>
        <div className="container">
          <div className="characters-container">
            {data.map((character) => {
              //console.log(character);

              return (
                <article
                  className="characters-items"
                  onClick={() => {
                    navigate(`/character/${character._id}`);
                  }}
                  key={character._id}
                >
                  <h2>{character.name}</h2>
                  <img
                    src={
                      character.thumbnail.path +
                      "/portrait_incredible." +
                      character.thumbnail.extension
                    }
                    alt={`photo de ${character.name}`}
                  />
                  {character.description && (
                    <p className="hide-description">{character.description}</p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
