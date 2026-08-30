import { useState } from "react";

export default function OTPVerification({ setIsLoggedIn }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSendOTP = async () => {
    setError("");

    if (!phoneNumber.trim()) {
      setError("Please enter your phone number");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }

      setOtpSent(true);
      setError("");
    } catch (error) {
      console.error("OTP error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setError("");

    if (!otp.trim()) {
      setError("Please enter the OTP");
      return;
    }

    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/verify-otp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: phoneNumber,
            otp: otp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid OTP");
      }
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Verification error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to verify OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChangeNumber = () => {
    setOtpSent(false);
    setOtp("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            OTP Verification
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {otpSent
              ? `Enter the OTP sent to ${phoneNumber}`
              : "Enter your phone number to receive an OTP"}
          </p>
        </div>

        {!otpSent ? (
          <div className="space-y-5">

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="251911639555"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <p className="mt-2 text-xs text-gray-500">
                Example: 251911639555
              </p>
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </div>
        ) : (
          <div className="space-y-5">

            <div>
              <label
                htmlFor="otp"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Enter OTP
              </label>

              <input
                id="otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="123456"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-2xl font-semibold tracking-[0.5em] text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleVerifyOTP}
              disabled={loading || otp.length !== 6}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              type="button"
              onClick={handleChangeNumber}
              disabled={loading}
              className="w-full text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              ← Change phone number
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
