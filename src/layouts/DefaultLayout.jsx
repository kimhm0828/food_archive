const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      <div className="max-w-xl mx-auto min-w-[20rem] px-4">
        {children}
      </div>
    </div>
  );
};
export default DefaultLayout;
