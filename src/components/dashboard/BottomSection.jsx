import React, { useEffect, useState } from "react";
import { DollarCircle } from "@styled-icons/boxicons-regular/DollarCircle";
import { InformationCircle } from "@styled-icons/heroicons-outline/InformationCircle";

const BottomSection = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      if (!response.ok) {
        throw new Error("Response not OK");
      }
      const fetchedData = await response.json();
      const modifiedBpi = {};
      for (const currencyCode in fetchedData.bpi) {
        const currencyData = fetchedData.bpi[currencyCode];
        const intratefloat = currencyData.rate_float;
        const stsymbol = currencyData.symbol;
        const intrate = parseFloat(currencyData.rate.replace(',', ''));
        const percentageChange = (((intrate - intratefloat) / intratefloat) * 100000000).toFixed(2) + '%'; 
        currencyData.rate = (intrate / 100000).toFixed(2);
        currencyData.rate_float = percentageChange;
        modifiedBpi[currencyCode] = currencyData;
      }

      setData(Object.values(modifiedBpi));

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <p className="text-white text-xl mb-4">Assets</p>
      <div className="flex flex-row gap-4 overflow-x-scroll w-[100%]">
        {!loading ?
          data.map((item) => (
            <div className="bg-[#171717] min-w-48 h-auto rounded-lg p-2" key={item.code}>
              <div className="flex flex-row items-center mb-3">
                <DollarCircle className="h-8" />
                <p className="text-xs ml-2">{item.code}</p>
              </div>
              <div className="flex flex-row text-[12px] mb-3 leading-4 text-[#4F4F4F]">
                {item.description}
              </div>
              <div className="flex flex-row justify-between items-center mb-3">
                <p className={`text-lg`}>{item.rate} <span dangerouslySetInnerHTML={{ __html: item.symbol }}></span></p>

                <p className="text-[10px] text-[#4F4F4F]">
  {item.rate_float.charAt(0) === '-' ? item.rate_float : `+${item.rate_float}`}
</p>


              </div>
              <div className="flex flex-row justify-between items-center">
                <InformationCircle className="text-[#1B9A59] h-6" />
                <button
                  type="submit"
                  className="h-7 w-14 p-1 bg-[#1B9A59] text-xs rounded"
                >
                  Trade
                </button>
              </div>
            </div>
          ))
          : <p>Loading...</p>
        }
        {!loading ?
          data.map((item) => (
            <div className="bg-[#171717] min-w-48 rounded-lg p-2" key={item.code}>
              <div className="flex flex-row items-center mb-3">
                <DollarCircle className="h-8" />
                <p className="text-xs ml-2">{item.code}</p>
              </div>
              <div className="flex flex-row text-[12px] mb-3 leading-4 text-[#4F4F4F]">
                {item.description}
              </div>
              <div className="flex flex-row justify-between items-center mb-3">
                <p className={`text-lg`}>{item.rate} <span dangerouslySetInnerHTML={{ __html: item.symbol }}></span></p>

                <p className="text-[10px] text-[#4F4F4F]">
  {item.rate_float.charAt(0) === '-' ? item.rate_float : `+${item.rate_float}`}
</p>


              </div>
              <div className="flex flex-row justify-between items-center">
                <InformationCircle className="text-[#1B9A59] h-6" />
                <button
                  type="submit"
                  className="h-7 w-14 p-1 bg-[#1B9A59] text-xs rounded"
                >
                  Trade
                </button>
              </div>
            </div>
          ))
          : <p>Loading...</p>
        }
      </div>
    </div>
  );
};

export default BottomSection;
