import { type FormEvent, useState } from "react";
import checkIcon from "../assets/images/icon-list.png";
import illustration from "../assets/images/illustration-sign-up-desktop.png";
import SuccessModal from "./SuccessModal";

export default function SubscriptionPage() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  // Email validation function
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "" || !validateEmail(email)) {
      setShowError(true); // Show error if email is empty or invalid
    } else {
      setShowModal(true);
      setShowError(false); // Reset error state if email is valid
    }
    console.log(email, showError);
  };

  const handleDismiss = () => {
    setShowModal(false);
    setEmail(""); // Reset email input when returning to subscription page
    setShowError(false);
  };

  if (showModal) {
    return <SuccessModal email={email} onDismiss={handleDismiss} />;
  }
  let emailInputStyle;
  if (showError) {
    emailInputStyle =
      "w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato-500 cursor-pointer text-red-500";
  } else {
    emailInputStyle =
      "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato-500 cursor-pointer";
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-charcoal-grey">
      <div className="flex bg-white rounded-2xl shadow-lg max-w-4xl">
        <div className="p-8 md:p-12 space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">
            Stay updated!
          </h1>
          <p className="text-base text-gray-700">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="space-y-4">
            {[
              "Product discovery and building what matters",
              "Measuring to ensure updates are a success",
              "And much more!",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <img
                  src={checkIcon}
                  alt="Check"
                  className="w-5 h-5 mr-4 mt-1"
                />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className={`${showError ? "flex justify-between" : ""} `}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address
                </label>
                {showError && (
                  <span className="block text-sm font-medium text-tomato-red mb-1">
                    Valid email required
                  </span>
                )}
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="email@company.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                  // Clear error state only if the email is valid
                  if (validateEmail(e.target.value)) {
                    setShowError(false);
                  }
                  console.log("Email input changed:", e.target.value);
                }}
                className={emailInputStyle}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-3 rounded-md 
             hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 
             active:bg-gradient-to-r active:from-pink-600 active:to-orange-600 
             transition duration-300 shadow-xl hover:shadow-orange-300/50"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="hidden md:block md:w-[400px]">
          <img
            src={illustration}
            alt="Illustration"
            className="h-full w-full object-cover rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
}
