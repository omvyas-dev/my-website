import React from 'react'
import feedbackImg from '../images/job.svg'; // Replace with your actual image path

export default function Job() {
  return (

            <div className="w-full min-h-screen bg-gray-50 font-sans">
              {/* Header Section */}
              <div className="w-full bg-gradient-to-r from-[#dcebe7] to-[#c6dad5] p-8 md:p-12 h-[180px] w-[1440px]" style={{width:'1440px'}} >
                <p className="text-sm text-blue-900 mb-2">Knowledge Base</p>
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  How do I submit feedback for support tickets?
                </h1>
              </div>
        
              {/* Description */}
              <div className="w-full px-6 py-6 text-gray-700">
              
              </div>
        
              {/* Guide Section */}
              <div className="w-full text-center px-4 pb-16">
                <img
                  src={feedbackImg}
                  alt="Feedback Guide"
                  className="mx-auto mb-6 w-full max-w-sm"
                  width={'930px'}
                  height={'446px'}
                />
                </div>
    </div>
  );
}
