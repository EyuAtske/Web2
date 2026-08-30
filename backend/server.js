import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const otpStore = new Map();

const normalizePhoneNumber = (value) => {
  const digits = String(value || "").replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  let cleaned = digits;

  if (cleaned.startsWith("251")) {
    cleaned = cleaned.slice(3);
  }

  if (cleaned.startsWith("0")) {
    cleaned = cleaned.slice(1);
  }

  return `+251${cleaned}`;
};

const isValidEthiopianPhoneNumber = (value) => {
  const normalized = normalizePhoneNumber(value);

  if (!normalized) {
    return false;
  }

  return /^\+2519\d{8}$/.test(normalized);
};

app.use(
  cors({
    origin: ["http://localhost:5173", "https://contact-eyuel.netlify.app/"],
    credentials: true,
  })
);

app.use(express.json());

app.post("/api/send-otp", async (req, res) => {
  try {
    const { phone } = req.body;
    const normalizedPhone = normalizePhoneNumber(phone);

    if (!normalizedPhone || !isValidEthiopianPhoneNumber(normalizedPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Ethiopian mobile number",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000;
    otpStore.set(normalizedPhone, {
      otp,
      expiresAt,
    });

    console.log(`OTP for ${phone}: ${otp}`);

    const response = await fetch(
      "https://smsethiopia.com/api/v2/sms/send",
      {
        method: "POST",
        headers: {
          KEY: process.env.SMS_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          msisdn: normalizedPhone.replace(/^\+/, ""),
          text: `Your OTP is ${otp}`,
        }),
      }
    );

    const data = await response.json();

    console.log("SMS Ethiopia response:", data);

    if (!response.ok) {
      otpStore.delete(phone);

      return res.status(response.status).json({
        success: false,
        message: "Failed to send OTP",
        data,
      });
    }

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.error("Send OTP error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
});

app.post("/api/verify-otp", (req, res) => {
  try {
    const { phone, otp } = req.body;
    const normalizedPhone = normalizePhoneNumber(phone);

    if (!normalizedPhone || !otp) {
      return res.status(400).json({
        success: false,
        message: "Phone number and OTP are required",
      });
    }

    if (!isValidEthiopianPhoneNumber(normalizedPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Ethiopian mobile number",
      });
    }

    const storedOTP = otpStore.get(normalizedPhone);

    if (!storedOTP) {
      return res.status(400).json({
        success: false,
        message: "OTP not found. Please request a new OTP.",
      });
    }

    if (Date.now() > storedOTP.expiresAt) {
      otpStore.delete(normalizedPhone);

      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new OTP.",
      });
    }

    if (otp !== storedOTP.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }
    otpStore.delete(normalizedPhone);

    console.log(`OTP verified successfully for ${normalizedPhone}`);

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });

  } catch (error) {
    console.error("Verify OTP error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to verify OTP",
    });
  }
});


app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
