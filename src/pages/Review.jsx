import { useContext, useState } from "react";
import { AuthContext } from "../component/authprovider/AuthProvider";
import useAxiosSecure from "../component/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Review = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [error, setError] = useState('');
// console.log(name);
// console.log(displayName);
    const handleSubmit=async (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        const date =form.date.value;
        
        // const result ={review,date,name}
        // console.log(result);
        if (!user) {
            setError("not logged in.");
            return;
          }
      
          const name = user.displayName || "Anonymous";
          const result = { review, date, name };
          console.log(result);


          try{
            const {data} =await axiosSecure.post(`/reviews`,result)
            // console.log(data);
            // navigate('/')
            if (data.acknowledged) {
                swal({
                  title: "Good job!",
                  text: "You successfully added!",
                  icon: "success",
                  button: "Done!",
                });
            }
        }catch (err) {
            console.log(err);
        }



    }
    return (
        <div className="mt-20">
            <h1 className="text-center font-bold text-6xl py-6">this is review</h1>
<div className="w-2/5 m-auto">
    <form onSubmit={handleSubmit}>
<div >
<label >Review</label>
        <textarea
        name="review"
          placeholder="Type Message"
          className="w-full bg-gray-200 p-2 pl-5 text-sm  rounded-md shadow-inner shadow-white focus:outline-none mb-3"
          rows="4"
        ></textarea>
        
      </div>
      <div >
           <label >Date</label>
            <input
              type="text"
              name="date"
              placeholder="date"
            //   {...register('price', { required: true })}
              className="w-full bg-gray-200 p-2 pl-5 h-12 text-sm  rounded-md shadow-inner shadow-white focus:outline-none mb-3"
              style={{ caretColor: 'red' }}
            />
           </div>
           {error && <p className="text-red-500">{error}</p>}
           <input type="submit" value="Submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#0b0e37] hover:bg-blue-700 focus:outline-none"/>
           </form>
</div>
           
        </div>
    );
};

export default Review;