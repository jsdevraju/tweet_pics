import { useRef } from "react";
import { IoMdImages } from "react-icons/io";
import {
  AiOutlineClose,
  AiOutlineCheckCircle,
  AiOutlineCopy,
  AiOutlineDownload,
  AiOutlineExpandAlt,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { generateBtn, getImg } from "../redux/imgSlice";
import toast from "react-hot-toast";
import { exportComponentAsPNG } from "react-component-export-image";

const FileUpload = () => {
  const { img } = useSelector((state) => state.img);
  const dispatch = useDispatch();
  const valueRange = useSelector((state) => state?.img?.range);
  const color = useSelector((state) => state?.img?.color);
  const modShow = useSelector((state) => state?.img?.generate);
  const imgRef = useRef();

  const fileUpload = (e) => {
    const file = e.target.files[0];
    dispatch(getImg(URL.createObjectURL(file)));
  };
  

  const closeModel = () =>{
    dispatch(generateBtn(false));
  }


  return (
    <>
      {/* Model Start */}
      <div className={`model ${!modShow ? null : "show"}`}>
        <button className="close" onClick={closeModel}>
          <AiOutlineClose fontSize={30} />
        </button>
        <button className="check">
          <AiOutlineCheckCircle fontSize={40} />
        </button>
        <div className="btn_group">
          <button
            className="app_btn btn_main"
            onClick={() =>
              toast.success("Image copied", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              })
            }
          >
            <AiOutlineCopy /> Copy Image
          </button>
          <button className="app_btn btn_main" onClick={() => exportComponentAsPNG(imgRef)}>
            <AiOutlineDownload /> Download
          </button>
        </div>
        <div className="final_btn">
          <button className="app_btn btn_fill">
            <AiOutlineExpandAlt /> Open Typefully
          </button>
        </div>
      </div>
      {/* Model End */}
      <section className="file_uploader">
        <div className="container">
          <div className="main">
            {!img ? (
              <div className="img_wrapper">
                <label htmlFor="file" className="fileUpload_wrapper">
                  <div className="middle_div">
                    <div className="middle_div2">
                      <IoMdImages fontSize={30} />
                      <h4>Drag or paste an image here</h4>
                    </div>
                  </div>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    style={{ width: 0, height: 0 }}
                    accept="image/*"
                    onChange={fileUpload}
                  />
                </label>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                ref={imgRef}
                  className="wrapWithImg"
                  style={{
                    background: `${!color ? "#F7BF2F" : `${color}`}`,
                    width: `${
                      !valueRange?.frame ? "450px" : `${valueRange?.frame}px`
                    }`,
                  }}
                >
                  <div
                    className="img"
                    style={{
                      padding: `${
                        !valueRange?.padding
                          ? "0px"
                          : `${valueRange?.padding}px`
                      }`,
                      borderRadius: `${valueRange?.radius}px`,
                      boxShadow: `${
                        !valueRange?.shadow
                          ? `rgb(33 4 78 / 45%) 0px 22.2px 88.8px,
                      rgb(33 4 78 / 45%) 0px 49.95px 177.6px, rgb(33 4 78 / 45%) 0px 61.05px 666px`
                          : `rgb(33 4 78 / ${valueRange?.shadow}%) 0px 22.2px 88.8px,
                      rgb(33 4 78 / ${valueRange?.shadow}%) 0px 49.95px 177.6px, rgb(33 4 78 / ${valueRange?.shadow}%) 0px 61.05px 666px`
                      }`,
                    }}
                  >
                    <img src={img} alt="Razu Islam" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FileUpload;
