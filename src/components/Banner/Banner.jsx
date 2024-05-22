

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#1313130D] rounded-3xl p-2 md:p-32 space-x-10 mt-10">
            <div className="w-full md:w-3/5">
                <h2 className="text-5xl font-bold">Books to freshen up your bookshelf</h2>
                <button className="btn bg-[#23BE0A] px-6 py-2 rounded-xl text-xl text-white font-bold mt-16">View The List</button>
            </div>
            <div  className="w-full md:w-2/5">
                <img src="https://i.ibb.co/GVq5kNf/bannerbook.png" alt="bannerbook" />
            </div>
        </div>
    );
};

export default Banner;