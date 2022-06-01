import { useDispatch, useSelector } from "react-redux";
import { generateBtn, getImg } from "../redux/imgSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { img } = useSelector((state) => state.img);

  const resetButton = () => {
    dispatch(getImg(null));
  };



  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left_sideNav">
            <img
              src="https://typefully.com/tweetpics/icon.png"
              alt="Razu Islam"
              className="logo"
            />
            <h1>
              <p>by</p>Typefully
            </h1>
            <a
              href="https://www.producthunt.com/posts/tweetpics"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=347376&theme=dark&refresh=181"
                alt="Razu Islam"
              />
            </a>
          </div>
          <div className={!img ? "disabled" : "right_sideNav"}>
            <button className="app_btn btn_fill" onClick={resetButton}>
              Restart
            </button>
            <button
              className="app_btn btn_main"
              onClick={() => dispatch(generateBtn(true))}
            >
              Generate
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
