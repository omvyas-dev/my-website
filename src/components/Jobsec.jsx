import React from 'react';
import f1 from '../images/Frame (1).svg';
import f2 from '../images/Frame (2).svg';
import f3 from '../images/Frame (3).svg';
import f4 from '../images/Frame (4).svg';

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm text-gray-700 font-medium">{value}</p>
  </div>
);

const Jobsec = () => {
  return (
    <div className="bg-gray-100 flex-1 overflow-y-auto p-6 font-sans mt-125 ">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Job Order Details</h1>
        <p className="text-sm text-gray-500">Job ID: #976784HS</p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left section */}
        <div className="md:col-span-2 space-y-6">
          {/* Job Status */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Job Type</p>
                <h3 className="text-lg font-bold">Diagnosis</h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">STATUS</p>
                <span className="text-red-500 font-semibold text-sm">CANCELLED</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span><img src={f1} /> 18/09/2024</span>
                <span><img src={f2} /> 10:00 am</span>
              </div>
              <div className="flex items-center gap-2">
                <span><img src={f3} /> 19/09/2024</span>
                <span><img src={f4} /> 10:00 am</span>
              </div>
            </div>
          </div>

          {/* Device Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-4">Device Info</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <Info label="Equipment Type" value="Laptop" />
              <Info label="Password" value="1234" />
              <Info label="Equipment Make" value="Lenovo" />
              <Info label="Equipment Model" value="LNX1234" />
              <Info label="Was Equipment Purchased from Gadgetronik?" value="Yes" />
              <Info label="Is Item Under Warranty?" value="No" />
              <Info label="Accessories Booked In" value="Yes" />
              <Info label="Accessories Details" value="Carrying Case" />
            </div>
            <div className="mt-4">
              <p className="font-medium text-sm text-gray-800">Problem/Fault Description</p>
              <p className="text-sm text-gray-600">Does not power up</p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-800">Quote</h3>
                <p className="text-sm text-gray-500">Quotation: #46 | Issued: 19/09/2024</p>
              </div>
              <p className="text-red-500 font-semibold text-sm">QUOTE DECLINED</p>
            </div>
            <table className="w-full text-sm text-left text-gray-700 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">ITEM</th>
                  <th className="p-2">NAME</th>
                  <th className="p-2">PRICE</th>
                  <th className="p-2">TAX</th>
                  <th className="p-2">QTY</th>
                  <th className="p-2">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">1</td>
                  <td className="p-2">Device Handover</td>
                  <td className="p-2">TSh 0</td>
                  <td className="p-2">18%</td>
                  <td className="p-2">1</td>
                  <td className="p-2">TSh 0</td>
                </tr>
                <tr>
                  <td className="p-2">2</td>
                  <td className="p-2">Battery Replacement Service</td>
                  <td className="p-2">TSh 141.60</td>
                  <td className="p-2">18%</td>
                  <td className="p-2">1</td>
                  <td className="p-2">TSh 141.60</td>
                </tr>
              </tbody>
            </table>
            <div className="text-sm text-right space-y-1">
              <p>Subtotal: <strong>TSh 141.60</strong></p>
              <p>Tax (18%): <strong>TSh 16.60</strong></p>
              <p>Total: <strong>TSh 158.20</strong></p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-red-50 p-4 border border-red-200 rounded-lg text-sm text-gray-700">
            <h4 className="font-semibold mb-2 text-red-600">Disclaimer</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>A minimum charge of TShs 20,000 is necessary for any equipment that is scheduled for an inspection, diagnostics, and/or repair.</li>
              <li>Storage charges of TShs 5,000/- per day will accrue for equipment that is not collected within 30 days of completion.</li>
              <li>Equipment that is not collected within 90 days of booking will be forfeited without notification to cover expenditures for repair and/or storage.</li>
              <li>The customer is responsible for backing up all data and other software in the apparatus; we will not be held liable for any loss of data and/or software.</li>
              <li>Gadgetronik shall not be held responsible for any damage or loss resulting from power surges, uprisings, and/or natural calamities that are beyond it.</li>
            </ul>
          </div>
        </div>

        {/* Right section - Customer info */}
        <div className="bg-white p-6 rounded-lg shadow text-center h-[400px] ">

          <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">Celina Mark</h2>
          <p className="text-sm text-gray-500">ID: 1568475</p>
          <div className="mt-4 space-y-2 text-sm text-gray-600 text-left">
            <p><strong>First Name:</strong> Zishan</p>
            <p><strong>Last Name:</strong> Sajan</p>
            <p><strong>Phone:</strong> +44 7957 367212</p>
            <p><strong>Email:</strong> zishan@gadgetronik.net</p>
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm">
            EDIT DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobsec;
