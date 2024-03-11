import { Link } from "react-router-dom"

export const Navegacion = () => {
  return (
    <div className="w-full bg-slate-900 flex flex-row justify-evenly text-white uppercase list-none font-semibold pt-4 pb-6 text-2xl">
        <li className="hover:text-yellow-400"><Link to="/reunion">reunion</Link></li>
        <li className="hover:text-yellow-400"><Link>operaciones</Link></li>
        <li className="hover:text-yellow-400"><Link>monitoreo</Link></li>
        <li className="hover:text-yellow-400"><Link>medios</Link></li>
        <li className="hover:text-yellow-400"><Link>analisis</Link></li>

    </div>
  )
}
