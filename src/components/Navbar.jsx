import { Sidebar } from "react-feather";

const Navbar = () => {
return (
<>
    <header className="bg-golden item-center border-b-2 shadow-lg z-[999999] relative navfix">
        <div className="container ">
            <div className="flex justify-between mx-3  items-center py-3">
                <a href="#" className=" w-10 md:w-14  inline-block ">
                    <img src="img/gc.png" alt="goldenCube" />
                </a>
                <h1
                    className=" absolute sm:static xl:absolute ml-20 md:top-6 top-5 font-extrabold text-2xl md:text-4xl block md:hidden xl:block bg-gradient-to-t from-black/10 rounded-lg to-transparent">
                    Golden Cube</h1>
                <Sidebar size={35} id="nav" className="cursor-pointer md:hidden shadow-lg " />
                    
                <nav id="navbar"
                    className=" hidden md:block absolute right-0 top-[4.5rem] md:static bg-white/80 text-black md:bg-transparent md:text-slate-100 border-2 border-yellow-400 rounded-b-lg  md:border-transparent px-5">
                    <ul className="block md:flex gap-10">
                        <a href="/#home">
                            <li
                                className=" sm:my-6 md:my-0  text-neutral-700  text-lg xl:text-xl font-extrabold  hover:scale-110 transition-all ease-in-out">
                                Home</li>
                        </a>
                        <a href="/#product">
                            <li
                                className="sm:my-6 md:my-0  text-neutral-700   text-lg xl:text-xl font-extrabold  hover:scale-110 transition-all ease-in-out">
                                Product & Spec</li>
                        </a>
                        <a href="/#legal">
                            <li
                                className="sm:my-6 md:my-0  text-neutral-700   text-lg xl:text-xl font-extrabold  hover:scale-110 transition-all ease-in-out">
                                Legal & Certificate</li>
                        </a>
                        <a href="/#packing">
                            <li
                                className="sm:my-6 md:my-0  text-neutral-700   text-lg xl:text-xl font-extrabold  hover:scale-110 transition-all ease-in-out">
                                Packing & Container</li>
                        </a>
                        <a href="/#gallery">
                            <li
                                className="sm:my-6 md:my-0  text-neutral-700   text-lg xl:text-xl font-extrabold  hover:scale-110 transition-all ease-in-out">
                                Gallery</li>
                        </a>
                        <a href="/#about">
                            <li
                                className="sm:my-6 md:my-0  text-neutral-700   text-lg xl:text-xl font-extrabold  hover:scale-110 transition-all ease-in-out">
                                About Us</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</>
);
}
export default Navbar;