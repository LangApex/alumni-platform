"use client";

import { 
  Users, 
  UserCheck, 
  Calendar, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Activity
} from "lucide-react";

const stats = [
  {
    label: "Total Alumni",
    value: "2,543",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "blue",
  },
  {
    label: "Active Members",
    value: "1,892",
    change: "+3.2%",
    trend: "up",
    icon: UserCheck,
    color: "emerald",
  },
  {
    label: "Upcoming Events",
    value: "14",
    change: "-2",
    trend: "down",
    icon: Calendar,
    color: "amber",
  },
  {
    label: "Engagement Rate",
    value: "68.4%",
    change: "+4.1%",
    trend: "up",
    icon: Activity,
    color: "indigo",
  },
];

const recentAlumni = [
  { name: "Alex Johnson", year: "2023", major: "Computer Science", status: "Active", image: "AJ" },
  { name: "Sarah Miller", year: "2018", major: "Marketing", status: "Pending", image: "SM" },
  { name: "David Chen", year: "2020", major: "Engineering", status: "Active", image: "DC" },
  { name: "Elena Rodriguez", year: "2022", major: "Design", status: "Active", image: "ER" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              </div>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity / Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Registration Growth</h2>
            <select className="text-sm border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center border border-dashed border-slate-200">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-400 text-sm italic">Analytics visualization will appear here</p>
            </div>
          </div>
        </div>

        {/* Recent Alumni */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">New Members</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {recentAlumni.map((alumnus) => (
              <div key={alumnus.name} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-sm">
                    {alumnus.image}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{alumnus.name}</p>
                    <p className="text-xs text-slate-500">{alumnus.major} • {alumnus.year}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  alumnus.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {alumnus.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Events Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-800">Upcoming Events</h2>
          <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-slate-400" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Event Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Attendees</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {[
                { name: "Annual Alumni Gala", date: "June 15, 2026", loc: "Grand Hall", att: "120/150", status: "Selling Out" },
                { name: "Tech Workshop 2026", date: "April 10, 2026", loc: "Innovation Lab", att: "45/50", status: "Almost Full" },
                { name: "Career Networking Night", date: "May 22, 2026", loc: "Online / Coffee House", att: "210/300", status: "Open" },
              ].map((event) => (
                <tr key={event.name} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800">{event.name}</td>
                  <td className="px-6 py-4 text-slate-600">{event.date}</td>
                  <td className="px-6 py-4 text-slate-600">{event.loc}</td>
                  <td className="px-6 py-4 text-slate-600">{event.att}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium border border-blue-100">
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
