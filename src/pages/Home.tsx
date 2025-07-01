import clsx from "clsx";
import { links, projects, testimonials, skills, Articles } from "../components/Mapping";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import HoverBtn from "../components/HoverBtn";

const Home = ({ onsectionRef }: any) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          form.current?.reset();

          setTimeout(() => setMessage(null), 3000);
        },
        (error) => {
          console.error(error);
          setMessage("Failed to send message.");

          setTimeout(() => setMessage(null), 3000);
        }
      );
  };

  return (
    <div className="space-y-16 relative">

      {/* Profile */}
      <div className="flex items-end gap-4">
        <img
          src="https://placehold.co/150x150"
          alt="Developer"
          className="w-16 h-16 object-cover rounded-full"
        />
        <div className="space-y-2">
          <h1 className="font-semibold text-2xl">Ibhimwhar Dev</h1>
          <h3 className="text-sm text-neutral-500">
            Graphic Designer & Web Developer
          </h3>
        </div>
      </div>

      {/* About */}
      <div className="space-y-4 text-sm text-neutral-500 leading-relaxed">
        <p>
          With a passion for clean, intuitive design and pixel-perfect development, I have spent the last several years building engaging digital experiences for clients worldwide. My background in both graphic design and front-end development allows me to create seamless interfaces that not only look great but function beautifully across devices.
        </p>
        <p>
          In my current role, I specialize in crafting scalable design systems, responsive websites, and user-friendly templates. I enjoy bridging the gap between design and code, ensuring every project I touch maintains consistent aesthetics, accessibility, and technical performance. My ultimate goal is to deliver impactful, visually appealing solutions that elevate brands and delight users.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {links.map((link, i) => (
          link.link ? (
            <a
              key={i}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 transition-colors border border-neutral-300 dark:border-neutral-800 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm"
            >
              <link.icon size={16} />
              {link.title}
            </a>
          ) : (
            <button
              key={i}
              onClick={link.action}
              className="cursor-pointer px-4 py-2 transition-colors border border-neutral-300 dark:border-neutral-800 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm"
            >
              {link.title}
            </button>
          )
        ))}
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <h1 className="font-semibold text-xl">Projects</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {projects.map((item) => (
            <a
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-800 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={item.img}
                alt={`Project ${item.name}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm">
                View Project
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-4">
        <h1 className="font-semibold text-xl">Testimonials</h1>
        <div className="grid sm:grid-cols-2 border-t border-x-0 border-neutral-300 dark:border-neutral-800">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "p-4 space-y-3 border-neutral-300 dark:border-neutral-800",
                idx % 2 === 0 ? "border-b sm:border-r" : "border-b border-x-0"
              )}
            >
              <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                "<span className="text-sm">{item.description}</span>"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover border border-neutral-300 dark:border-neutral-800"
                />
                <h3 className="font-medium text-sm">{item.user}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <h1 className="font-semibold text-xl">Skills</h1>
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8"
          >
            <h3 className="text-sm md:w-[16vh] text-neutral-500">
              {item.title}:
            </h3>
            <ul className="flex flex-wrap font-thin gap-3 text-sm text-neutral-700 dark:text-neutral-300">
              {item.list.map((skill, indx) => (
                <li
                  key={indx}
                  className="px-2 py-1 border border-neutral-300 dark:border-neutral-800 rounded"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h1 className="font-semibold text-xl">Articles</h1>

        <div className="space-y-3">
          {Articles.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block border border-neutral-300 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <h2 className="font-medium text-lg mb-1 capitalize">{item.title}</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2 leading-relaxed">
                {item.description}
              </p>
              <HoverBtn>
                Read More
              </HoverBtn>
            </a>
          ))}
        </div>
      </div>


      {/* Email Form */}
      <div ref={onsectionRef} className="space-y-4">

        <h1 className="font-semibold text-xl">Subscribe</h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-5"
        >
          <div className="focus-within:ring-2 ring-neutral-200 dark:ring-neutral-900 transition-all flex rounded-md p-1.5 border border-neutral-300 dark:border-neutral-800">
            <div className="pl-3 gap-3 flex flex-1 items-center">
              <Mail size={20} className="text-neutral-700 dark:text-neutral-500" />
              <input
                type="email"
                name="user_email"
                required
                className="h-full flex-1 bg-transparent outline-none w-full placeholder:text-sm placeholder-neutral-700 dark:placeholder-neutral-500"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className={clsx(
                "text-white bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-white/70 dark:text-slate-800",
                "flex items-center gap-2 text-lg font-semibold transition-colors rounded-md p-1.5 px-3"
              )}
            >
              Send <Send size={16} />
            </button>
          </div>

          <textarea
            name="message"
            placeholder="Your message and provided name"
            className="focus-within:ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-md p-4 border border-neutral-300 dark:border-neutral-800 bg-transparent outline-none w-full placeholder:text-sm placeholder-neutral-700 dark:placeholder-neutral-500"
            rows={10}
            required
          />

        </form>

        <p className="text-[12px] text-neutral-500 leading-relaxed">
          No spam, unsubscribe at any time.
        </p>

      </div>

      {/* Success/Error Message */}
      <div
        className={clsx(
          "fixed bottom-5 right-5 shadow-md rounded-lg p-3 px-5 text-center border z-50",
          "bg-[#fcfbfb] dark:bg-[#0f0f0f] dark:shadow-[#0f0f0f] border-neutral-300 dark:border-neutral-800",
          message?.includes("successfully") ? "text-green-600" : "text-red-600",
          "transition-all duration-300 ease-in-out",
          message ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        {message}
      </div>
    </div>
  );
};

export default Home;