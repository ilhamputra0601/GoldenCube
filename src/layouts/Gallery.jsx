const Gallery = () => {
    return (   
        <section id="gallery" className="pt-16 md:pt-20">
            <div className="container">
                <div className="border border-transparent bg-golden bg-clip-border">
                    <div className="border m-2 border-transparent bg-black/80 fill-none bg-clip-border ">
                    <div className="p-10 ">
                        <h1 className="text-center font-bold bg-golden  bg-clip-text text-transparent text-3xl">Gallery</h1>
                        <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto px-6 justify-evenly">
                            <div class="h-15 bg-golden aspect-[4/3] rounded-lg overflow-hidden relative group  hover:scale-95 transition-all duration-500"><img src="https://source.unsplash.com/700x400?briquette" alt=""  className="w-full h-full object-cover object-center absolute group-hover:scale-110 transition-all duration-500"/></div>
                            <div class="h-15 bg-golden aspect-[4/3] rounded-lg overflow-hidden relative group  hover:scale-95 transition-all duration-500"><img src="https://source.unsplash.com/700x400?briquette" alt=""  className="w-full h-full object-cover object-center absolute group-hover:scale-110 transition-all duration-500"/></div>
                            <div class="h-15 bg-golden aspect-[4/3] rounded-lg overflow-hidden relative group  hover:scale-95 transition-all duration-500"><img src="https://source.unsplash.com/700x400?briquette" alt=""  className="w-full h-full object-cover object-center absolute group-hover:scale-110 transition-all duration-500"/></div>
                            <div class="h-15 bg-golden aspect-[4/3] rounded-lg overflow-hidden relative group  hover:scale-95 transition-all duration-500"><img src="https://source.unsplash.com/700x400?briquette" alt=""  className="w-full h-full object-cover object-center absolute group-hover:scale-110 transition-all duration-500"/></div>
                            <div class="h-15 bg-golden aspect-[4/3] rounded-lg overflow-hidden relative group  hover:scale-95 transition-all duration-500"><img src="https://source.unsplash.com/700x400?briquette" alt=""  className="w-full h-full object-cover object-center absolute group-hover:scale-110 transition-all duration-500"/></div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </section>
      );
}
 
export default Gallery;