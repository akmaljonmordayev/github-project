import React, { useState } from 'react'

function Settings() {
  const [activeTab, setActiveTab] = useState('Profile')
  const [notifications, setNotifications] = useState({
    browser1: true,
    browser2: false,
    dailyDigest: false,
  })

  return (
    <div className="min-h-screen bg-slate-50/50 py-10 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Большой заголовок Settings */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 text-center mb-10 tracking-tight">
          Settings
        </h1>

        {/* Основная сетка страницы */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Левое боковое меню */}
          <div className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-sm h-fit">
            <h2 className="text-lg font-bold text-slate-800 mb-3 px-3">Settings</h2>
            <nav className="space-y-1">
              {['Profile', 'Account Security', 'Notifications', 'Billing'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-slate-100 text-slate-900 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Центральный блок (Профиль) */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Profile Settings
            </h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Manage Your Profile and Account
            </h3>

            {/* Загрузка фото профиля */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Profile Picture
              </label>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-slate-300 flex items-center justify-center text-slate-500 font-semibold text-xl">
                  Avatar
                </div>
                <button className="px-4 py-2 border border-slate-300 text-slate-700 font-medium text-sm rounded-lg hover:bg-slate-50 transition">
                  Update
                </button>
              </div>
            </div>

            {/* Изменение имени */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Name
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 text-sm"
                />
                <button className="px-4 py-2 bg-slate-900 text-white font-medium text-sm rounded-lg hover:bg-slate-800 transition">
                  Edit
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-1.5">
                This name will be visible to your students.
              </p>
            </div>

            {/* Email */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-semibold text-slate-700">
                  Your Email
                </label>
                <button className="text-sm font-medium text-emerald-700 hover:underline">
                  Verify Email
                </button>
              </div>
              <input
                type="email"
                readOnly
                value="student@example.com"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 cursor-not-allowed"
              />
              <p className="text-xs text-emerald-600 mt-1.5 font-medium">
                Your changes have been saved successfully!
              </p>
            </div>

            {/* Смена пароля */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-semibold text-slate-700">
                  Change Password
                </label>
                <button className="px-3 py-1.5 border border-slate-300 text-xs font-medium rounded-lg text-slate-700 hover:bg-slate-50">
                  Clear
                </button>
              </div>
              <p className="text-xs text-rose-500 font-medium mt-1">
                Please confirm your new password.
              </p>
            </div>
          </div>

          {/* Правая колонка с доп. настройками */}
          <div className="space-y-6">
            
            {/* Карточка уведомлений */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-800 mb-4">
                Notification Preferences
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.browser1}
                    onChange={(e) => setNotifications({ ...notifications, browser1: e.target.checked })}
                    className="w-4 h-4 rounded text-slate-900 focus:ring-slate-800 border-slate-300"
                  />
                  Enable browser notifications
                </label>

                <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.browser2}
                    onChange={(e) => setNotifications({ ...notifications, browser2: e.target.checked })}
                    className="w-4 h-4 rounded text-slate-900 focus:ring-slate-800 border-slate-300"
                  />
                  Enable browser notifications
                </label>

                <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.dailyDigest}
                    onChange={(e) => setNotifications({ ...notifications, dailyDigest: e.target.checked })}
                    className="w-4 h-4 rounded text-slate-900 focus:ring-slate-800 border-slate-300"
                  />
                  Daily digest of new student submissions
                </label>
              </div>
            </div>

            {/* Карточка внешнего вида (Appearance) */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-800 mb-2">
                Appearance
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Select your preferred light or dark theme.
              </p>

              {/* Переключатель темы */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Dark Mode</span>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-900 transition-colors duration-200 ease-in-out focus:outline-none"
                >
                  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Settings