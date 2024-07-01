import {Tilt} from "react-tilt";
const Button = (props) => {
  return (

    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-4 rounded-2xl sm:w-[180px] '
      >
        <div>
      <button className="button_glow mt-4 relative overflow-hidden py-2 px-8 font-bold text-white text-lg rounded-md bg-gradient-to-r from-[#ed8a8a] to-[#eb4a4a]">
        {props.title}
      </button>
    </div>  
      </Tilt>
  );
};

export default Button;