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
      className="min-h-screen bg-[#1d1a2b] flex items-center justify-center px-4 py-16"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="w-full max-w-lg bg-[#29253d] p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl text-white font-semibold text-center mb-8">
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
                fullWidth
                placeholder="Your name"
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#3a3552",
                    borderRadius: 8,
                  },
                }}
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
                fullWidth
                placeholder="Mobile number"
                error={!!errors.mobile}
                helperText={errors.mobile?.message}
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#3a3552",
                    borderRadius: 8,
                  },
                }}
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
                fullWidth
                placeholder="Email address"
                error={!!errors.email}
                helperText={errors.email?.message}
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#3a3552",
                    borderRadius: 8,
                  },
                }}
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
                fullWidth
                multiline
                rows={4}
                placeholder="Write your message..."
                error={!!errors.message}
                helperText={errors.message?.message}
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#3a3552",
                    borderRadius: 8,
                  },
                }}
              />
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#818cf8",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              paddingY: "12px",
              "&:hover": {
                backgroundColor: "#6366f1",
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
