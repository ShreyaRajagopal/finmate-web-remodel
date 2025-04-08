
const Calendar = () => {
  const month = "April 2025";
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Generate dates for April 2025
  const dates = [
    [30, 31, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 1, 2, 3]
  ];

  return (
    <div className="bg-black bg-opacity-30 rounded-lg p-4 text-white w-full max-w-sm my-8">
      <div className="flex justify-between items-center mb-4">
        <button className="p-1 rounded-full hover:bg-gray-800">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="text-lg font-medium">{month}</div>
        
        <button className="p-1 rounded-full hover:bg-gray-800">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {days.map(day => (
          <div key={day} className="text-gray-400 text-xs py-1">{day}</div>
        ))}
      </div>
      
      {dates.map((week, weekIndex) => (
        <div key={weekIndex} className="grid grid-cols-7 gap-1">
          {week.map((date, dateIndex) => {
            const isPreviousOrNextMonth = (weekIndex === 0 && date > 7) || (weekIndex === 4 && date < 7);
            const isToday = date === 8 && weekIndex === 1;
            
            return (
              <button
                key={`${weekIndex}-${dateIndex}`}
                className={`
                  aspect-square rounded-full flex items-center justify-center text-sm
                  ${isPreviousOrNextMonth ? 'text-gray-600' : 'text-white'}
                  ${isToday ? 'bg-finmate-blue' : 'hover:bg-gray-800'}
                `}
              >
                {date}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
