import { useState } from "react";
import { data } from "../../data/section4Data";
const Section4 = () => {
  const [selectedOption, setSelectedOption] = useState("All Pages");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="flex flex-col rounded-2xl bg-white mx-8">
      <div className="flex flex-row   justify-between">
        <div className="flex flex-row my-3 ms-2">
          <select
            id="pageFilter"
            className="px-8 py-2 rounded-lg border-none bg-white"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="All Pages">PAGEVIEWS</option>
            <option value="Page 1">Page 1</option>
            <option value="Page 2">Page 2</option>
          </select>
        </div>
        <div className="flex flex-row justify-around my-3">
          <ul className="flex flex-row">
            <li className="border-[1px] px-4 py-1 rounded-s-lg hover:bg-blue-200 transition-all ease-in-out duration-300 ">
              Today
            </li>
            <li className="border-y-[1px] px-4 py-1 hover:bg-blue-200 transition-all ease-in-out duration-300">
              Yesterday
            </li>
            <li className="border-[1px] px-4 py-1 hover:bg-blue-200 transition-all ease-in-out duration-300">
              Week
            </li>
            <li className="border-y-[1px] px-4 py-1 hover:bg-blue-200 transition-all ease-in-out duration-300">
              Month
            </li>
            <li className="border-[1px] px-4 py-1 hover:bg-blue-200 transition-all ease-in-out duration-300">
              Quarter
            </li>
            <li className="border-y-[1px] px-4 py-1 rounded-e-lg hover:bg-blue-200 transition-all ease-in-out duration-300">
              Year
            </li>
          </ul>
          <select
            id="pageFilter"
            className="px-8 py-2 rounded-lg border-[1px] ms-3 bg-white"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="All Pages">Select Period</option>
            <option value="Page 1">Page 1</option>
            <option value="Page 2">Page 2</option>
          </select>
        </div>
      </div>
      {/* Table  */}
      <div className=" w-full border-t-2 p-4">
        <table className="table-auto w-full text-right">
          <thead className="text-lg ">
            <tr>
              <th className="font-normal">Page</th>
              <th className="font-normal">
                <div className="flex flex-col w-full text-right items-end">
                  Pageviews <span className="text-xl font-medium">356,928</span>{" "}
                  <span>
                    <img src="/Chart.png" alt="" className="w-full h-8" />
                  </span>
                </div>
              </th>
              <th className="font-normal">
                <div className="flex flex-col w-full text-right items-end">
                  Unique pageviews
                  <span className="text-xl font-medium">275,588</span>{" "}
                  <span>
                    <img src="/Chart (2).png" alt="" className="w-full h-8" />
                  </span>
                </div>
              </th>
              <th className="font-normal">
                <div className="flex flex-col w-full text-right items-end">
                  Avg. time on page
                  <span className="text-xl font-medium">356,928</span>{" "}
                  <span>
                    <img src="/Chart (3).png" alt="" className="w-full h-8" />
                  </span>
                </div>
              </th>
              <th className="font-normal">
                <div className="flex flex-col w-full text-right items-end">
                  Extrances
                  <span className="text-xl font-medium">356,928</span>{" "}
                  <span>
                    <img src="/Chart (4).png" alt="" className="w-full h-8" />
                  </span>
                </div>
              </th>
              <th className="font-normal">
                <div className="flex flex-col w-full text-right items-end">
                  % Exit
                  <span className="text-xl font-medium">356,928</span>{" "}
                  <span>
                    <img src="/Chart (5).png" alt="" className="w-full h-8" />
                  </span>
                </div>
              </th>
              <th className="font-normal">
                <div className="flex flex-col w-full text-right items-end">
                  Page value
                  <span className="text-xl font-medium">356,928</span>{" "}
                  <span>
                    <img src="/Chart 1.png" alt="" className="w-full h-8" />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="border-t-2">
                <td className="text-left py-2">{d.page}</td>
                <td className="flex flex-row justify-end py-2">
                  <div className="flex flex-row justify-around w-3/4">
                    {d.pageViews}
                    <span className="text-gray-500 ms-0">
                      {" "}
                      ({d.pageViewsChange}%)
                    </span>
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-end">
                    <div className="flex flex-row justify-around w-2/3">
                      {d.uniquePageViews}
                      <span className="text-gray-500 ms-0">
                        ({d.uniquePageViewsChange}%)
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-2">{d.avgTimeOnPage}</td>
                <td className="py-2">
                  <div className="flex flex-row justify-end">
                    <div className="flex flex-row justify-around w-3/4">
                      {d.entrances}
                      <span className="text-gray-500 ms-0">
                        ({d.entrancesChange}%)
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-2">{d.exit}</td>
                <td className="py-2">
                  <div className="flex flex-row justify-end">
                    <div className="flex flex-row justify-around w-2/3">
                      {d.pageValue}
                      <span className="text-gray-500 ms-0">
                        ({d.pageValueChange}%)
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Section4;
