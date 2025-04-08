
import React, { useMemo } from "react";

interface SavingsContributionChartProps {
  contributions: { [key: string]: number };
}

export const SavingsContributionChart: React.FC<SavingsContributionChartProps> = ({ contributions }) => {
  // Generate calendar data
  const calendarData = useMemo(() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Mon', 'Wed', 'Fri'];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Create the calendar grid
    const calendar: { date: string; amount: number | null }[][] = [];
    
    // For each month
    for (let month = 0; month < 12; month++) {
      const monthData: { date: string; amount: number | null }[] = [];
      
      // For each day in the week (Mon, Wed, Fri)
      for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        // Add all days in the month
        for (let day = 1; day <= 7; day++) {
          // Add entry for each possible date in this month
          const date = new Date(currentYear, month, day);
          const dateStr = date.toISOString().split('T')[0];
          
          monthData.push({
            date: dateStr,
            amount: contributions[dateStr] || null,
          });
        }
      }
      
      calendar.push(monthData);
    }
    
    return { months, days, calendar };
  }, [contributions]);

  // Determine color based on contribution amount
  const getColorClass = (amount: number | null) => {
    if (amount === null) return "bg-[#1c2049]"; // Empty cell
    if (amount < 30) return "bg-[#5b9e47]"; // Low - light green
    if (amount < 70) return "bg-[#388e3c]"; // Medium - medium green
    return "bg-[#1d5524]"; // High - dark green
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="text-sm text-gray-400 mb-2 flex">
          <div className="w-12"></div> {/* Empty corner for alignment */}
          {calendarData.months.map((month) => (
            <div key={month} className="w-14 text-center">
              {month}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col space-y-4">
          {calendarData.days.map((day, dayIndex) => (
            <div key={day} className="flex items-center">
              <div className="w-12 text-gray-400 text-sm text-right pr-2">
                {day}
              </div>
              <div className="flex space-x-1">
                {calendarData.months.map((month, monthIndex) => (
                  <div key={`${month}-${day}`} className="flex space-x-1">
                    {Array.from({ length: 7 }).map((_, i) => {
                      const cellIndex = dayIndex * 7 + i;
                      const cellData = calendarData.calendar[monthIndex]?.[cellIndex];
                      
                      return (
                        <div
                          key={`${month}-${day}-${i}`}
                          className={`w-4 h-4 rounded-sm ${getColorClass(cellData?.amount)} transition-colors hover:opacity-75`}
                          title={cellData?.amount ? `${new Date(cellData.date).toLocaleDateString()}: $${cellData.amount}` : "No contribution"}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-end">
          <div className="text-sm text-gray-400 mr-2">Less</div>
          <div className="w-4 h-4 rounded-sm bg-[#1c2049]"></div>
          <div className="w-4 h-4 rounded-sm bg-[#5b9e47] mx-1"></div>
          <div className="w-4 h-4 rounded-sm bg-[#388e3c] mx-1"></div>
          <div className="w-4 h-4 rounded-sm bg-[#1d5524]"></div>
          <div className="text-sm text-gray-400 ml-2">More</div>
        </div>
      </div>
    </div>
  );
};
