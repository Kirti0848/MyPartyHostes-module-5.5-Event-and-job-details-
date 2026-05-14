import { useState } from 'react';

const countryOptions = [
  { id: 1, label: 'Australia', value: 'Australia' },
  { id: 2, label: 'India', value: 'India' },
  { id: 3, label: 'United Kingdom', value: 'United Kingdom' },
  { id: 4, label: 'United States', value: 'United States' },
  { id: 5, label: 'Canada', value: 'Canada' },
  { id: 6, label: 'New Zealand', value: 'New Zealand' },
  { id: 7, label: 'Singapore', value: 'Singapore' },
  { id: 8, label: 'UAE', value: 'UAE' }
];
const cityOptions = [
  { id: 1, label: 'Brisbane (WEST)', value: 'Brisbane (WEST)' },
  { id: 2, label: 'Sydney', value: 'Sydney' },
  { id: 3, label: 'Melbourne', value: 'Melbourne' },
  { id: 4, label: 'Perth', value: 'Perth' },
  { id: 5, label: 'Adelaide', value: 'Adelaide' },
  { id: 6, label: 'Gold Coast', value: 'Gold Coast' },
  { id: 7, label: 'Canberra', value: 'Canberra' },
  { id: 8, label: 'Darwin', value: 'Darwin' }
];
const durationOptions = [
  { id: 1, label: '1 Hour', value: '1 Hour' },
  { id: 2, label: '2 Hours', value: '2 Hours' },
  { id: 3, label: '3 Hours', value: '3 Hours' },
  { id: 4, label: '4 Hours', value: '4 Hours' },
  { id: 5, label: '5 Hours', value: '5 Hours' },
  { id: 6, label: '6 Hours', value: '6 Hours' },
  { id: 7, label: '7 Hours', value: '7 Hours' },
  { id: 8, label: '8 Hours', value: '8 Hours' }
];
const staffCategoryOptions = [
  { id: 1, label: 'Waiter', value: 'Waiter' },
  { id: 2, label: 'Bartender', value: 'Bartender' },
  { id: 3, label: 'Host', value: 'Host' },
  { id: 4, label: 'Promoter', value: 'Promoter' },
  { id: 5, label: 'Brand Ambassador', value: 'Brand Ambassador' },
  { id: 6, label: 'Event Manager', value: 'Event Manager' },
  { id: 7, label: 'Chef', value: 'Chef' },
  { id: 8, label: 'Security', value: 'Security' }
];

const icons = {
  angleDown: <i className="fa-solid fa-angle-down text-[9px]" />,
  calendar: <i className="fa-regular fa-calendar-plus text-[14px]" />,
  map: <img src="/organizers/MapPin.png" alt="Map pin" className="w-[14px] h-[14px] object-contain" />
};

