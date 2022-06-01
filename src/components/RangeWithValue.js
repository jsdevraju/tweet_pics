import { useDispatch } from "react-redux";
import { getRange } from "../redux/imgSlice";

const RangeWithValue = ({ name, icon, min, max }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getRange({ name: e.target.name, value: e.target.value }));
  };

  return (
    <>
      <div className="range_withValue">
        <div className="name">
          <p>
            {icon} {name}
          </p>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          name={name}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default RangeWithValue;
