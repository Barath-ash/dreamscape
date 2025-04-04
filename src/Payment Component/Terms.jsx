import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Terms = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center p-6">
            <div className="bg-gray-700 shadow-md rounded-lg p-6 max-w-3xl w-full border border-gray-600 text-gray-300">
                <h2 className="text-3xl font-bold text-gray-200 mb-4 text-center">
                    Terms & Conditions
                </h2>

                <div className="max-h-96 overflow-y-auto p-4 border border-gray-500 rounded-md bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                        1. Booking & Payments
                    </h3>
                    <p className="mb-4">
                        All bookings require full payment to confirm the reservation. Refund policies vary based on 
                        the travel package chosen.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                        2. Cancellations & Refunds
                    </h3>
                    <p className="mb-4">
                        Cancellations made 7 days prior to the trip receive a full refund. Cancellations within 7 
                        days of departure may incur cancellation charges.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                        3. Travel Documents
                    </h3>
                    <p className="mb-4">
                        Passengers must ensure they have valid passports, visas, and other required documents before traveling.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                        4. Liability
                    </h3>
                    <p className="mb-4">
                        We are not responsible for missed flights, lost baggage, or any unforeseen travel disruptions.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                        5. Travel Insurance
                    </h3>
                    <p>
                        Travel insurance is highly recommended to cover unforeseen cancellations, medical emergencies, 
                        and other risks.
                    </p>
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-gray-300 rounded-md hover:bg-gray-500 transition duration-300"
                    >
                        <FaArrowLeft /> Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Terms;