function DropdownField({ label, value, placeholder, options, onChange, selectedColor = 'text-[#292929]', backgroundClass = 'bg-[#F9F9F9]', suffixIcon = icons.angleDown, plainSuffixIcon = false }) {
  return (
    <div>
      <label className="block text-[12px] text-[#3D3D3D] mb-1.5 font-normal">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`select-field w-full appearance-none border border-gray-200 rounded-lg p-3 pr-12 text-[14px] ${selectedColor} ${backgroundClass} outline-none`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span
          className={plainSuffixIcon
            ? 'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#656565] flex items-center justify-center'
            : 'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-[#656565] bg-white flex items-center justify-center text-[#656565] flex-shrink-0'}
        >
          {suffixIcon}
        </span>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [gender, setGender] = useState('Female');
  const [payRate, setPayRate] = useState('Hourly');
  const [country, setCountry] = useState('Australia');
  const [jobCity, setJobCity] = useState('Brisbane (WEST)');
  const [jobDate, setJobDate] = useState('');
  const [duration, setDuration] = useState('');
  const [staffCategory, setStaffCategory] = useState('');
  const [locationCity, setLocationCity] = useState('Brisbane (WEST)');

  const organisers = [
    { id: 1, name: 'Robert John', email: 'robert.john@gmail.com', desc: '34 events organized • Sydney, NSW', img: '/organizers/Image (Robert John).png' },
    { id: 2, name: 'John Doe', email: 'john.doe@gmail.com', desc: '12 events organized • Melbourne, VIC', img: '/organizers/Image (John Doe).png' },
    { id: 3, name: 'Mr. Alex', email: 'alex@gmail.com', desc: '52 events organized • Brisbane, QLD', img: '/organizers/Image (Mr. Max).png' },
    { id: 4, name: 'Pat Cummins', email: 'pat.cummins@gmail.com', desc: '15 events organized • Perth, WA', img: '/organizers/Image (Pat Cummins).png' }
  ];

  const formattedJobDate = jobDate
    ? new Date(`${jobDate}T00:00:00`).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      })
    : 'Select event date.';

  return (
    <div className="min-h-screen bg-white py-10 px-4 flex justify-center font-sans relative">

      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-[520px] rounded-2xl overflow-hidden shadow-xl animate-in fade-in zoom-in duration-200 border border-gray-100">
            <div className="px-4 py-3.5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-[15px] text-gray-800">Select Event Organiser</h3>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-400 text-lg leading-none hover:bg-gray-50">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="p-4 bg-[#F6F6F6]">
              <div className="relative flex items-center">
                <span className="absolute left-3 text-[#E31F87] text-sm">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <input 
                  type="text" 
                  placeholder="Search by name, email, or location..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#E31F87]"
                />
              </div>
              <p className="text-[10px] text-gray-400 mt-2 ml-1">Search and select event organiser who will manage this event.</p>
            </div>

            <div className="max-h-[360px] overflow-y-auto px-4 pb-4 space-y-3">
              {organisers.map((org) => (
                <div key={org.id} 
                  className={`group p-3.5 flex items-center gap-3 border rounded-xl cursor-pointer transition-all ${selectedOrg?.id === org.id ? 'border-[#FF4D7D] bg-[#FFF6F8]' : 'border-gray-200 bg-white hover:border-[#FF9CB5] hover:bg-[#FFF9FB]'}`}
                  onClick={() => { setSelectedOrg(org); setShowModal(false); }}
                >
                  <img src={org.img} alt="" className="w-11 h-11 rounded-full border border-gray-200 object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-gray-800 truncate">{org.name}</p>
                    <p className="text-[11px] text-gray-400 truncate">{org.email}</p>
                    <p className="text-[10px] text-gray-500 truncate">{org.desc}</p>
                  </div>
                  <button className={`bg-[#E31F87] text-white text-[11px] px-4 py-2 rounded-lg font-bold shadow-sm shrink-0 transition-opacity ${selectedOrg?.id === org.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>Select</button>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-[#F6F6F6]">
              <span className="text-[11px] text-gray-400 font-medium">{organisers.length} Organisers available</span>
              <button onClick={() => setShowModal(false)} className="px-5 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-500 bg-white hover:bg-gray-50">Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-[747px] bg-[#F9F9F9] shadow-none p-8 border-none mb-10 relative overflow-visible">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[16px] font-bold text-[#292929]">1. Event and Job Details</h2>
          <button className="text-gray-400 hover:text-gray-600 leading-none">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="space-y-5 mb-8">
          <DropdownField
            label="Country"
            value={country}
            placeholder="Select country"
            options={countryOptions}
            onChange={setCountry}
          />

          <DropdownField
            label="City"
            value={jobCity}
            placeholder="Select city"
            options={cityOptions}
            onChange={setJobCity}
          />

          <div>
            <label className="block text-[11px] text-[#3D3D3D] mb-1">Currency</label>
            <div className="inline-block px-4 py-2 rounded-lg bg-[#F9F9F9] border border-gray-200">
              <p className="font-medium text-[14px] text-[#292929]">AUD</p>
            </div>
          </div>

          <DropdownField
            label="Staff Category"
            value={staffCategory}
            placeholder="Choose the type of staff"
            options={staffCategoryOptions}
            onChange={setStaffCategory}
            selectedColor="text-[#656565]"
          />

          <div>
            <label className="block text-[12px] text-[#3D3D3D] mb-1.5 font-normal">Number of Position</label>
            <input type="text" placeholder="Enter how many staff you need." className="w-full border border-gray-200 rounded-lg p-3 text-[14px] text-[#656565] bg-[#F9F9F9] outline-none" />
          </div>

          <div>
            <label className="block text-[12px] text-[#3D3D3D] mb-1.5 font-normal">Event Name</label>
            <input type="text" placeholder="Give your event a name" className="w-full border border-gray-200 rounded-lg p-3 text-[14px] text-[#656565] bg-[#F9F9F9] outline-none" />
          </div>

          <div>
            <label className="block text-[12px] text-[#3D3D3D] mb-1.5 font-normal">Job Description</label>
            <textarea rows="3" placeholder="Provide a short description of the job." className="w-full border border-gray-200 rounded-lg p-3 text-[14px] text-[#656565] bg-[#F9F9F9] outline-none"></textarea>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-[16px] font-bold text-[#292929] mb-4">2. Assign Event Organiser</h2>
          <div className="bg-white p-6 shadow-sm rounded-lg">
            <p className="text-[13px] text-[#292929] font-normal">Event Organiser</p>
            <p className="text-[12px] text-[#3D3D3D] mt-1 mb-4">Select an event organiser who will manage this event.</p>
            
            {selectedOrg ? (
              <div className="flex items-center gap-3 p-3 border-2 border-[#E61E4D] bg-pink-50 rounded-lg transition-all">
                <img src={selectedOrg.img} alt="" className="w-10 h-10 rounded-full border border-pink-200" />
                <div className="flex-1">
                  <p className="text-[13px] font-bold text-gray-800">{selectedOrg.name}</p>
                  <p className="text-[11px] text-gray-500">{selectedOrg.email}</p>
                </div>
                <button onClick={() => setSelectedOrg(null)} className="text-[11px] text-[#E31F87] font-bold underline">Change Event Organiser</button>
              </div>
            ) : (
              <button 
                onClick={() => setShowModal(true)}
                className="w-full py-3 border-2 border-[#E61E4D] text-[#E31F87] text-[13px] font-bold hover:bg-pink-100 bg-pink-50 rounded-lg"
              >
                + Select Event Organiser
              </button>
            )}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-[16px] font-bold text-[#292929] mb-4">3. Date, Time and Duration</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-[12px] text-[#3D3D3D] mb-1.5 font-normal">Job Date</label>
              <div className="relative">
                <div className="w-full border border-gray-200 rounded-lg p-3 pr-10 text-[14px] text-[#656565] outline-none bg-[#ECECEC] min-h-[48px] flex items-center">
                  <span className={jobDate ? 'text-[#656565]' : 'text-[#656565]'}>{formattedJobDate}</span>
                </div>
                <input
                  type="date"
                  value={jobDate}
                  onChange={(event) => setJobDate(event.target.value)}
                  aria-label="Job Date"
                  className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#656565] flex items-center justify-center">
                  {icons.calendar}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] text-[#3D3D3D] mb-1.5 font-normal">Start Time</label>
                <input type="time" className="w-full border border-gray-200 rounded-lg p-3 text-[14px] text-[#656565] outline-none bg-[#ECECEC]" />
              </div>
              <DropdownField
                label="Duration"
                value={duration}
                placeholder="Set how long the job will last"
                options={durationOptions}
                onChange={setDuration}
                selectedColor="text-[#656565]"
                backgroundClass="bg-[#ECECEC]"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[12px] text-[#3D3D3D] font-normal">End Time</label>
                <span className="text-[11px] text-[#656565]">End time will be calculated automatically</span>
              </div>
              <input type="text" disabled className="w-full border border-gray-200 rounded-lg p-3 text-[14px] text-[#656565] outline-none bg-[#ECECEC]" />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-[16px] font-bold text-[#292929] mb-4">4. Location & Preferences</h2>
          <div className="space-y-5">
            <DropdownField
              label="City"
              value={locationCity}
              placeholder="City"
              options={cityOptions}
              onChange={setLocationCity}
              selectedColor="text-[#656565]"
              backgroundClass="bg-[#ECECEC]"
              suffixIcon={icons.map}
              plainSuffixIcon
            />
            <div>
              <label className="block text-[12px] text-[#3D3D3D] mb-1.5 font-normal">Suburb</label>
              <input type="text" placeholder="Suburb" className="w-full border border-gray-200 rounded-lg p-3 text-[14px] text-[#656565] outline-none bg-[#ECECEC]" />
            </div>
            <div>
              <label className="block text-[12px] text-[#3D3D3D] mb-3 font-normal">Looking for</label>
              <div className="flex gap-6">
                {['Male', 'Female', 'Any'].map((l) => (
                  <label key={l} onClick={() => setGender(l)} className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${gender === l ? 'border-[#E31F87]' : 'border-gray-300'}`}>
                      {gender === l && <div className="w-2.5 h-2.5 rounded-full bg-[#E31F87]"></div>}
                    </div>
                    <span className={`text-[14px] font-normal ${gender === l ? 'text-[#E31F87] font-bold' : 'text-[#3D3D3D]'}`}>{l}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-[16px] font-bold text-[#292929] mb-4">5. Pay</h2>
          <label className="block text-[12px] text-[#3D3D3D] mb-3 font-normal">Pay Rate</label>
          <div className="flex gap-6 mb-6">
            {['Hourly', 'Fixed'].map((r) => (
              <label key={r} onClick={() => setPayRate(r)} className="flex items-center gap-2 cursor-pointer">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${payRate === r ? 'border-[#E31F87]' : 'border-gray-300'}`}>
                  {payRate === r && <div className="w-2.5 h-2.5 rounded-full bg-[#E31F87]"></div>}
                </div>
                <span className={`text-[14px] font-normal ${payRate === r ? 'text-[#E31F87] font-bold' : 'text-[#3D3D3D]'}`}>{r}</span>
              </label>
            ))}
          </div>
          <div className="flex justify-between mb-1.5 text-[11px] text-[#656565] px-1">
            <span>Rate Offer</span>
            <span>Minimum rates apply to ensure fair pay</span>
          </div>
          <input type="text" className="w-full border border-gray-200 rounded-lg p-3 text-[14px] text-[#656565] outline-none bg-[#ECECEC]" />
        </div>

        <div className="mb-8">
          <h2 className="text-[16px] font-bold text-[#292929] mb-4">6. Travel</h2>
          <div className="space-y-4">
            {['No Travel Allowance', 'Will Pay for Uber Home'].map((l) => (
              <label key={l} className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                <span className="text-[14px] text-[#3D3D3D] font-medium">{l}</span>
              </label>
            ))}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-[#E31F87] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E31F87]"></div>
              </div>
              <div className="w-24 bg-[#F9F9F9] border border-gray-200 rounded-lg px-3 py-2 text-[14px] flex items-center gap-1 font-bold">
                <span className="text-[#656565]">$</span>
                <input type="text" className="bg-transparent outline-none w-full text-[#656565] font-medium" placeholder="0" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-10 mt-6">
          <button className="px-7 py-2.5 border border-[#E31F87] text-[#E31F87] text-[13px] font-bold rounded-lg hover:bg-[#f5f5f5] transition-colors">Preview Job</button>
          <button className="px-10 py-2.5 bg-gradient-to-r from-[#E61E4D] to-[#E31F87] text-white text-[13px] font-bold rounded-lg shadow-md hover:shadow-lg transition-all">Update</button>
        </div>
      </div>
    </div>
  );
}

export default App;
