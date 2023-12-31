import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructorData = async () => {
      try {
        const response = await fetch("https://assignment12-server-nu.vercel.app/users/instructors");
        if (response.ok) {
          const data = await response.json();
          setInstructors(data);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchInstructorData();
  }, []);

  return (
   <>
   <Helmet>
        <title>Song Book | Instructor</title>
      </Helmet>
    <div className="my-12">
      <h3 className="text-2xl font-bold mb-4 text-center">Total Instructors: {instructors.length}</h3>
      <div className="grid grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="bg-slate-300 shadow-md rounded-lg p-4">
            <img src={instructor.image} alt={instructor.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">{instructor.name}</h4>
              <p className="text-gray-500">{instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default Instructor;
