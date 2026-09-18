const LoginButton = ({ children }) => {
  return (
    <button className="px-6 py-2 rounded-full bg-[#db5f3d] text-white font-medium hover:bg-[#C8654B] transition-colors duration-200">
      {children}
    </button>
  );
};

export default LoginButton;