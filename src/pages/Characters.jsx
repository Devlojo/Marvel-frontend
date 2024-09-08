import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Characters.css";
import Loading from "../components/Loading";
import { FaSearch } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useRef } from "react";

const Characters = ({ search, handleSearch }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const ref = useRef();

  console.log(ref.current);

  const [isActive, setIsActive] = useState(false);

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

  const handleIsActive = (event) => {
    event.preventDefault();

    setIsActive(!isActive);
  };

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

            <FaSearch
              className="search-icon"
              onClick={() => {
                console.log("cliqué");
              }}
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
                        className={isActive ? "red" : "heart-icon"}
                        onClick={handleIsActive}
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
