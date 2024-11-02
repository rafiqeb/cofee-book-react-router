import bannerimg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-5xl space-y-6">
                    <img className='rounded-xl' src={bannerimg} alt="" />
                    <h1 className='text-5xl font-bold'>Browser coffee by category</h1>
                    <p>Chooch your deser coffee category to browse through specific coffees that it in your test</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;