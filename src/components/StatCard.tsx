
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  children: ReactNode;
}

const StatCard = ({ title, value, change, isPositive, children }: StatCardProps) => {
  return (
    <div className="bg-black bg-opacity-30 p-6 rounded-lg flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-300 text-lg">{title}</h3>
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-gray-400">
          <path 
            fill="currentColor" 
            d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM5 5V19H19V5H5Z"
          />
        </svg>
      </div>
      
      <div className="mb-4">
        <h2 className="text-white text-2xl font-bold">{value}</h2>
        <p className={`text-sm ${isPositive ? 'text-finmate-green' : 'text-red-500'}`}>
          {isPositive ? '+' : '-'}{change} from last month
        </p>
      </div>
      
      <div className="mt-auto">
        {children}
      </div>
    </div>
  );
};

export default StatCard;
