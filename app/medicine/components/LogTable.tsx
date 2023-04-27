import EditAndDelete from "./EditAndDelete";

interface propType {
  data: { name: string; dosage: number; frequency: number };
}

export default function LogTable({ data }: propType) {
  return (
    <div className="flex items-center justify-between px-16">
      <h1 className="text-gray-500">{data.name}</h1>
      <h1 className="text-gray-500">{data.dosage}</h1>
      <h1 className="text-gray-500 flex gap-12">
        <p>{data.frequency}</p>
        <EditAndDelete data={data} />
      </h1>
    </div>
  );
}
