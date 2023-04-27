import LogTable from "./components/LogTable";
import Link from "next/link";
import AddButton from "./components/AddButton";

export default function Page() {
  return (
    <>
      <Link
        href="/"
        className="fixed top-4 left-4 text-xl shadow text-white bg-red-500 px-4 py-1.5 rounded-md cursor-pointer"
      >
        Logout
      </Link>
      <section className="container mx-auto px-36 py-36 h-screen">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-4 place-items-center pb-4 border-b-2 border-gray-300 mb-8">
            <h1 className="text-lg font-semibold tracking-widest text-gray-700">
              Medicine
            </h1>
            <h1 className="text-lg font-semibold tracking-widest text-gray-700">
              Dosage
            </h1>
            <h1 className="text-lg font-semibold tracking-widest text-gray-700">
              Frequency
            </h1>
          </div>

          {[1, 2, 3, 4].map((val, idx) => {
            return (
              <LogTable
                key={idx}
                data={{
                  name: `test ${val}`,
                  dosage: val,
                  frequency: val,
                }}
              />
            );
          })}
        </div>
      </section>

      <AddButton />
    </>
  );
}
