import React, {  useState } from "react";
import autoCV from "../assets/autoCV.pdf";






const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  


  const handleSubmit = () => {

    
  

  fetch("https://backend-941t.onrender.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};



  return (
    <section className="py-20 bg-slate-100" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <p className="mt-4 text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello
            👋
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>

            <p className="text-gray-600">
              I’m a Full Stack Developer based in Lucknow, India. Open to
              freelance, full-time roles, and exciting projects.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>📍 Lucknow, India</p>
              <p>
                📧{" "}
                <a
                  href="mailto:amandayashankarmaurya@gmail.com"
                  className="text-indigo-600 hover:underline"
                >
                  amandayashankarmaurya@gmail.com
                </a>
              </p>
              <p>
                🔗{" "}
                <a
                  href="https://www.linkedin.com/in/aman-maurya-55068a288"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </p>
              <p>📞 Contact No: 7355489886</p>
              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                <a
                  href={autoCV}
                  download="Aman_Maurya_autoCV.pdf"
                  className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-amber-100 p-8 rounded-2xl shadow-md space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default Contact;
