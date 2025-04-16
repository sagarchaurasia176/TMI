import React, { useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Code,
  BarChart,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Search,
  Settings,
  ChevronRight,
  Home,
  BookOpen,
  Database,
  BarChart2,
  PieChart,
  Award,
  List,
  Layout,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [upcomingInterviews, setUpcomingInterviews] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      date: "Apr 15, 2025",
      time: "10:00 AM",
      level: "Intermediate",
      stack: "React"
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "InnovateSoft",
      date: "Apr 18, 2025",
      time: "2:30 PM",
      level: "Advanced",
      stack: "MERN"
    },
  ]);

  const [pastInterviews, setPastInterviews] = useState([
    {
      id: 1,
      title: "JavaScript Developer",
      company: "WebSolutions",
      date: "Apr 8, 2025",
      score: 85,
      status: "Passed"
    },
    {
      id: 2,
      title: "React Native Developer",
      company: "MobileApps",
      date: "Apr 5, 2025",
      score: 78,
      status: "Passed"
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "DataSystems",
      date: "Apr 1, 2025",
      score: 62,
      status: "Failed"
    },
  ]);

  const [performanceStats, setPerformanceStats] = useState({
    interviewsCompleted: 12,
    averageScore: 76,
    passRate: 75,
    topScore: 92
  });

  const [skills, setSkills] = useState([
    { name: "React", proficiency: 85 },
    { name: "JavaScript", proficiency: 78 },
    { name: "Node.js", proficiency: 65 },
    { name: "System Design", proficiency: 60 },
    { name: "Data Structures", proficiency: 72 }
  ]);

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-slate-800">
        <div className="flex">
          <Link className="flex items-center" to="/">
            <Code className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-lg font-bold">TMI</span>
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="search"
              placeholder="Search interviews, skills, topics..."
              className="w-full bg-slate-800 border border-slate-700 rounded-md py-1.5 pl-8 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <nav className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-slate-700">US</AvatarFallback>
          </Avatar>
        </nav>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-800 h-[calc(100vh-3.5rem)] p-4 hidden md:block">
          <nav className="space-y-1">
            <Link to="/" className="flex items-center px-3 py-2 bg-slate-800 rounded-md text-sm font-medium text-white">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
            <Link to="/LanguageSelector" className="flex items-center px-3 py-2 text-slate-400 hover:bg-slate-800 rounded-md text-sm font-medium">
              <Calendar className="mr-2 h-4 w-4" />
              Interviews
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 text-slate-400 hover:bg-slate-800 rounded-md text-sm font-medium">
              <BookOpen className="mr-2 h-4 w-4" />
              Learning Resources
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 text-slate-400 hover:bg-slate-800 rounded-md text-sm font-medium">
              <Database className="mr-2 h-4 w-4" />
              Question Bank
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 text-slate-400 hover:bg-slate-800 rounded-md text-sm font-medium">
              <BarChart2 className="mr-2 h-4 w-4" />
              Analytics
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 text-slate-400 hover:bg-slate-800 rounded-md text-sm font-medium">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </nav>

          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Subscription
            </h3>
            <div className="mt-2 px-3 py-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-800">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Pro Plan</span>
                <Badge className="bg-blue-600">Active</Badge>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">8/12 interviews</span>
                  <span className="text-blue-400">67%</span>
                </div>
                <Progress value={67} className="h-1.5 bg-slate-700" />
              </div>
              <Button className="mt-3 w-full text-xs h-8 bg-blue-600 hover:bg-blue-700">
                Upgrade Plan
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="flex flex-col space-y-6">
            {/* Welcome Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
                <p className="text-slate-400 mt-1">Your technical interview preparation dashboard</p>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Schedule Interview
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Interviews Completed</p>
                    <h3 className="text-2xl font-bold mt-1">{performanceStats.interviewsCompleted}</h3>
                  </div>
                  <div className="p-2 bg-blue-900/40 rounded-lg">
                    <BarChart className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div className="mt-3 text-xs text-green-400 flex items-center">
                  <span>+3 this month</span>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Average Score</p>
                    <h3 className="text-2xl font-bold mt-1">{performanceStats.averageScore}%</h3>
                  </div>
                  <div className="p-2 bg-purple-900/40 rounded-lg">
                    <PieChart className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
                <div className="mt-3 text-xs text-green-400 flex items-center">
                  <span>+4.5% improvement</span>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Pass Rate</p>
                    <h3 className="text-2xl font-bold mt-1">{performanceStats.passRate}%</h3>
                  </div>
                  <div className="p-2 bg-green-900/40 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                </div>
                <div className="mt-3 text-xs text-green-400 flex items-center">
                  <span>Above industry average</span>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Top Score</p>
                    <h3 className="text-2xl font-bold mt-1">{performanceStats.topScore}%</h3>
                  </div>
                  <div className="p-2 bg-yellow-900/40 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-400" />
                  </div>
                </div>
                <div className="mt-3 text-xs text-blue-400 flex items-center">
                  <span>System Design Interview</span>
                </div>
              </div>
            </div>

            {/* Upcoming Interviews and Skill Assessment */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upcoming Interviews */}
              <div className="lg:col-span-2 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
                  <h2 className="font-semibold">Upcoming Interviews</h2>
                  <Button variant="ghost" size="sm" className="text-blue-400 h-8 hover:text-blue-300">
                    View All
                  </Button>
                </div>
                
                <div className="p-4">
                  {upcomingInterviews.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingInterviews.map((interview) => (
                        <div key={interview.id} className="flex items-center p-3 bg-slate-900/60 rounded-lg border border-slate-700">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-900/50 text-blue-400">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex justify-between">
                              <h3 className="text-sm font-medium">{interview.title}</h3>
                              <Badge variant="outline" className="text-xs border-blue-800 text-blue-400">
                                {interview.level}
                              </Badge>
                            </div>
                            <div className="flex text-xs text-slate-400 mt-1">
                              <span>{interview.company}</span>
                              <span className="mx-2">•</span>
                              <span>{interview.stack}</span>
                            </div>
                          </div>
                          <div className="ml-4 text-right">
                            <div className="text-sm font-medium">{interview.date}</div>
                            <div className="text-xs text-slate-400 mt-1">{interview.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-slate-500">
                      <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p>No upcoming interviews</p>
                      <Button variant="outline" size="sm" className="mt-3 border-slate-700 text-slate-400 hover:text-white">
                        Schedule Interview
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Skill Assessment */}
              <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
                  <h2 className="font-semibold">Skill Assessment</h2>
                  <Button variant="ghost" size="sm" className="text-blue-400 h-8 hover:text-blue-300">
                    Test Skills
                  </Button>
                </div>
                
                <div className="p-4">
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span className="text-slate-400">{skill.proficiency}%</span>
                        </div>
                        <Progress value={skill.proficiency} className="h-1.5 bg-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Interview Results */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
                <h2 className="font-semibold">Recent Interview Results</h2>
                <Button variant="ghost" size="sm" className="text-blue-400 h-8 hover:text-blue-300">
                  View All Results
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-slate-700">
                      <th className="px-4 py-3 text-xs font-medium text-slate-400">Position</th>
                      <th className="px-4 py-3 text-xs font-medium text-slate-400">Company</th>
                      <th className="px-4 py-3 text-xs font-medium text-slate-400">Date</th>
                      <th className="px-4 py-3 text-xs font-medium text-slate-400">Score</th>
                      <th className="px-4 py-3 text-xs font-medium text-slate-400">Status</th>
                      <th className="px-4 py-3 text-xs font-medium text-slate-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastInterviews.map((interview) => (
                      <tr key={interview.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                        <td className="px-4 py-3 text-sm">{interview.title}</td>
                        <td className="px-4 py-3 text-sm">{interview.company}</td>
                        <td className="px-4 py-3 text-sm">{interview.date}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Progress 
                              value={interview.score} 
                              className="w-16 h-1.5 mr-2 bg-slate-700" 
                              indicatorClassName={
                                interview.score >= 80 ? "bg-green-500" : 
                                interview.score >= 70 ? "bg-yellow-500" : 
                                "bg-red-500"
                              }
                            />
                            <span className="text-sm">{interview.score}%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <Badge className={
                            interview.status === "Passed" ? "bg-green-900/60 text-green-400" : "bg-red-900/60 text-red-400"
                          }>
                            {interview.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="ghost" size="sm" className="h-7 text-slate-400 hover:text-white">
                            <span className="text-xs">View</span>
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;