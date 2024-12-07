// components/CountdownStatic.tsx
const CountdownStatic = () => {
    return (
      <div className=" p-6 rounded-lg text-center w-[302px] max-w-md ml-14 pb-3">
        <div className="flex justify-center items-center space-x-4">
          {/* Days */}
          <div className="text-center">
          <span className="text-sm font-small text-gray-500">Days</span>

            <span className="block text-3xl font-bold text-gray-800">03</span>
          </div>
          <span className="text-3xl text-red-500">:</span>
          {/* Hours */}
          <div className="text-center">
          <span className="text-sm font-small text-gray-500">Hours</span>

            <span className="block text-3xl font-bold text-gray-800">23</span>
          </div>
          <span className="text-3xl text-red-500">:</span>
          {/* Minutes */}
          <div className="text-center">
          <span className="text-sm font-small text-gray-500">Minutes</span>

            <span className="block text-3xl font-bold text-gray-800">19</span>
          </div>
          <span className="text-3xl text-red-500">:</span>
          {/* Seconds */}
          <div className="text-center">
          <span className="text-sm font-small text-gray-500">Seconds</span>

            <span className="block text-3xl font-bold text-gray-800">56</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CountdownStatic;
  