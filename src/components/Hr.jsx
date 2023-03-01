const Hr = () => {
    return ( 
        <div class="inline-flex items-center justify-center w-full mt-20">
        <hr class=" w-52 md:w-96 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
        <div class="absolute px-4 -translate-x-1/2 left-1/2 dark:bg-gray-900">
          <img src="img/gc.png" alt="" className="w-14 h-14 text-gray-700 bg-black" />
        </div>
        </div>
     );
}
 
export default Hr;