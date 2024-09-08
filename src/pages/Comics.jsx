import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Comics.css";
import Loading from "../components/Loading";
import { FaSearch } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Comics = ({ search, handleSearch }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--marvel-backend--bf7zj7wtgltq.code.run/comics"
      );
      //console.log(response.data.results);
      setData(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
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
        <div className="comics-container">
          {data
            .filter((comic) => {
              return comic.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((comic) => {
              return (
                <Link to={`/comic/${comic._id}`} key={comic._id}>
                  <div className="comics-items">
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
  );
};

export default Comics;
