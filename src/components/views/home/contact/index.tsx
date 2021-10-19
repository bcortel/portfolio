import { useState } from "react";
import SectionHeader from "../../../sectionHeader/sectionHeader";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const isDisabled = () => {
    return !email || !name || !message || !phone;
  };

  return (
    <section className="py-10 pb-16 " id="contact">
      <div className="container mx-auto">
        <SectionHeader topTitle="Get in" botTitle="Touch" />
        <form action="" className="w-3/5 mx-auto">
          <div className="flex mb-4">
            <div className="w-1/3 mx-1">
              <label htmlFor="name">Name</label>
              <input
                className="block w-full border-solid border-b border-gray-500 p-2"
                type="text"
                name="name"
                id="name"
                placeholder="Juan Dela Cruz"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-1/3 mx-1">
              <label htmlFor="email">Email</label>
              <input
                className="block w-full border-solid border-b border-gray-500 p-2"
                type="email"
                name="email"
                id="email"
                placeholder="juan.delacruz@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-1/3 mx-1">
              <label htmlFor="phone">Phone</label>
              <input
                className="block w-full border-solid border-b border-gray-500 p-2"
                type="tel"
                name="phone"
                id="phone"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                placeholder="0912-345-8789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full p-2 border-solid border rounded border-gray-500 h-40"
              style={{ resize: "none" }}
              placeholder="Hello there!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              disabled={isDisabled()}
              type="submit"
              className={`bg-gray-500 border-2 rounded border-gray-500 text-white rounded font-semibold text-lg uppercase py-2 px-6 transition ${
                isDisabled()
                  ? "pointer-events-none opacity-50"
                  : "hover:bg-white hover:text-black"
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
