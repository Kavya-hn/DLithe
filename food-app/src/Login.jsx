import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [timer, setTimer] = useState(30);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  // Generate a 6-digit OTP
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send OTP via EmailJS
  const sendOtp = async () => {
    const otpCode = generateOtp();
    setGeneratedOtp(otpCode);
    setOtpSent(true);
    setTimer(30); // Reset Timer

    const emailParams = {
      to_email: email, // Recipient's Email
      otp: otpCode, // OTP value
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("OTP sent to your email!");
    } catch (error) {
      console.error("Failed to send OTP:", error);
      alert("Error sending OTP. Try again.");
    }
  };

  // OTP Countdown Timer
  useEffect(() => {
    let countdown;
    if (otpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [otpSent, timer]);

  // Verify OTP
  const verifyOtp = () => {
    if (otp === generatedOtp) {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Email OTP Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button onClick={sendOtp} disabled={otpSent}>
        {otpSent ? `Resend OTP in ${timer}s` : "Send OTP"}
      </button>

      {otpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      <p>
        New user? <span onClick={() => navigate("/signup")}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
