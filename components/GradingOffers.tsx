import { FaEye, FaPen, FaUserShield, FaCalculator } from "react-icons/fa";

const features = [
  {
    icon: <FaEye className="text-white text-2xl" />,
    title: "Student Grades Access and Download",
    description:
      "Students can check their grades online anytime. They can also download their grades for offline use or personal records.",
  },
  {
    icon: <FaPen className="text-white text-2xl" />,
    title: "Professor Grade Input and Management",
    description:
      "Professors can log in to the system to add, edit, and save student grades for their courses.",
  },
  {
    icon: <FaUserShield className="text-white text-2xl" />,
    title: "Administrator Monitoring and Control",
    description:
      "Administrators have a dashboard where they can monitor professors' activities and ensure everything runs smoothly.",
  },
  {
    icon: <FaCalculator className="text-white text-2xl" />,
    title: "Automated Final Grade Calculation",
    description:
      "The system automatically calculates and generates students' final grades based on their scores.",
  },
];

const GradingOffers = () => {
  return (
    <section className="bg-[#F9F5F0] min-h-[90vh] flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          What Our Grading Portal Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-8">
              <div className="bg-black p-4 rounded-lg flex items-center justify-center min-w-[60px] min-h-[60px]">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-blue-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradingOffers;
