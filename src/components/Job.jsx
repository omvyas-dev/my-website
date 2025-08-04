import React from 'react';
import feedbackImg from '../images/job.svg'; 
import './Jobsec.css';

export default function Job() {
  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans">
      
      {/* Header Section */}
      <div className="w-screen bg-gradient-to-r from-[#dcebe7] to-[#c6dad5] px-4 md:px-12 py-8 md:py-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sm text-blue-900 mb-2">Knowledge Base</p>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            How do I submit feedback for support tickets?
          </h1>
        </div>
      </div>    

      {/* Description (Optional Text Section) */}
      <div className="w-full px-6 py-6 text-gray-700 max-w-screen-md mx-auto text-center">
        <p className="text-base md:text-lg">
          Learn how to provide helpful feedback on your support interactions to improve future assistance.
        </p>
      </div>

      {/* Guide Section */}
      <div className="w-full text-center px-4 sm:px-6 md:px-8 lg:px-12 pb-10 md:pb-16">
        <div className="max-w-sm mx-auto">
          <img
            src={feedbackImg}
            alt="Feedback Guide"
            className="w-full h-auto mb-6"
          />
        </div>
      </div>
      
    </div>
  );
}
 