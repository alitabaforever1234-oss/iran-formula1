"use client"

import { useEffect, useState } from "react"

export default function LivePage() {

  const [drivers, setDrivers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [live, setLive] = useState(false)

  useEffect(() => {

    async function fetchLive() {

      try {

        const sessionRes = await fetch(
          "https://api.openf1.org/v1/sessions?session_key=latest"
        )

        const sessionData = await sessionRes.json()

        if (!sessionData.length) {

          setLive(false)
          setLoading(false)
          return

        }

        const session = sessionData[0]

        const now = new Date()
        const sessionEnd = new Date(session.date_end)

        if (now > sessionEnd) {

          setLive(false)
          setLoading(false)
          return

        }

        setLive(true)

        const driversRes = await fetch(
          `https://api.openf1.org/v1/drivers?session_key=${session.session_key}`
        )

        const driversData = await driversRes.json()

        const positionsRes = await fetch(
          `https://api.openf1.org/v1/position?session_key=${session.session_key}`
        )

        const positionsData = await positionsRes.json()

        const latestPositions = Object.values(

          positionsData.reduce((acc: any, item: any) => {

            acc[item.driver_number] = item

            return acc

          }, {})

        )

        const merged = latestPositions.map((pos: any) => {

          const info = driversData.find(
            (d: any) => d.driver_number === pos.driver_number
          )

          return {
            ...pos,
            full_name: info?.full_name,
            team_name: info?.team_name,
            team_colour: info?.team_colour,
          }

        })

        merged.sort((a: any, b: any) => a.position - b.position)

        setDrivers(merged)

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

      ) : !live ? (

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
                    {driver.full_name}
                  </div>

                  <div className="text-gray-400 text-sm">
                    {driver.team_name}
                  </div>

                </div>

              </div>

              <div
                className="w-5 h-5 rounded-full"
                style={{
                  backgroundColor: `#${driver.team_colour}`,
                }}
              />

            </div>

          ))}

        </div>

      )}

    </div>

  )

}

