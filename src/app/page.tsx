import Image from "next/image";
import AuthForm from "./components/AuthForm";


export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen" >
      <div className="col-span-7 flex justify-center items-center w-full  py-12 px-12" >
        <Image
          src={"/images/home.jpg"}
          alt="landing"
          width={600}
          height={300}
        />
      </div>
      <div className="col-span-5 flex justify-center items-center w-full " >
        <AuthForm />
      </div>
    </div>  
  );
}
