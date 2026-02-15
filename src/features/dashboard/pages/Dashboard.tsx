import { ClipboardClock, Plus, MoreHorizontal } from 'lucide-react'
import AvatarGroup from '@/features/dashboard/components/AvatarGroup'
import { UserRoundPlus } from 'lucide-react'

// TODO: responsive ส่วน Welcome back, Suphanat
// TODO: Component ของ Frame, TaskCard, CompletedTaskCard, Chart

// Mock Data
const todoTasks = [
  {
    id: 1,
    title: "Attend Nischal's Birthday Party",
    description:
      'Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....',
    priority: 'Moderate',
    status: 'Not Started',
    createdOn: '20/06/2023',
    borderColor: 'border-red-500',
    statusColor: 'text-red-500',
    priorityColor: 'text-blue-400',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    title: 'Landing Page Design for TravelDays',
    description:
      'Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)',
    priority: 'Moderate',
    status: 'In Progress',
    createdOn: '20/06/2023',
    borderColor: 'border-blue-500',
    statusColor: 'text-blue-500',
    priorityColor: 'text-blue-400',
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    title: 'Presentation on Final Product',
    description:
      'Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...',
    priority: 'Moderate',
    status: 'In Progress',
    createdOn: '19/06/2023',
    borderColor: 'border-blue-500',
    statusColor: 'text-blue-500',
    priorityColor: 'text-blue-400',
    image: 'https://picsum.photos/200',
  },
]

const completedTasks = [
  {
    id: 1,
    title: 'Walk the dog',
    description: 'Take the dog to the park and bring treats as well.',
    status: 'Completed',
    completedAgo: '2 days ago',
    statusColor: 'text-green-500',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    title: 'Conduct meeting',
    description: 'Meet with the client and finalize requirements.',
    status: 'Completed',
    completedAgo: '2 days ago',
    statusColor: 'text-green-500',
    image: 'https://picsum.photos/200',
  },
]

const CircleChart = ({
  percentage,
  color,
  label,
}: {
  percentage: number
  color: string
  label: string
}) => {
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-lg font-bold">{percentage}%</span>
      </div>
      <span
        className={`mt-2 text-sm font-medium ${percentage === 84 ? 'text-green-600' : percentage === 46 ? 'text-blue-600' : 'text-red-500'} flex items-center gap-1`}
      >
        <span
          className={`w-2 h-2 rounded-full ${color === '#22c55e' ? 'bg-green-500' : color === '#3b82f6' ? 'bg-blue-500' : 'bg-red-500'}`}
        ></span>
        {label}
      </span>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="p-2 space-y-6 ">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, Suphanat 👋🏻
        </h1>

        <div className="flex items-center gap-4">
          <AvatarGroup />
          <button className="bg-none border border-primary rounded-md px-2 py-1 flex items-center gap-2 text-primary">
            <UserRoundPlus size={16} />
            <span className="text-sm font-medium">Invite</span>
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border border-gray-300 rounded-2xl p-5">
        {/* LEFT COLUMN - TO-DO */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center w-full mb-1">
            <div className="flex items-center gap-2">
              <ClipboardClock size={16} className="text-primary" />
              <h3 className="text-md font-medium text-primary">To-Do</h3>
            </div>

            <button className="bg-none border-none px-2 py-1 flex items-center gap-2 ">
              <Plus size={16} color="var(--color-primary)" />
              <span className="text-sm font-medium text-gray-400">
                Add Task
              </span>
            </button>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-6">
            <span className="text-gray-900 font-semibold">20 June</span> • Today
          </p>

          {/* Task List */}
          <div className="flex flex-col gap-4">
            {todoTasks.map((task) => (
              <div
                key={task.id}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600">
                  <MoreHorizontal size={20} />
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${task.borderColor} mt-1 shrink-0`}
                  ></div>
                  <h3 className="text-base font-bold text-gray-800 pr-6">
                    {task.title}
                  </h3>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex-1 pr-4">
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                      {task.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-medium">
                      <span className="text-gray-500">
                        Priority:{' '}
                        <span className={task.priorityColor}>
                          {task.priority}
                        </span>
                      </span>
                      <span className="text-gray-500">
                        Status:{' '}
                        <span className={task.statusColor}>{task.status}</span>
                      </span>
                      <span className="text-gray-400">
                        Created on: {task.createdOn}
                      </span>
                    </div>
                  </div>

                  <img
                    src={task.image}
                    alt="Task"
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Section 1: Task Status */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center w-full mb-1">
              <div className="flex items-center gap-2">
                <ClipboardClock size={16} className="text-primary" />
                <h3 className="text-md font-medium text-primary">To-Do</h3>
              </div>

              <button className="bg-none border-none px-2 py-1 flex items-center gap-2 ">
                <Plus size={16} color="var(--color-primary)" />
                <span className="text-sm font-medium text-gray-400">
                  Add Task
                </span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-around gap-4 px-2">
              <CircleChart percentage={84} color="#22c55e" label="Completed" />
              <CircleChart
                percentage={46}
                color="#3b82f6"
                label="In Progress"
              />
              <CircleChart
                percentage={13}
                color="#ef4444"
                label="Not Started"
              />
            </div>
          </div>

          {/* Section 2: Completed Task */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1">
            <div className="flex justify-between items-center w-full mb-4">
              <div className="flex items-center gap-2">
                <ClipboardClock size={16} className="text-primary" />
                <h3 className="text-md font-medium text-primary">To-Do</h3>
              </div>

              <button className="bg-none border-none px-2 py-1 flex items-center gap-2 ">
                <Plus size={16} color="var(--color-primary)" />
                <span className="text-sm font-medium text-gray-400">
                  Add Task
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {completedTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow relative"
                >
                  <div className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600">
                    <MoreHorizontal size={20} />
                  </div>

                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-4 h-4 rounded-full border-2 border-green-500 mt-1 shrink-0"></div>
                    <h3 className="text-base font-bold text-gray-800 pr-6">
                      {task.title}
                    </h3>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex-1 pr-4">
                      <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">
                        {task.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs font-medium">
                        <span className="text-gray-500">
                          Status:{' '}
                          <span className={task.statusColor}>
                            {task.status}
                          </span>
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">
                        Completed {task.completedAgo}.
                      </p>
                    </div>

                    <img
                      src={task.image}
                      alt="Task"
                      className="w-20 h-20 rounded-lg object-cover shrink-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
