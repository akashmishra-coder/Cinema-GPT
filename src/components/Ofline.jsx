import { Ofline_logo } from "../utils/consent";


const Ofline = () => {

    return(
        <div className=" flex flex-col h-screen font-serif gap-2 items-center justify-center bg-black text-white ">
            <img className=" w-50" src={Ofline_logo} alt="logo" />
            <h2 className=" text-2xl">You are Ofline</h2>
            <p className=" text-lg">Please check Your Internet</p>
            <button className=" border-2 rounded-2xl cursor-pointer p-4 py-2 border-blue-600 text-2xl">Retry</button>
        </div>
    )
}

export default Ofline;