import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-quad", once: true });
  }, []);

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-[#f4f4f9] text-gray-800 flex flex-col lg:flex-row justify-center items-start px-6 lg:px-24 py-20 gap-12"
    >
      {/* Left: Map + Info */}
      <div
        data-aos="fade-right"
        className="flex flex-col gap-6 text-sm text-[#1d1a2b] max-w-lg w-full"
      >
        <div className="bg-white shadow-md rounded-2xl p-6 space-y-3">
          <h3 className="text-lg font-semibold text-[#1d1a2b]">Contact Info</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:9926827368" className="text-blue-600">
              9926827368
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:aryandew7368@gmail.com" className="text-blue-600">
              aryandew7368@gmail.com
            </a>
          </p>
          <p>
            <strong>Address:</strong>
            <br />
            Rashtriya Chowk, Adiwasi Colony,
            <br />
            Kushalpur, Raipur, Chhattisgarh 492001
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Aryan's Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.183626701428!2d81.64269091485535!3d21.260343385901334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28d225788f0131%3A0x43a3a248fda9333f!2sRashtriya%20Chowk%2C%20Kushalpur%2C%20Raipur%2C%20Chhattisgarh%20492010!5e0!3m2!1sen!2sin!4v1691137457689!5m2!1sen!2sin"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right: Form */}
      <div
        data-aos="fade-left"
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#1d1a2b]">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="standard"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                InputLabelProps={{ style: { color: "#1d1a2b" } }}
              />
            )}
          />

          {/* Mobile */}
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers allowed",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Mobile"
                variant="standard"
                fullWidth
                error={!!errors.mobile}
                helperText={errors.mobile?.message}
                InputLabelProps={{ style: { color: "#1d1a2b" } }}
              />
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="standard"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                InputLabelProps={{ style: { color: "#1d1a2b" } }}
              />
            )}
          />

          {/* Message */}
          <Controller
            name="message"
            control={control}
            rules={{
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
                InputLabelProps={{ style: { color: "#1d1a2b" } }}
              />
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#6366f1",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              paddingY: "12px",
              "&:hover": {
                backgroundColor: "#4f46e5",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
