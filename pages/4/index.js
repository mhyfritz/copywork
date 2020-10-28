import Head from "next/head";

export default function Copywork4() {
  return (
    <>
      <Head>
        <title>Copywork: Sidebar</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="h-screen antialiased bg-gray-50">
        <div className="grid justify-center h-full grid-flow-col gap-16 py-10">
          {/* sidebar 1 / 3 */}
          <nav className="flex flex-col h-full py-6 text-indigo-300 bg-indigo-900 rounded-lg shadow-lg">
            <div className="px-3">
              <div className="p-2">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 54 33"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between py-4 space-y-4">
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M14 4H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zM6 14V6h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M30 4h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zm-8 10V6h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M14 20H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2zM6 30v-8h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M30 20h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2zm-8 10v-8h8v8z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M16.33 5.05A10.95 10.95 0 115.39 16 11 11 0 0116.33 5.05m0-2.05a13 13 0 1013 13 13 13 0 00-13-13z"
                      />
                      <path
                        fill="currentColor"
                        d="M35 33.29l-7.37-7.42-1.42 1.41 7.37 7.42A1 1 0 1035 33.29z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* TODO: rethink dividers */}
              <div className="px-3">
                <div className="w-10 mx-2 border-t border-cool-gray-600"></div>
              </div>

              <div className="flex flex-col justify-between py-4 space-y-4">
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M33.71 17.29l-15-15a1 1 0 00-1.41 0l-15 15a1 1 0 001.41 1.41L18 4.41l14.29 14.3a1 1 0 001.41-1.41z"
                      />
                      <path
                        fill="currentColor"
                        d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 002 2h7V24h6v10h7a2 2 0 002-2V19.76l-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M13.71 12.59a1 1 0 00-1.39-.26l-6.53 4.45a1 1 0 000 1.65l6.53 4.45a1 1 0 101.13-1.65l-5.32-3.62L13.45 14a1 1 0 00.26-1.41z"
                        fill="currentColor"
                      />
                      <path
                        d="M30.21 16.78l-6.53-4.45A1 1 0 1022.55 14l5.32 3.63-5.32 3.63a1 1 0 001.13 1.65l6.53-4.45a1 1 0 000-1.65z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.94 9.83a.9.9 0 00-1.09.66l-3.44 13.8a.9.9 0 00.66 1.09h.22a.9.9 0 00.87-.68l3.44-13.81a.9.9 0 00-.66-1.06z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M32 5H4a2 2 0 00-2 2v22a2 2 0 002 2h28a2 2 0 002-2V7a2 2 0 00-2-2zM4 7h28v2.2H4zm0 22V10.8h28V29z"
                        fill="currentColor"
                      />
                      <path fill="currentColor" d="M17 23h6v2h-6z" />
                      <path
                        fill="currentColor"
                        d="M7 15.68l6.79 3.12L7 21.91v2.2l9.6-4.41v-1.81L7 13.48v2.2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M28 8H14a2 2 0 00-2 2v2h2v-2h14v10h-2v2h2a2 2 0 002-2V10a2 2 0 00-2-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M22 14H8a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V16a2 2 0 00-2-2zM8 26V16h14v10z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
                      />
                      <path
                        fill="currentColor"
                        d="M32.8 14.7l-2.8-.9-.6-1.5 1.4-2.6c.3-.6.2-1.4-.3-1.9l-2.4-2.4c-.5-.5-1.3-.6-1.9-.3l-2.6 1.4-1.5-.6-.9-2.8C21 2.5 20.4 2 19.7 2h-3.4c-.7 0-1.3.5-1.4 1.2L14 6c-.6.1-1.1.3-1.6.6L9.8 5.2c-.6-.3-1.4-.2-1.9.3L5.5 7.9c-.5.5-.6 1.3-.3 1.9l1.3 2.5c-.2.5-.4 1.1-.6 1.6l-2.8.9c-.6.2-1.1.8-1.1 1.5v3.4c0 .7.5 1.3 1.2 1.5l2.8.9.6 1.5-1.4 2.6c-.3.6-.2 1.4.3 1.9l2.4 2.4c.5.5 1.3.6 1.9.3l2.6-1.4 1.5.6.9 2.9c.2.6.8 1.1 1.5 1.1h3.4c.7 0 1.3-.5 1.5-1.1l.9-2.9 1.5-.6 2.6 1.4c.6.3 1.4.2 1.9-.3l2.4-2.4c.5-.5.6-1.3.3-1.9l-1.4-2.6.6-1.5 2.9-.9c.6-.2 1.1-.8 1.1-1.5v-3.4c0-.7-.5-1.4-1.2-1.6zm-.8 4.7l-3.6 1.1-.1.5-.9 2.1-.3.5 1.8 3.3-2 2-3.3-1.8-.5.3c-.7.4-1.4.7-2.1.9l-.5.1-1.1 3.6h-2.8l-1.1-3.6-.5-.1-2.1-.9-.5-.3-3.3 1.8-2-2 1.8-3.3-.3-.5c-.4-.7-.7-1.4-.9-2.1l-.1-.5L4 19.4v-2.8l3.4-1 .2-.5c.2-.8.5-1.5.9-2.2l.3-.5-1.7-3.3 2-2 3.2 1.8.5-.3c.7-.4 1.4-.7 2.2-.9l.5-.2L16.6 4h2.8l1.1 3.5.5.2c.7.2 1.4.5 2.1.9l.5.3 3.3-1.8 2 2-1.8 3.3.3.5c.4.7.7 1.4.9 2.1l.1.5 3.6 1.1v2.8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* TODO: rethink dividers */}
              <div className="px-3">
                <div className="w-10 mx-2 border-t border-cool-gray-600"></div>
              </div>

              <div className="flex flex-col justify-between pt-4 space-y-4">
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path fill="currentColor" d="M10 5.2h18v1.55H10z" />
                      <path
                        fill="currentColor"
                        d="M29 8H9.86A1.89 1.89 0 018 6a2 2 0 011.86-2H29a1 1 0 000-2H9.86A4 4 0 006 6a4.14 4.14 0 000 .49 1 1 0 000 .24V30a4 4 0 003.86 4H29a1 1 0 001-1V9.25v-.09-.09A1.07 1.07 0 0029 8zm-1 24H9.86A2 2 0 018 30V9.55a3.63 3.63 0 001.86.45H28z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <div className="p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.5c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 004.88-.68l5.53 3.52a1 1 0 001.54-.84v-6.73a13 13 0 004-9.27C34 8.78 26.82 2.5 18 2.5zm10.29 22.11a1 1 0 00-.32.73v5.34l-4.38-2.79a1 1 0 00-.83-.11 16 16 0 01-4.76.72c-7.72 0-14-5.38-14-12s6.28-12 14-12 14 5.38 14 12a11.08 11.08 0 01-3.71 8.11z"
                        fill="currentColor"
                      />
                      <path
                        d="M25 15.5H11a1 1 0 000 2h14a1 1 0 000-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.75 20.5h-7.5a1 1 0 000 2h7.5a1 1 0 000-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.28 12.5h13.44a1 1 0 000-2H11.28a1 1 0 000 2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* sidebar 2 / 3 */}
          <nav className="flex flex-col h-full py-6 text-indigo-300 bg-indigo-900 rounded-lg shadow-lg w-72">
            <div className="px-3">
              <div className="p-2">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 54 33"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between py-4 space-y-4">
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M14 4H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zM6 14V6h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M30 4h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zm-8 10V6h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M14 20H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2zM6 30v-8h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M30 20h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2zm-8 10v-8h8v8z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Workspaces
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M16.33 5.05A10.95 10.95 0 115.39 16 11 11 0 0116.33 5.05m0-2.05a13 13 0 1013 13 13 13 0 00-13-13z"
                      />
                      <path
                        fill="currentColor"
                        d="M35 33.29l-7.37-7.42-1.42 1.41 7.37 7.42A1 1 0 1035 33.29z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Search
                    </div>
                  </div>
                </div>
              </div>

              {/* TODO: rethink dividers */}
              <div className="px-3">
                <div className="w-10 mx-2 border-t border-cool-gray-600"></div>
              </div>

              <div className="flex flex-col justify-between py-4 space-y-4">
                <div className="px-3">
                  <div className="flex items-center p-2 bg-indigo-800 rounded-lg">
                    <svg
                      className="w-10 text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M33.71 17.29l-15-15a1 1 0 00-1.41 0l-15 15a1 1 0 001.41 1.41L18 4.41l14.29 14.3a1 1 0 001.41-1.41z"
                      />
                      <path
                        fill="currentColor"
                        d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 002 2h7V24h6v10h7a2 2 0 002-2V19.76l-2-2z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Home
                    </div>
                    <svg
                      className="w-6 mt-4 ml-10 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M30.74 15.19a13.66 13.66 0 00-6.87-3.83 26 26 0 00-5.87-.78v-5.3A3.4 3.4 0 0014.5 2 3.4 3.4 0 0011 5.28v10L9.4 13.7a3.77 3.77 0 00-5.28 0A3.67 3.67 0 003 16.33a3.6 3.6 0 001 2.56l4.66 5.52a11.53 11.53 0 001.43 4 10.12 10.12 0 002 2.54v1.92a1.07 1.07 0 001 1.08H27a1.07 1.07 0 001-1.08v-2.7a12.81 12.81 0 003-8.36v-6a1 1 0 00-.26-.62zM29 21.86a10.72 10.72 0 01-2.6 7.26 1.11 1.11 0 00-.4.72V32H14.14v-1.48a1 1 0 00-.44-.83 7.26 7.26 0 01-1.82-2.23 9.14 9.14 0 01-1.2-3.52 1 1 0 00-.23-.59l-4.92-5.82a1.7 1.7 0 010-2.42 1.76 1.76 0 012.47 0l3 3v3.14l2-1V5.28A1.42 1.42 0 0114.5 4 1.42 1.42 0 0116 5.28v11.8l2 .43v-4.92a24.27 24.27 0 012.51.18V18l1.6.35V13c.41.08.83.17 1.26.28a14.88 14.88 0 011.53.49v5.15l1.6.35V14.5a11.06 11.06 0 012.5 1.73z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M32 5H4a2 2 0 00-2 2v22a2 2 0 002 2h28a2 2 0 002-2V7a2 2 0 00-2-2zM4 7h28v2.2H4zm0 22V10.8h28V29z"
                        fill="currentColor"
                      />
                      <path fill="currentColor" d="M17 23h6v2h-6z" />
                      <path
                        fill="currentColor"
                        d="M7 15.68l6.79 3.12L7 21.91v2.2l9.6-4.41v-1.81L7 13.48v2.2z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Console
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M13.71 12.59a1 1 0 00-1.39-.26l-6.53 4.45a1 1 0 000 1.65l6.53 4.45a1 1 0 101.13-1.65l-5.32-3.62L13.45 14a1 1 0 00.26-1.41z"
                        fill="currentColor"
                      />
                      <path
                        d="M30.21 16.78l-6.53-4.45A1 1 0 1022.55 14l5.32 3.63-5.32 3.63a1 1 0 001.13 1.65l6.53-4.45a1 1 0 000-1.65z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.94 9.83a.9.9 0 00-1.09.66l-3.44 13.8a.9.9 0 00.66 1.09h.22a.9.9 0 00.87-.68l3.44-13.81a.9.9 0 00-.66-1.06z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Query
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M28 8H14a2 2 0 00-2 2v2h2v-2h14v10h-2v2h2a2 2 0 002-2V10a2 2 0 00-2-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M22 14H8a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V16a2 2 0 00-2-2zM8 26V16h14v10z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Sources
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
                      />
                      <path
                        fill="currentColor"
                        d="M32.8 14.7l-2.8-.9-.6-1.5 1.4-2.6c.3-.6.2-1.4-.3-1.9l-2.4-2.4c-.5-.5-1.3-.6-1.9-.3l-2.6 1.4-1.5-.6-.9-2.8C21 2.5 20.4 2 19.7 2h-3.4c-.7 0-1.3.5-1.4 1.2L14 6c-.6.1-1.1.3-1.6.6L9.8 5.2c-.6-.3-1.4-.2-1.9.3L5.5 7.9c-.5.5-.6 1.3-.3 1.9l1.3 2.5c-.2.5-.4 1.1-.6 1.6l-2.8.9c-.6.2-1.1.8-1.1 1.5v3.4c0 .7.5 1.3 1.2 1.5l2.8.9.6 1.5-1.4 2.6c-.3.6-.2 1.4.3 1.9l2.4 2.4c.5.5 1.3.6 1.9.3l2.6-1.4 1.5.6.9 2.9c.2.6.8 1.1 1.5 1.1h3.4c.7 0 1.3-.5 1.5-1.1l.9-2.9 1.5-.6 2.6 1.4c.6.3 1.4.2 1.9-.3l2.4-2.4c.5-.5.6-1.3.3-1.9l-1.4-2.6.6-1.5 2.9-.9c.6-.2 1.1-.8 1.1-1.5v-3.4c0-.7-.5-1.4-1.2-1.6zm-.8 4.7l-3.6 1.1-.1.5-.9 2.1-.3.5 1.8 3.3-2 2-3.3-1.8-.5.3c-.7.4-1.4.7-2.1.9l-.5.1-1.1 3.6h-2.8l-1.1-3.6-.5-.1-2.1-.9-.5-.3-3.3 1.8-2-2 1.8-3.3-.3-.5c-.4-.7-.7-1.4-.9-2.1l-.1-.5L4 19.4v-2.8l3.4-1 .2-.5c.2-.8.5-1.5.9-2.2l.3-.5-1.7-3.3 2-2 3.2 1.8.5-.3c.7-.4 1.4-.7 2.2-.9l.5-.2L16.6 4h2.8l1.1 3.5.5.2c.7.2 1.4.5 2.1.9l.5.3 3.3-1.8 2 2-1.8 3.3.3.5c.4.7.7 1.4.9 2.1l.1.5 3.6 1.1v2.8z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Settings
                    </div>
                  </div>
                </div>
              </div>

              {/* TODO: rethink dividers */}
              <div className="px-3">
                <div className="w-10 mx-2 border-t border-cool-gray-600"></div>
              </div>

              <div className="flex flex-col justify-between pt-4 space-y-4">
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path fill="currentColor" d="M10 5.2h18v1.55H10z" />
                      <path
                        fill="currentColor"
                        d="M29 8H9.86A1.89 1.89 0 018 6a2 2 0 011.86-2H29a1 1 0 000-2H9.86A4 4 0 006 6a4.14 4.14 0 000 .49 1 1 0 000 .24V30a4 4 0 003.86 4H29a1 1 0 001-1V9.25v-.09-.09A1.07 1.07 0 0029 8zm-1 24H9.86A2 2 0 018 30V9.55a3.63 3.63 0 001.86.45H28z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Documentation
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.5c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 004.88-.68l5.53 3.52a1 1 0 001.54-.84v-6.73a13 13 0 004-9.27C34 8.78 26.82 2.5 18 2.5zm10.29 22.11a1 1 0 00-.32.73v5.34l-4.38-2.79a1 1 0 00-.83-.11 16 16 0 01-4.76.72c-7.72 0-14-5.38-14-12s6.28-12 14-12 14 5.38 14 12a11.08 11.08 0 01-3.71 8.11z"
                        fill="currentColor"
                      />
                      <path
                        d="M25 15.5H11a1 1 0 000 2h14a1 1 0 000-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.75 20.5h-7.5a1 1 0 000 2h7.5a1 1 0 000-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.28 12.5h13.44a1 1 0 000-2H11.28a1 1 0 000 2z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Conversations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* sidebar 3 / 3 */}
          <nav className="flex flex-col h-full py-6 text-indigo-300 bg-indigo-900 rounded-lg shadow-lg w-72">
            <div className="px-3">
              <div className="p-2">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 54 33"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between py-4 space-y-4">
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M14 4H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zM6 14V6h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M30 4h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zm-8 10V6h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M14 20H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2zM6 30v-8h8v8z"
                      />
                      <path
                        fill="currentColor"
                        d="M30 20h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2zm-8 10v-8h8v8z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Workspaces
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M16.33 5.05A10.95 10.95 0 115.39 16 11 11 0 0116.33 5.05m0-2.05a13 13 0 1013 13 13 13 0 00-13-13z"
                      />
                      <path
                        fill="currentColor"
                        d="M35 33.29l-7.37-7.42-1.42 1.41 7.37 7.42A1 1 0 1035 33.29z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Search
                    </div>
                  </div>
                </div>
              </div>

              {/* TODO: rethink dividers */}
              <div className="px-3">
                <div className="w-10 mx-2 border-t border-cool-gray-600"></div>
              </div>

              <div className="flex flex-col justify-between py-4 space-y-4">
                <div className="relative px-3">
                  {/* TODO: rethink border */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400 rounded-r-full"></div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10 text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M33.71 17.29l-15-15a1 1 0 00-1.41 0l-15 15a1 1 0 001.41 1.41L18 4.41l14.29 14.3a1 1 0 001.41-1.41z"
                      />
                      <path
                        fill="currentColor"
                        d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 002 2h7V24h6v10h7a2 2 0 002-2V19.76l-2-2z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Home
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M32 5H4a2 2 0 00-2 2v22a2 2 0 002 2h28a2 2 0 002-2V7a2 2 0 00-2-2zM4 7h28v2.2H4zm0 22V10.8h28V29z"
                        fill="currentColor"
                      />
                      <path fill="currentColor" d="M17 23h6v2h-6z" />
                      <path
                        fill="currentColor"
                        d="M7 15.68l6.79 3.12L7 21.91v2.2l9.6-4.41v-1.81L7 13.48v2.2z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Console
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M13.71 12.59a1 1 0 00-1.39-.26l-6.53 4.45a1 1 0 000 1.65l6.53 4.45a1 1 0 101.13-1.65l-5.32-3.62L13.45 14a1 1 0 00.26-1.41z"
                        fill="currentColor"
                      />
                      <path
                        d="M30.21 16.78l-6.53-4.45A1 1 0 1022.55 14l5.32 3.63-5.32 3.63a1 1 0 001.13 1.65l6.53-4.45a1 1 0 000-1.65z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.94 9.83a.9.9 0 00-1.09.66l-3.44 13.8a.9.9 0 00.66 1.09h.22a.9.9 0 00.87-.68l3.44-13.81a.9.9 0 00-.66-1.06z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Query
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M28 8H14a2 2 0 00-2 2v2h2v-2h14v10h-2v2h2a2 2 0 002-2V10a2 2 0 00-2-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M22 14H8a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V16a2 2 0 00-2-2zM8 26V16h14v10z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Sources
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
                      />
                      <path
                        fill="currentColor"
                        d="M32.8 14.7l-2.8-.9-.6-1.5 1.4-2.6c.3-.6.2-1.4-.3-1.9l-2.4-2.4c-.5-.5-1.3-.6-1.9-.3l-2.6 1.4-1.5-.6-.9-2.8C21 2.5 20.4 2 19.7 2h-3.4c-.7 0-1.3.5-1.4 1.2L14 6c-.6.1-1.1.3-1.6.6L9.8 5.2c-.6-.3-1.4-.2-1.9.3L5.5 7.9c-.5.5-.6 1.3-.3 1.9l1.3 2.5c-.2.5-.4 1.1-.6 1.6l-2.8.9c-.6.2-1.1.8-1.1 1.5v3.4c0 .7.5 1.3 1.2 1.5l2.8.9.6 1.5-1.4 2.6c-.3.6-.2 1.4.3 1.9l2.4 2.4c.5.5 1.3.6 1.9.3l2.6-1.4 1.5.6.9 2.9c.2.6.8 1.1 1.5 1.1h3.4c.7 0 1.3-.5 1.5-1.1l.9-2.9 1.5-.6 2.6 1.4c.6.3 1.4.2 1.9-.3l2.4-2.4c.5-.5.6-1.3.3-1.9l-1.4-2.6.6-1.5 2.9-.9c.6-.2 1.1-.8 1.1-1.5v-3.4c0-.7-.5-1.4-1.2-1.6zm-.8 4.7l-3.6 1.1-.1.5-.9 2.1-.3.5 1.8 3.3-2 2-3.3-1.8-.5.3c-.7.4-1.4.7-2.1.9l-.5.1-1.1 3.6h-2.8l-1.1-3.6-.5-.1-2.1-.9-.5-.3-3.3 1.8-2-2 1.8-3.3-.3-.5c-.4-.7-.7-1.4-.9-2.1l-.1-.5L4 19.4v-2.8l3.4-1 .2-.5c.2-.8.5-1.5.9-2.2l.3-.5-1.7-3.3 2-2 3.2 1.8.5-.3c.7-.4 1.4-.7 2.2-.9l.5-.2L16.6 4h2.8l1.1 3.5.5.2c.7.2 1.4.5 2.1.9l.5.3 3.3-1.8 2 2-1.8 3.3.3.5c.4.7.7 1.4.9 2.1l.1.5 3.6 1.1v2.8z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Settings
                    </div>
                  </div>
                </div>
              </div>

              {/* TODO: rethink dividers */}
              <div className="px-3">
                <div className="w-10 mx-2 border-t border-cool-gray-600"></div>
              </div>

              <div className="flex flex-col justify-between pt-4 space-y-4">
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path fill="currentColor" d="M10 5.2h18v1.55H10z" />
                      <path
                        fill="currentColor"
                        d="M29 8H9.86A1.89 1.89 0 018 6a2 2 0 011.86-2H29a1 1 0 000-2H9.86A4 4 0 006 6a4.14 4.14 0 000 .49 1 1 0 000 .24V30a4 4 0 003.86 4H29a1 1 0 001-1V9.25v-.09-.09A1.07 1.07 0 0029 8zm-1 24H9.86A2 2 0 018 30V9.55a3.63 3.63 0 001.86.45H28z"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Documentation
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-indigo-800">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.5c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 004.88-.68l5.53 3.52a1 1 0 001.54-.84v-6.73a13 13 0 004-9.27C34 8.78 26.82 2.5 18 2.5zm10.29 22.11a1 1 0 00-.32.73v5.34l-4.38-2.79a1 1 0 00-.83-.11 16 16 0 01-4.76.72c-7.72 0-14-5.38-14-12s6.28-12 14-12 14 5.38 14 12a11.08 11.08 0 01-3.71 8.11z"
                        fill="currentColor"
                      />
                      <path
                        d="M25 15.5H11a1 1 0 000 2h14a1 1 0 000-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.75 20.5h-7.5a1 1 0 000 2h7.5a1 1 0 000-2z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.28 12.5h13.44a1 1 0 000-2H11.28a1 1 0 000 2z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="ml-4 text-xl font-medium text-white">
                      Conversations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
