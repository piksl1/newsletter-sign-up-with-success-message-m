import checkIcon from "../assets/images/icon-success.png";

interface SuccessModalProps {
  email: string;
  onDismiss: () => void;
}

export default function SuccessModal({ email, onDismiss }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 md:p-12 max-w-[450px] w-full">
        <img src={checkIcon} alt="Success" className="w-16 h-16 mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
          Thanks for subscribing!
        </h2>
        <p className="text-base text-gray-700 mb-8">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button
          onClick={onDismiss}
          className="w-full bg-blue-950 text-white py-4 rounded-lg 
                     hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 
                     transition duration-300"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}
