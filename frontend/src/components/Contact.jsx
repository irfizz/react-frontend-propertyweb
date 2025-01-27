import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d55afaa9-5743-4ebc-bd89-1cc117c62ea1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 under font-light">With Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a move ? <br />
        Lets Build Your Future Together.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 text-left">
            Name
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Eg: John Smith" name="Name" required />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 mb-5">
            Email
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" placeholder="johnsmith@email.com" name="Name" required />
          </div>
        </div>
        <div className="my-6 text-left">
          Message Us
          <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-50 resize-none" name="Message" placeholder="I would like to buy a property...." required></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-black hover:scale-110 hover:transition-all transform ease-in-out">{result ? result : "Send Message"}</button>
      </form>
    </motion.div>
  );
};

export default Contact;
