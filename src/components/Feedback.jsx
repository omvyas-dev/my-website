import React from 'react';
import feedbackImg from '../images/feedback.svg'; // Ensure this path is correct
import bgfee from '../images/bgfee.svg'; // Ensure this path is correct

export default function Feedback() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Header Section */}
 <div
  className="w-full bg-cover bg-center p-6 md:p-12"
  style={{
    backgroundImage: `url(${bgfee})`,
  }}
>
        <p className="text-sm text-blue-900 mb-2">Knowledge Base</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          How do I submit feedback for support tickets?
        </h1>
      </div>

      {/* Description */}
      <div className="w-full px-6 md:px-12 py-6 text-gray-700">
        <p className="mb-4">
          If you want to give feedback on your support ticket experience, you can do so once the ticket has been closed.
          You will receive a message in your Wurkforce notifications to notify you of any closed tickets.
        </p>
        <p className="mb-4">
          The below guide gives step-by-step instructions on how to submit feedback for a closed ticket.
        </p>
        <p className="text-sm text-gray-500">5 months ago</p>
        <hr className="my-6 border-gray-200" />
      </div>

      {/* Guide Section */}
      <div className="w-full text-center px-4 pb-16">
        <img
          src={feedbackImg}
          alt="Feedback Guide"
          className="mx-auto mb-6 w-full max-w-sm"
        />


        {/* 
        <h2 className="text-xl font-semibold mb-2">
          How to Submit Feedback for Support Tickets
        </h2>

        <div className="text-gray-500 text-sm flex justify-center gap-4 mb-6">
          <span>Softwurk</span>
          <span>|</span>
          <span>9 Steps</span>
          <span>|</span>
          <span>19 Seconds</span>
        </div>

        <button className="bg-[#1a4452] text-white px-6 py-2 rounded-md hover:bg-[#163840]">
          GET STARTED
        </button>
        */}
      </div>

    </div>
  );
}
