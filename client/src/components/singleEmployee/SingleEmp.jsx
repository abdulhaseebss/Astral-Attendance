
const SingleEmp = () => {


  return (
    <>
    <div className="flex justify-center h-[100vh] items-center">
    <div className="w-[70%] bg-[#55f8da] rounded-2xl p-10">
        <div className="flex justify-center mt-5">
          <div className="circle bg-gray-300 rounded-full w-60 h-60 text-center"></div>
        </div>
        <div className="text-center">
          <p className="font-semibold text-2xl mb-3">Muhammad Owais</p>
          <p className="font-medium text-xl mb-3">Web Developer</p>
          <p className="font-medium text-xl">raza5577@gmail.com</p>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-600 px-3 mt-2 text-white  rounded-xl">
            Entrance
          </button>
          <button className="bg-red-600  px-3 p-2 text-white mt-2 ml-2 rounded-xl">
            Exist
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleEmp;
