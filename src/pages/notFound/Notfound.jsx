import './NotFound.css'

const NotFound = () => {
    return ( 

    <div class="bg-gray-100 h-screen justify-center">
    <center class="pt-36 m-auto">
        <img src="public\img\gc.png" alt=""  className="animate-pulse w-[100px] md:w-[400px]" />
    <div class=" tracking-widest mt-4">
    <span class="text-gray-500 text-6xl block"><span>4  0  4</span></span>
    <span class="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>

    </div>
    </center>
    <center class="mt-6">
    <a href="/" class="text-gray-500 font-mono text-xl bg-gray-200 hover:bg-golden hover:text-white ease-in-out transition-all p-3 rounded-md hover:shadow-md">Go back </a>
    </center>
    </div>
);
}
export default NotFound;