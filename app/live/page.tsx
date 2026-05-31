"use client"

import { useEffect, useState } from "react"

export default function LivePage() {

  const [drivers, setDrivers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchLive() {

      try {

        const res = await fetch(
          "https://api.openf1.org/v1/position?session_key=latest"
        )

        const data = await res.json()

        if (data.length > 0) {

          const latestPositions = Object.values(

            data.reduce((acc: any, item: any) => {

              acc[item.driver_number] = item

              return acc

            }, {})

          )

          setDrivers(latestPositions as any[])

        } else {

          setDrivers([])

        }

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)

      }

    }

    fetchLive()

    const interval = setInterval(() => {

      fetchLive()

    }, 5000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="min-h-screen text-white px-8 md:px-16 py-20">

      <h1 className="text-5xl font-black mb-12">
        پیست زنده
      </h1>

      {loading ? (

        <div className="text-2xl text-gray-400">
          در حال دریافت اطلاعات...
        </div>

      ) : drivers.length === 0 ? (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center text-2xl text-gray-300">

          در حال حاضر مسابقه‌ای فعال نیست

        </div>

      ) : (

        <div className="space-y-4">

          {drivers.map((driver: any) => (

            <div
              key={driver.driver_number}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between"
            >

              <div className="flex items-center gap-6">

                <div className="text-3xl font-black text-red-500 w-16">
                  P{driver.position}
                </div>

                <div>

                  <div className="text-2xl font-bold">
                    #{driver.driver_number}
                  </div>

                  <div className="text-gray-400 text-sm">
                    Driver #{driver.driver_number}
                  </div>

                </div>

              </div>

              <div className="text-xl font-bold text-green-400">
                LIVE
              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}
