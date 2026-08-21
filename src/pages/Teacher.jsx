import React from "react";

function Teacher() {
  const teachers = [
    {
      id: 1,
      name: "John Anderson",
      email: "john@school.com",
      subject: "Mathematics",
      experience: "8 Years",
      students: 245,
      status: "Active",
      avatar: "JA",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@school.com",
      subject: "English",
      experience: "6 Years",
      students: 198,
      status: "Active",
      avatar: "SW",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@school.com",
      subject: "Physics",
      experience: "10 Years",
      students: 312,
      status: "Active",
      avatar: "MB",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@school.com",
      subject: "Biology",
      experience: "5 Years",
      students: 156,
      status: "Offline",
      avatar: "ED",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080a10] p-6 text-white md:p-8">

      {/* HEADER */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <p className="mb-2 text-xs font-bold tracking-[3px] text-violet-500">
            EDUCATION SYSTEM
          </p>

          <h1 className="text-4xl font-bold">
            Teachers
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage and monitor all teachers in your school.
          </p>
        </div>

        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 font-semibold shadow-lg shadow-violet-900/30 transition hover:-translate-y-1 hover:shadow-violet-700/30">
          <span className="mr-2 text-xl">+</span>
          Add Teacher
        </button>

      </div>


      {/* STATISTICS */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-white/5 bg-[#10131b] p-5 transition hover:-translate-y-1 hover:border-violet-500/30">
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
              👨‍🏫
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Teachers
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                24
              </h2>
            </div>

          </div>
        </div>


        <div className="rounded-2xl border border-white/5 bg-[#10131b] p-5 transition hover:-translate-y-1 hover:border-green-500/30">
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
              ✓
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Active Teachers
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                21
              </h2>
            </div>

          </div>
        </div>


        <div className="rounded-2xl border border-white/5 bg-[#10131b] p-5 transition hover:-translate-y-1 hover:border-blue-500/30">
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
              🎓
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Students
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                1,248
              </h2>
            </div>

          </div>
        </div>


        <div className="rounded-2xl border border-white/5 bg-[#10131b] p-5 transition hover:-translate-y-1 hover:border-orange-500/30">
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
              ⭐
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Average Rating
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                4.8
              </h2>
            </div>

          </div>
        </div>

      </div>


      {/* TEACHERS TABLE */}
      <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#10131b]">

        {/* TABLE HEADER */}
        <div className="flex flex-col justify-between gap-4 border-b border-white/5 p-6 md:flex-row md:items-center">

          <div>
            <h2 className="text-xl font-bold">
              All Teachers
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              List of all registered teachers
            </p>
          </div>


          {/* SEARCH */}
          <div className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-[#080a10] px-4 py-2.5 md:w-64">

            <span className="text-gray-500">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search teacher..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />

          </div>

        </div>


        {/* TABLE */}
        <div className="overflow-x-auto">

          <div className="min-w-[900px]">

            {/* TABLE HEAD */}
            <div className="grid grid-cols-[2fr_1.3fr_1.2fr_1fr_1fr_1fr] gap-4 bg-[#0c0f16] px-6 py-4 text-xs font-bold tracking-wide text-gray-600">

              <span>TEACHER</span>
              <span>SUBJECT</span>
              <span>EXPERIENCE</span>
              <span>STUDENTS</span>
              <span>STATUS</span>
              <span>ACTION</span>

            </div>


            {/* TEACHERS */}
            {teachers.map((teacher) => (

              <div
                key={teacher.id}
                className="grid grid-cols-[2fr_1.3fr_1.2fr_1fr_1fr_1fr] items-center gap-4 border-t border-white/5 px-6 py-5 transition hover:bg-violet-500/[0.03]"
              >

                {/* TEACHER */}
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold">
                    {teacher.avatar}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      {teacher.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-600">
                      {teacher.email}
                    </p>
                  </div>

                </div>


                {/* SUBJECT */}
                <div className="text-sm text-gray-400">
                  {teacher.subject}
                </div>


                {/* EXPERIENCE */}
                <div className="text-sm text-gray-400">
                  {teacher.experience}
                </div>


                {/* STUDENTS */}
                <div className="text-sm font-semibold text-gray-300">
                  {teacher.students}
                </div>


                {/* STATUS */}
                <div>

                  {teacher.status === "Active" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-500/10 px-3 py-1.5 text-xs font-semibold text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                      Offline
                    </span>
                  )}

                </div>


                {/* ACTION */}
                <div className="flex items-center gap-2">

                  <button className="rounded-lg border border-white/10 bg-[#151923] px-3 py-2 text-xs text-gray-400 transition hover:border-violet-500 hover:bg-violet-500/10 hover:text-white">
                    View
                  </button>

                  <button className="rounded-lg border border-white/10 bg-[#151923] px-3 py-2 text-xs text-gray-500 transition hover:text-white">
                    •••
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Teacher;