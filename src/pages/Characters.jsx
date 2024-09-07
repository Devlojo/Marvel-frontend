import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Characters.css";
import Loading from "../components/Loading";

const Characters = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--bf7zj7wtgltq.code.run/characters?name=${search}`
      );
      //console.log(response.data.results);
      /*const characters = response.data.results;
      const found = characters.find((element) => element.name === search);
      console.log(found);*/
      setData(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {" "}
      <main>
        <div className="container">
          <div className="characters-container">
            {data.map((character) => {
              //console.log(character);

              return (
                <Link to={`/character/${character._id}`} key={character._id}>
                  <article className="characters-items">
                    <img
                      src={
                        character.thumbnail.path +
                        "/portrait_medium." +
                        character.thumbnail.extension
                      }
                      alt={`photo de ${character.name}`}
                    />
                    <div className="character-description">
                      <h2>{character.name}</h2>

                      <p>{character.description}</p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Characters;
