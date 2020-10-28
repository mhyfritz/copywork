import Head from "next/head";

const highlights = [
  {
    title: "Quick and free sign-up",
    description: "Enter your email address to create an account.",
  },
  {
    title: "Cross-platform solution",
    description:
      "Preview your newsletters on any device before sending them out.",
  },
  {
    title: "Start sending emails",
    description: "Use our API or pick our pre-bulit templates.",
  },
];

export default function Copywork3() {
  return (
    <>
      <Head>
        <title>Copywork: Sign Up UI Design</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="flex min-h-screen p-16 antialiased bg-blue-50"
        style={{ fontFamily: "Mulish, sans-serif" }}
      >
        <div className="flex-1 p-8 bg-white rounded-lg shadow-lg">
          <div className="inline-grid h-full gap-8 xl:gap-16 2xl:gap-24 md:grid-cols-2">
            <div className="flex items-center p-6 rounded-l-lg rounded-r-lg sm:px-16 sm:py-16 md:py-0 md: md:max-w-xl md:rounded-r-none bg-gradient-to-br from-purple-400 to-purple-500">
              {/* TODO rethink margin-top */}
              <div className="grid gap-8 lg:-mt-48 sm:w-72">
                {highlights.map((highlight) => (
                  <HighlightSection
                    title={highlight.title}
                    description={highlight.description}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="space-y-8 md:max-w-lg">
                <h1 className="text-2xl font-semibold leading-snug text-cool-gray-800">
                  Create your account
                </h1>
                <form>
                  <div className="space-y-8">
                    <label className="block">
                      <span className="font-bold text-cool-gray-700">
                        Email
                      </span>
                      <input
                        type="email"
                        className="block w-full p-3 mt-2 form-input placeholder-cool-gray-500"
                        placeholder="Enter your email address"
                      />
                    </label>
                    <label className="block">
                      <span className="font-bold text-cool-gray-700">
                        Full name
                      </span>
                      <input
                        type="text"
                        className="block w-full p-3 mt-2 form-input placeholder-cool-gray-500"
                        placeholder="Enter your full name"
                      />
                    </label>
                    <label className="block">
                      <span className="font-bold text-cool-gray-700">
                        Password
                      </span>
                      <input
                        type="password"
                        className="block w-full p-3 mt-2 form-input placeholder-cool-gray-500"
                        placeholder="Type to create a password"
                      />
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="p-3 form-checkbox" />
                      <span className="ml-2 font-bold text-cool-gray-500">
                        Get updates and notifications about our product.
                      </span>
                    </label>
                    <button
                      type="button"
                      className="w-full px-2 py-4 font-semibold text-center text-white bg-purple-500 rounded-md shadow-md focus:bg-purple-600 hover:bg-purple-600"
                    >
                      Type to create a password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html {
          font-size: 12px;
        }

        @screen lg {
          html {
            font-size: 14px;
          }
        }

        @screen xl {
          html {
            font-size: 16px;
          }
        }
      `}</style>

      <style jsx>{`
        .form-input::placeholder {
          @apply font-bold;
        }
      `}</style>
    </>
  );
}

function HighlightSection({ title, description }) {
  return (
    <div className="grid gap-2">
      <div>
        <span className="flex items-center justify-center w-8 h-8 bg-white bg-opacity-25 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div className="text-xl font-bold leading-snug text-white">{title}</div>
      <div className="font-bold leading-snug text-white ">{description}</div>
    </div>
  );
}
