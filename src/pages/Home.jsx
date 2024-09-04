import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
    <p>Loading ....</p>
  ) : (
    <>
      {" "}
      <main>
        <div className="container">
          <div className="characters-container">
            {data.map((character) => {
              console.log(character);

              return (
                <div className="characters-items">
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
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
