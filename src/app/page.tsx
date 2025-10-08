"use client"

import type React from "react"

import { Home, Bookmark, Clock, Users, PartyPopper, Settings, LogOut, Search, Bell, Mail, Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function NetflixClone() {
  const [profileImages, setProfileImages] = useState<string[]>([
    "/avatars/user1.jpg",
    "/avatars/user2.jpg",
    "/avatars/user3.jpg",
    "/avatars/user4.jpg",
    "/avatars/user5.jpg",
    "/avatars/user6.jpg",
  ])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImages([reader.result as string, ...profileImages])
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-200 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Netflix.</h1>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Menu</p>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 text-red-600">
            <Home className="w-5 h-5" />
            <span className="font-medium">Browse</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <Bookmark className="w-5 h-5" />
            <span className="font-medium">Watchlist</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Coming soon</span>
          </a>

          <p className="text-xs font-semibold text-gray-400 uppercase mb-2 mt-6">Social</p>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <Users className="w-5 h-5" />
            <span className="font-medium">Friends</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <PartyPopper className="w-5 h-5" />
            <span className="font-medium">Parties</span>
          </a>

          <p className="text-xs font-semibold text-gray-400 uppercase mb-2 mt-6">General</p>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 mt-auto">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log out</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 lg:px-8">
          <div className="flex items-center gap-4 flex-1">
            <button className="lg:hidden">
              <Home className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm flex-1"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="relative">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="/avatars/user1.jpg" alt="Ramone F." width={40} height={40} className="object-cover" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-900">Ramone F.</p>
                <p className="text-xs text-gray-500">User ID</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content Column */}
            <div className="flex-1 p-6 lg:p-8">
              {/* Hero Section */}
              <div className="relative rounded-3xl overflow-hidden mb-8 h-80 lg:h-96">
                <Image src="/images/witcher-hero.jpg" alt="The Witcher" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-2 text-white text-sm mb-2">
                    <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">1080 / episode</span>
                    <span>👥 +3 friends are watching</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">The Witcher</h2>
                  <p className="text-white/90 text-sm mb-4">Fantasy • Magic • 2 seasons</p>
                  <div className="flex items-center gap-3">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors">Watch</button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Parties Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Parties</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-1 bg-gray-200 rounded-full">
                      <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {/* Party Card 1 - Cadaver */}
                  <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square bg-white">
                      <Image src="/parties/cadaver-poster.jpg" alt="Cadaver" fill className="object-cover" />
                      <div className="absolute bottom-2 left-2 flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user1.jpg"
                            alt="User 1"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user2.jpg"
                            alt="User 2"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user3.jpg"
                            alt="User 3"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-gray-900">Cadaver</p>
                      <p className="text-xs text-gray-500">Watched yesterday</p>
                    </div>
                  </div>

                  {/* Party Card 2 - Bladerunner 2049 */}
                  <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square bg-white">
                      <Image
                        src="/parties/bladerunner-poster.jpg"
                        alt="Bladerunner 2049"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user4.jpg"
                            alt="User 4"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user5.jpg"
                            alt="User 5"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user6.jpg"
                            alt="User 6"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-gray-900">Bladerunner 2049</p>
                      <p className="text-xs text-gray-500">Sci-fi binge</p>
                    </div>
                  </div>

                  {/* Party Card 3 - Monsters Inc */}
                  <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square bg-white">
                      <Image src="/parties/monsters-inc-poster.jpg" alt="Monsters Inc" fill className="object-cover" />
                      <div className="absolute bottom-2 left-2 flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user1.jpg"
                            alt="User 1"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user3.jpg"
                            alt="User 3"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user5.jpg"
                            alt="User 5"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-gray-900">Monsters Inc.</p>
                      <p className="text-xs text-gray-500">Dont make me grow up</p>
                    </div>
                  </div>

                  {/* Party Card 4 - Friends */}
                  <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square bg-white">
                      <Image src="/parties/friends-poster.jpg" alt="Friends" fill className="object-cover" />
                      <div className="absolute bottom-2 left-2 flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user2.jpg"
                            alt="User 2"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user4.jpg"
                            alt="User 4"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src="/avatars/user6.jpg"
                            alt="User 6"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-gray-900">Friends</p>
                      <p className="text-xs text-gray-500">We were on a break!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Watching Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continue watching</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Show Card 1 */}
                  <div className="flex flex-col">
                    <div className="relative rounded-xl overflow-hidden mb-2 aspect-video bg-gray-200">
                      <Image
                        src="/haunting-of-hill-house-dark-mansion.jpg"
                        alt="Haunting of Hill House"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Haunting of Hill House</p>
                  </div>

                  {/* Show Card 2 */}
                  <div className="flex flex-col">
                    <div className="relative rounded-xl overflow-hidden mb-2 aspect-video bg-gray-200">
                      <Image src="/ratched-nurse-green-theme.jpg" alt="Ratched" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Ratched</p>
                  </div>

                  {/* Show Card 3 */}
                  <div className="flex flex-col">
                    <div className="relative rounded-xl overflow-hidden mb-2 aspect-video bg-gray-200">
                      <Image src="/el-camino-breaking-bad-desert.jpg" alt="El Camino" fill className="object-cover" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">El Camino</p>
                  </div>

                  {/* Show Card 4 */}
                  <div className="flex flex-col">
                    <div className="relative rounded-xl overflow-hidden mb-2 aspect-video bg-gray-200">
                      <Image
                        src="/stranger-things-kids-group.jpg"
                        alt="Stranger Things"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Stranger Things</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - User Avatars */}
            <aside className="hidden xl:flex xl:flex-col w-20 bg-white border-l border-gray-200 p-4 gap-4">
              <label
                htmlFor="profile-upload"
                className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 cursor-pointer"
              >
                <Plus className="w-5 h-5" />
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>

              {profileImages.map((image, index) => (
                <div key={index} className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Profile ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around py-3">
        <a href="#" className="flex flex-col items-center gap-1 text-red-600">
          <Home className="w-5 h-5" />
          <span className="text-xs font-medium">Browse</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-gray-600">
          <Bookmark className="w-5 h-5" />
          <span className="text-xs font-medium">Watchlist</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-gray-600">
          <Users className="w-5 h-5" />
          <span className="text-xs font-medium">Friends</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-gray-600">
          <Settings className="w-5 h-5" />
          <span className="text-xs font-medium">Settings</span>
        </a>
      </nav>
    </div>
  )
}
