import React, { useEffect, useState } from 'react';
import { BlockPicker   } from 'react-color';
import RangeWithValue from './RangeWithValue';
import { FcFrame } from 'react-icons/fc';
import { TbRadiusTopLeft } from 'react-icons/tb';
import { GoDeviceCamera } from 'react-icons/go';
import { GiShadowFollower } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { getColor } from '../redux/imgSlice'

const Footer = ({disabled}) => {
  const dispatch = useDispatch();
    const [color, setColor] = useState({
        background:"#fff"
    });
    
    useEffect(() =>{
      dispatch(getColor(color.hex))
    }, [color, dispatch])
    

  return (
    <>
     <footer className={disabled ? "disabled" : null}>
        <div className="container">
        <BlockPicker color={color} onChangeComplete={setColor} />
        <RangeWithValue min={0} max={1400} name={'frame'}  icon={<FcFrame />} />
        <RangeWithValue min={0} max={100} name={'radius'}  icon={<TbRadiusTopLeft />} />
        <RangeWithValue min={0} max={100} name={'padding'}  icon={<GoDeviceCamera />} />
        <RangeWithValue min={0} max={100} name={'shadow'}  icon={<GiShadowFollower />} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
