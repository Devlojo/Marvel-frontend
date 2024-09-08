import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Characters.css";
import Loading from "../components/Loading";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

const Characters = ({ search, handleSearch, favorites, handleFavorites }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--bf7zj7wtgltq.code.run/characters`
      );

      setData(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {" "}
      <main>
        <div className="container">
          <div className="search-container">
            <input
              type="search"
              placeholder="ex : Hulk"
              onChange={handleSearch}
              value={search}
            />
          </div>
          <div className="characters-container">
            {data
              .filter((character) => {
                return character.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((character) => {
                return (
                  <Link to={`/character/${character._id}`} key={character._id}>
                    <article className="characters-items">
                      <IoMdHeartEmpty
                        className={
                          favorites.includes(character._id)
                            ? "red"
                            : "heart-icon"
                        }
                        onClick={(event) => {
                          handleFavorites(event, character._id);
                        }}
                      />

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
          <nav className="pagination-container">
            <ul className="pagination">
              <a href="">
                <li>
                  <FaLongArrowAltLeft />
                </li>
              </a>
              <a href="">
                <li className="active">1</li>
              </a>
              <a href="">
                <li>2</li>
              </a>
              <a href="">
                <li>3</li>
              </a>
              <a href="">
                <li>4</li>
              </a>
              <a href="">
                <li>5</li>
              </a>
              <a href="">
                <li>
                  <FaLongArrowAltRight />
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Characters;
