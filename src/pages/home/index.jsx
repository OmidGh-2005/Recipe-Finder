import SearchBar from "../../components/SearchBar";

const HomePage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-88px)] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#2D2420] mb-3 tracking-tight">
        Find Your Dish Recipe
      </h1>
      <p className="text-[#a28466] max-w-md mb-6 tracking-tight">
        Search thousands of recipes by ingredient and
        cook something great tonight.
      </p>
      <SearchBar />
    </div>
  );
};

export default HomePage;