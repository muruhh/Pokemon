import LoaderCard from "./LoaderCard";

const Loader = () => (
  <section className='min-h-screen w-full flex flex-col items-center py-10 px-4'>
    <div className="flex-col items-center w-full max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />

        <LoaderCard />
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />
        
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />
        <LoaderCard />

      </div>
    </div>
  </section>
);

export default Loader;