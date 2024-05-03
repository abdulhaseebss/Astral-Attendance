
const NewTable = () => {
  const obj = [
    {
    name: "Abdul Haseeb",
    role: "Graphic Design",
    entryTime: "09:05",
    exitTime: "05:06",
    day:"monday",
    date: "12-5-24",
    preHour: "45",
    totalHour: "158",
    salary: "2500"
    },
    {
      name: "Abdul Haseeb",
      role: "Graphic Design",
      entryTime: "09:05",
      exitTime: "05:06",
      day:"monday",
      date: "12-5-24",
      preHour: "45",
    totalHour: "158",
    salary: "2500"

    },
    {
        name: "Abdul Haseeb",
        role: "Graphic Design",
        entryTime: "09:05",
        exitTime: "05:06",
        day:"monday",
        date: "12-5-24",
        preHour: "45",
        totalHour: "158",
        salary: "2500"
    },
    {
          name: "Abdul Haseeb",
          role: "Graphic Design",
          entryTime: "09:05",
          exitTime: "05:06",
          day:"monday",
          date: "12-5-24",
          preHour: "45",
          totalHour: "158",
          salary: "2500"
    },
    {
            name: "Abdul Haseeb",
            role: "Graphic Design",
            entryTime: "09:05",
            exitTime: "05:06",
            day:"monday",
            date: "12-5-24",
            preHour: "45",
            totalHour: "158",
            salary: "2500"
    }
];



  return (
    <>
    
    <div>
    <p className="text-xl font-semibold text-center mt-2">Astral development</p>
    <p className="text-xl font-semibold text-center mt-2">For the month of April</p>
    <p className="text-xl font-semibold text-center mt-2"><u>All Employee attendence sheet</u></p>
    </div>
      <table className="w-full mt-5">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border-[1px] border-[#000000] text-center p-3">Name</th>
            <th className="border-[1px] border-[#000000] text-center p-3">Role</th>
            <th className="border-[1px] border-[#000000] text-center p-3 w-60">
              Entry Exit
            </th>
            <th className="border-[1px] border-[#000000] text-center p-3">
              Day
            </th>
            <th className="border-[1px] border-[#000000] text-center p-3">
                Date
            </th>
            <th className="border-[1px] border-[#000000] text-center p-3 w-60">
              Present Hours
            </th>
            <th className="border-[1px] border-[#000000] text-center p-3">
              Total Hours
            </th>
            <th className="border-[1px] border-[#000000] text-center p-3">
                Salary
            </th>
          </tr>
        </thead>

        <tbody>
    
          {obj.map((item,index)=>{
            return (

            <tr key={index}>
              <td  className="border-[1px] border-[#000000] text-center p-2">{item.name}</td>
              <td  className="border-[1px] border-[#000000] text-center p-2">{item.role}</td>
                   <tr className="flex justify-between flex-col">
                   <td  className="border-[1px] border-[#000000] text-center p-2 w-60">
                    {item.entryTime}</td>
                    <td  className="border-[1px] border-[#000000] text-center p-2 w-60">
                     {item.exitTime}</td>
                   </tr>
              <td  className="border-[1px] border-[#000000] text-center p-2">{item.day}</td>
              <td  className="border-[1px] border-[#000000] text-center p-2">{item.date}</td>
              <td  className="border-[1px] border-[#000000] text-center p-2">{item.preHour}</td>
              <td  className="border-[1px] border-[#000000] text-center p-2">{item.totalHour}</td>
              <td  className="border-[1px] border-[#000000] text-center p-2">{item.salary}</td>
              </tr>
              )
          })}
        
        </tbody>
      </table>
    </>
  );
};

export default NewTable;