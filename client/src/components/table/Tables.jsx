
const Tables = () => {
  return (
    <div className="">
    <table className="table">
      <thead className="bg-slate-500 text-white text-center text-xl">
        <tr className="justify-between">
          <th scope="col">Days</th>
          <th scope="col">Time In</th>
          <th scope="col">Time Out</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td>Monday</td>
          <td>12-1-15</td>
          <td>18-2-25</td>
        </tr>
      </tbody>
      <tbody>
        <tr className="text-center">
          <td>Tuesday</td>
          <td>12-1-15</td>
          <td>18-2-25</td>
        </tr>
      </tbody>
      <tbody>
        <tr className="text-center">
          <td>Wednesday</td>
          <td>12-1-15</td>
          <td>18-2-25</td>
        </tr>
      </tbody>
    </table>


  </div>
  )
}

export default Tables