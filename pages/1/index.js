import CalendarIcon from "heroicons/outline/calendar.svg";
import ChartSquareBarIcon from "heroicons/outline/chart-square-bar.svg";
import CogIcon from "heroicons/outline/cog.svg";
import Head from "next/head";
import HomeIcon from "heroicons/outline/home.svg";
import InboxIcon from "heroicons/outline/inbox.svg";
import UserGroupIcon from "heroicons/outline/user-group.svg";

export default function Copywork1() {
  return (
    <>
      <Head>
        <title>Copywork: Sidebar navigation</title>
      </Head>

      <div className="h-screen antialiased bg-gray-300">
        <div className="grid justify-center h-full grid-flow-col gap-16 py-10">
          <Sidebar />
          <Sidebar variant="gray" />
          <Sidebar variant="indigo" />
        </div>
      </div>
    </>
  );
}

function Sidebar({ variant }) {
  const { bg1, bg2, text1, text2 } = colors(variant);

  return (
    <nav
      className={`flex flex-col h-full p-2 ${bg1} ${text1} rounded-lg shadow w-72`}
    >
      <ul className="font-medium">
        <li className={`flex items-center p-2 ${text2} ${bg2} rounded-md`}>
          <HomeIcon className="h-6" />
          <span className="ml-3">Dashboard</span>
        </li>
        <li className="flex items-center p-2">
          <UserGroupIcon className="h-6" />
          <span className="ml-3">Team</span>
        </li>
        <li className="flex items-center p-2">
          <CalendarIcon className="h-6" />
          <span className="flex-1 ml-3">Calendar</span>
          <span
            className={`flex items-center justify-center h-6 px-3 text-sm font-semibold ${bg2} rounded-full`}
          >
            4
          </span>
        </li>
        <li className="flex items-center p-2">
          <InboxIcon className="h-6" />
          <span className="flex-1 ml-3">Documents</span>
          <span
            className={`flex items-center justify-center h-6 px-3 text-sm font-semibold ${bg2} rounded-full`}
          >
            5
          </span>
        </li>
        <li className="flex items-center p-2">
          <ChartSquareBarIcon className="h-6" />
          <span className="ml-3">Reports</span>
        </li>
      </ul>

      <div className="flex-1 mt-8 font-medium">
        <h2 className="px-3 text-xs tracking-wider uppercase">Projects</h2>
        <ul className="mt-2">
          <li className="px-3 py-2">Website redesign</li>
          <li className="px-3 py-2">GraphQL API</li>
          <li className="px-3 py-2">Customer migration guides</li>
          <li className="px-3 py-2">Profit sharing program</li>
        </ul>
      </div>

      <div className="flex items-center p-3 font-medium">
        <img
          className="h-10 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.3&w=256&h=256&q=80"
          alt=""
        />
        <div className="flex-1 ml-4">
          <div className={`${text2}`}>Dianne Robertson</div>
          <div className="text-sm">View Profile</div>
        </div>
        <CogIcon className="h-6" />
      </div>
    </nav>
  );
}

function colors(variant) {
  switch (variant) {
    case "gray":
      return {
        bg1: "bg-gray-800",
        bg2: "bg-gray-900",
        text1: "text-gray-300",
        text2: "text-gray-100",
      };
    case "indigo":
      return {
        bg1: "bg-indigo-800",
        bg2: "bg-indigo-900",
        text1: "text-indigo-300",
        text2: "text-indigo-100",
      };
    default:
      return {
        bg1: "bg-white",
        bg2: "bg-gray-100",
        text1: "text-gray-500",
        text2: "text-gray-800",
      };
  }
}
