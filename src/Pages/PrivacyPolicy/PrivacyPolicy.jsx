import { format } from "date-fns";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full mx-auto px-4 py-10 bg-green-50  text-base text-gray-700">
      <h1 className="text-3xl text-green-600 text-center font-bold mb-6">
        Privacy Policy
      </h1>
      <div className="px-12">
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use the Voice of
          Palestine platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          and any content you submit through forms or contributions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          Your information helps us improve our platform, respond to your
          inquiries, and feature contributions when permitted.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          protect your data from unauthorized access, disclosure, or loss.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Third-Party Services
        </h2>
        <p className="mb-4">
          We do not sell or share your personal data with third parties except
          as required by law or with your consent.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You may request to access, correct, or delete your personal data by
          contacting us through the website’s contact page.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. All updates will
          be posted on this page with the date of revision.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Last updated: {format(new Date(), "EEEE, MMMM d, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;