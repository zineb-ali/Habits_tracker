import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "W22", value: 20 },
  { name: "2021", value: 210 },
  { name: "W1", value: 60 },
  { name: "W2", value: 35 },
  { name: "W3", value: 70 },
  { name: "W4", value: 20 },
];

export default function DailyAverageChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-lg">Daily Average</h2>
        <span className="text-sm text-green-600">+50% vs May</span>
      </div>
      <div className="text-xl font-bold mb-2">35 g</div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
