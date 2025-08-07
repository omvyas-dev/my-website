import React from 'react';
import bg from '../images/bg.svg'
const articles = [
  {
    id: 1,
    title: 'How do I create a task from a support ticket?',
    date: '5 months ago',
    description: 'Some support tickets may require additional work in order for them to be marked as resolved. If you use Task Planner as a feature within Wurkforce, you can create a new task directly from a Support Ticket...',
    tags: ['Wurkforce', 'Wurkforce'],
  },
  {
    id: 2,
    title: 'How do I close my support ticket?',
    date: '5 months ago',
    description: 'Some support tickets may require additional work in order for them to be marked as resolved...',
    tags: ['Wurkforce', 'Wurkforce'],
  },
  {
    id: 3,
    title: 'How do I submit feedback for support tickets?',
    date: '5 months ago',
    description: 'Some support tickets may require additional work in order for them to be marked as resolved...',
    tags: ['Wurkforce', 'Wurkforce'],
  },
  {
    id: 4,
    title: 'How do I view my support tickets?',
    date: '5 months ago',
    description: 'Some support tickets may require additional work in order for them to be marked as resolved...',
    tags: ['Wurkforce', 'Wurkforce'],
  },

];

export default function Cards() {
  return (
    <div className="flex flex-col w-full bg-[#F0F2F6] min-h-screen h-[259px]">
      {/* Top Header */}
      
       <div className="relative text-center">
  <img src={bg} alt="Background" className="w-full h-auto" />

  {/* Overlayed text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    <h2 className="text-sm tracking-widest" style={{color:"black"}}>Knowledge Base</h2>
    <h1 className="text-3xl font-bold mt-1 "style={{color:"black"}}>How can we help?</h1>
<form className="w-full max-w-3xl mx-auto mb-6 mt-2 px-4">
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[80px] h-[40px]">Search</button>
    </div>
</form>
 
  </div>

 <br/><br/>

      {/*searchbar */}
      

</div>
     
        

      {/* Tabs */}
      <div className="flex justify-center space-x-6 border-b border-gray-300 h-[72px] bg-white text-base pl-8 gap-12">
        {['Workforce', 'Training', 'HR', 'Project Management', 'Tracker'].map((tab) => (
          <button key={tab} className="text-gray-600 font-medium hover:text-teal-600 relative">
            {tab}
            <div className={`h-1 w-8 bg-teal-600 rounded-full mt-2 mx-auto ${tab === 'Workforce' ? '' : 'invisible'}`} />
          </button>
        ))}
        <div className="ml-auto pr-6 hidden md:block">
          <button className="flex items-center gap-2 text-sm text-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            Community
          </button>
        </div>
      </div>

      {/* Article Cards */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-5 rounded-md shadow-sm">
            <h3 className="font-semibold text-gray-800 text-[16px]">{article.title}</h3>
            <p className="text-xs text-gray-400 mb-2">{article.date}</p>
            <p className="text-sm text-gray-600 mb-3">{article.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-500 hover:bg-gray-100">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-left pl-8 text-xs text-gray-500 pb-6">
        <p>
          <a href="#" className="underline">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="underline">
            Privacy Notice
          </a>
        </p>
      </footer>
    </div>
  );
}
