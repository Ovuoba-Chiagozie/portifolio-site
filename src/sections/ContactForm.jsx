import { useForm } from "react-hook-form";
import { useState } from "react";
import LoadingSpinnner from "../components/LoadingSpinner";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    type: "success",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
      setAlert(res);
      setLoading(false);
      setAlertVisibility(true);
    } catch (error) {
      console.log(error);
      setAlert(error);
      setLoading(false);
      setAlertVisibility(true);
    }
  };

  return (
    <section className="max-w-5xl px-8 py-12 mx-auto" id="contact">
      <Fade
        in={alertVisibility}
        timeout={{ enter: 1000, exit: 5000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
        addEndListener={() => {
          setTimeout(() => {
            setAlertVisibility(false);
          }, 2000);
        }}
      >
        <Alert
          className="fixed top-28 left-[50%] translate-x-[-50%] z-50 w-full max-w-xs justify-center"
          severity={alert.type}
        >
          {alert.message}
        </Alert>
      </Fade>
      <LoadingSpinnner loading={loading} />
      <h2 className="font-[Verdana] font-bold text-3xl text-black text-center mx-auto mb-11">
        Get in touch
      </h2>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <h2 className="text-5xl text-[#ffc200] font-bold">
            Let's work together!
          </h2>
          <h3 className="mt-6 text-lg text-black">
            I'm always down to working on new projects. <br/> If you want to reach
            out, I respond to every message sent through this form- but make
            sure the email is valid. <br />You can also email directly to{" "}
            <span className="font-bold">ovuobachiagozie@gmail.com</span>
          </h3>
        </div>
        <div className="flex-1">
          <form
            action=""
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col mb-5">
              <label
                htmlFor="firstName"
                className="font-[Verdana] text-lg mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                className="border outline-none rounded-md border-[#E6ECF8] h-12 px-4 py-2 block"
                name="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="secondName"
                className="font-[Verdana] text-lg mb-2"
              >
                Second Name
              </label>
              <input
                type="text"
                className="border outline-none rounded-mc border-[#E6ECF8] h-12 px-4 py-2 block"
                name="secondName"
                {...register("secondName", { required: true })}
              />
              {errors.secondName && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="font-[Verdana] text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="border rounded-md border-[#E6ECF8] outline-none h-12 px-4 py-2 block"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <p className="text-red-600">Email must be valid</p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="message" className="font-[Verdana] text-lg mb-2">
                Message
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="block border outline-none rounded-md border-[#E6ECF8] px-4 py-2"
                {...register("message", { required: true, minLength: 10 })}
              ></textarea>
              {errors.message && (
                <p className="text-red-600">
                  Message must be at least 10 characters long
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-[#ffc200] hover:text-white font-thin text-[#ffc200] px-6 py-3 border border-[#ffc200] my-8 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
