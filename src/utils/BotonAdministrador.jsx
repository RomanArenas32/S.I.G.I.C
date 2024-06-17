
import { useNavigate } from 'react-router-dom';

export const BotonAdministrador = () => {

    const navigate = useNavigate();
    const irAlAdministrador = ()=>{
        navigate('/admin')
    }

    return (
        <svg
        className="hover:cursor-pointer shadow-2xl"
        onClick={irAlAdministrador}
        id="Layer_1"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="37"
      >
        <g clipRule="evenodd" fillRule="evenodd">
          <ellipse
            cx="256"
            cy="256"
            fill="#FFFFFF"
            rx="240"
            ry="240"
            transform="matrix(.707 -.707 .707 .707 -106.039 256)"
          />
          <path
            d="M336 256c0 44.183-35.817 80-80 80s-80-35.817-80-80v-60c0-44.183 35.817-80 80-80s80 35.817 80 80v60z"
            fill="#fff"
          />
          <path
            d="M376 256v-60c0-66.273-53.727-120-120-120S136 129.727 136 196v60h-40v200h280V256h-40zm-40 0h-200v-60c0-55.228 44.772-100 100-100s100 44.772 100 100v60z"
            fill="#FFC107"
          />
        </g>
      </svg>
      );
    };
