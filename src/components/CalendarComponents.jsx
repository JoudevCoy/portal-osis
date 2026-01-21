import * as React from 'react';

import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  viewMonthGrid,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import 'temporal-polyfill/global'
import '@schedule-x/theme-default/dist/index.css'

function CalendarComponents() {
  const eventsService = React.useState(() => createEventsServicePlugin())[0]

  const calendar = useCalendarApp({
    locale: 'id-IN',
    timezone: 'Asia/Makassar',
    minDate: Temporal.PlainDate.from('2026-01-01'),
    maxDate: Temporal.PlainDate.from('2027-12-31'),
    defaultView: viewMonthGrid.name,
    views: [createViewMonthGrid(), createViewMonthAgenda(), createViewWeek(), createViewDay()],
    events: [
      // ===== LIBUR NASIONAL RESMI & CUTI BERSAMA =====
      {
        id: "nh1",
        title: "Tahun Baru Masehi",
        start: Temporal.PlainDate.from("2026-01-01"),
        end: Temporal.PlainDate.from("2026-01-01")
      },
      {
        id: "nh2",
        title: "Isra Mi'raj Nabi Muhammad SAW",
        start: Temporal.PlainDate.from("2026-01-27"),
        end: Temporal.PlainDate.from("2026-01-27")
      },
      {
        id: "nh3",
        title: "Tahun Baru Imlek 2576 Kongzili",
        start: Temporal.PlainDate.from("2026-01-29"),
        end: Temporal.PlainDate.from("2026-01-29")
      },
      {
        id: "nh4",
        title: "Hari Raya Nyepi (Tahun Baru Saka)",
        start: Temporal.PlainDate.from("2026-03-29"),
        end: Temporal.PlainDate.from("2026-03-29")
      },
      {
        id: "nh5",
        title: "Idul Fitri 1446 H",
        start: Temporal.PlainDate.from("2026-03-31"),
        end: Temporal.PlainDate.from("2026-04-01")
      },
      {
        id: "nh6",
        title: "Wafat Yesus Kristus (Good Friday)",
        start: Temporal.PlainDate.from("2026-04-18"),
        end: Temporal.PlainDate.from("2026-04-18")
      },
      {
        id: "nh7",
        title: "Paskah",
        start: Temporal.PlainDate.from("2026-04-20"),
        end: Temporal.PlainDate.from("2026-04-20")
      },
      {
        id: "nh8",
        title: "Hari Buruh Internasional",
        start: Temporal.PlainDate.from("2026-05-01"),
        end: Temporal.PlainDate.from("2026-05-01")
      },
      {
        id: "nh9",
        title: "Hari Raya Waisak",
        start: Temporal.PlainDate.from("2026-05-12"),
        end: Temporal.PlainDate.from("2026-05-12")
      },
      {
        id: "nh10",
        title: "Kenaikan Yesus Kristus",
        start: Temporal.PlainDate.from("2026-05-29"),
        end: Temporal.PlainDate.from("2026-05-29")
      },
      {
        id: "nh11",
        title: "Hari Lahir Pancasila",
        start: Temporal.PlainDate.from("2026-06-01"),
        end: Temporal.PlainDate.from("2026-06-01")
      },
      {
        id: "nh12",
        title: "Idul Adha 1446 H",
        start: Temporal.PlainDate.from("2026-06-06"),
        end: Temporal.PlainDate.from("2026-06-06")
      },
      {
        id: "nh13",
        title: "Tahun Baru Islam 1447 H",
        start: Temporal.PlainDate.from("2026-06-27"),
        end: Temporal.PlainDate.from("2026-06-27")
      },
      {
        id: "nh14",
        title: "Hari Kemerdekaan RI",
        start: Temporal.PlainDate.from("2026-08-17"),
        end: Temporal.PlainDate.from("2026-08-17")
      },
      {
        id: "nh15",
        title: "Maulid Nabi Muhammad SAW",
        start: Temporal.PlainDate.from("2026-09-05"),
        end: Temporal.PlainDate.from("2026-09-05")
      },
      {
        id: "nh16",
        title: "Hari Natal",
        start: Temporal.PlainDate.from("2026-12-25"),
        end: Temporal.PlainDate.from("2026-12-25")
      },

      // ===== HARI BESAR NASIONAL YANG SERING DIPERINGATI =====
      {
        id: "nat1",
        title: "Hari Pers Nasional",
        start: Temporal.PlainDate.from("2026-02-09"),
        end: Temporal.PlainDate.from("2026-02-09")
      },
      {
        id: "nat2",
        title: "Hari Buku Nasional",
        start: Temporal.PlainDate.from("2026-05-17"),
        end: Temporal.PlainDate.from("2026-05-17")
      },
      {
        id: "nat3",
        title: "Hari Anak Nasional",
        start: Temporal.PlainDate.from("2026-07-23"),
        end: Temporal.PlainDate.from("2026-07-23")
      },

      // ===== BEBERAPA HARI INTERNASIONAL UMUM =====
      {
        id: "int1",
        title: "International Women's Day",
        start: Temporal.PlainDate.from("2026-03-08"),
        end: Temporal.PlainDate.from("2026-03-08")
      },
      {
        id: "int2",
        title: "World Water Day",
        start: Temporal.PlainDate.from("2026-03-22"),
        end: Temporal.PlainDate.from("2026-03-22")
      },
      {
        id: "int3",
        title: "Earth Day",
        start: Temporal.PlainDate.from("2026-04-22"),
        end: Temporal.PlainDate.from("2026-04-22")
      },
      {
        id: "int4",
        title: "World Press Freedom Day",
        start: Temporal.PlainDate.from("2026-05-03"),
        end: Temporal.PlainDate.from("2026-05-03")
      },
      {
        id: "int5",
        title: "World Environment Day",
        start: Temporal.PlainDate.from("2026-06-05"),
        end: Temporal.PlainDate.from("2026-06-05")
      },
      {
        id: "int6",
        title: "International Youth Day",
        start: Temporal.PlainDate.from("2026-08-12"),
        end: Temporal.PlainDate.from("2026-08-12")
      },
      {
        id: "int7",
        title: "United Nations Day",
        start: Temporal.PlainDate.from("2026-10-24"),
        end: Temporal.PlainDate.from("2026-10-24")
      },
      {
        id: "int8",
        title: "World AIDS Day",
        start: Temporal.PlainDate.from("2026-12-01"),
        end: Temporal.PlainDate.from("2026-12-01")
      }
    ],
    plugins: [eventsService]
  })

  React.useEffect(() => {
    // get all events
    eventsService.getAll()
  }, [])

  return (
    <>
      <ScheduleXCalendar calendarApp={calendar} />
    </>
  )
}

export default CalendarComponents