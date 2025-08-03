function PaginationView() {
  
  return (
    <section className="flex-col items-center py-10 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
            
            <div className="bg-white rounded shadow p-4 text-center">
                <div className="bg-gray-100">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="mx-auto w-full object-contain" />
                </div>
                <h2 className="mt-4 font-medium">Bulbasaur</h2>
                <p className="text-sm text-gray-500">#001</p>
            </div>
        </div>
    </section>
  );
};

export default PaginationView;
