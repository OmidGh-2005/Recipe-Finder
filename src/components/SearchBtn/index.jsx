const SearchBtn = ({children}) => {
  return (
    <button
      type="submit"
      className="px-6 py-3 rounded-full bg-[#db5f3d] text-white font-medium hover:bg-[#C8654B] shadow-sm transition-colors duration-200 whitespace-nowrap"
    >
      {children}
    </button>
  );
};

export default SearchBtn;
