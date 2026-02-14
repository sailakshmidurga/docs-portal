"use client";

import { useState } from "react";

export default function Feedback() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitFeedback = () => {
    if (!text) return;
    setSubmitted(true);
    setText("");
  };

  return (
    <div className="mt-10 border-t pt-4">
      <h3 className="font-semibold mb-2">Feedback</h3>

      <textarea
        data-testid="feedback-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2"
        placeholder="Enter your feedback"
      />

      <button
        data-testid="feedback-submit"
        onClick={submitFeedback}
        className="mt-2 border px-4 py-1"
      >
        Submit
      </button>

      {submitted && (
        <p
          data-testid="feedback-success-message"
          className="mt-2 text-green-600"
        >
          Feedback submitted successfully!
        </p>
      )}
    </div>
  );
}
