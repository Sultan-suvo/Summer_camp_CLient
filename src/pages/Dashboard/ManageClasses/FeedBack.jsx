import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const FeedBack = () => {
    const location = useLocation();
    const stateValue = location.state;
    const id = stateValue._id;

    const handleFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const fb = form.feedback.value;

        // Send the feedback to the API
        fetch(`https://assignment12-server-nu.vercel.app/insertFeedback/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([fb]),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Feedback has been sent to the instructor!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to send feedback. Please try again.",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <div>
            <h2 className="text-3xl text-center mb-10">FeedBack For Instructor</h2>
            <div className="w-3/4 mx-auto bg-[#e5e8ec] p-10 h-96">
                <form onSubmit={handleFeedback} action="">
                    <textarea
                        name="feedback"
                        className="textarea w-full h-48"
                        placeholder="Write Feedback"
                    ></textarea>
                    <div className="text-end">
                        <button type="submit" className="btn bg-warning border-0 ">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedBack;