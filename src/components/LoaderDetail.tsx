function LoaderDetail() {
    const gradientBg = 'bg-gradient-to-r from-purple-500 to-pink-500';

    return (
        <section className='min-h-screen bg-pink-50 w-full py-20 px-4 flex justify-center items-center'>
            <div className="w-full max-w-3xl bg-white rounded-lg shadow overflow-hidden">
                <div className="flex-col items-center w-full max-w-7xl">

                    <div className={`${gradientBg} text-white px-6 py-4 relative`}>
                        <h1 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bolt-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/> </linearGradient></defs><path d="M13 2L4 14H11L9 22L20 10H13L13 2Z" stroke="url(#bolt-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
                        </h1>
                        <p className="text-center text-lg mt-2"></p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white p-4 rounded shadow animate-pulse flex gap-3 w-full">
                            <div className="h-80 w-100 bg-gray-300 rounded-full mb-4"></div>
                            <div className="flex flex-col items-center justify-center gap-5">
                                <div className="h-8 w-100 bg-gray-300 rounded"></div>
                                <div className="h-8 w-100 bg-gray-200 rounded"></div>
                                <div className="h-8 w-100 bg-gray-200 rounded"></div>
                                <div className="h-8 w-100 bg-gray-200 rounded"></div>
                                <div className="h-8 w-100 bg-gray-200 rounded"></div>
                                <div className="h-8 w-100 bg-gray-200 rounded"></div>
                                <div className="h-8 w-100 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LoaderDetail;