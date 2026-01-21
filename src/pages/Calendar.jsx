import * as React from "react";
import CalenderComponents from "./../components/CalendarComponents";
import Navbar from "./../components/Navbar";
export default function Calendar() {

  return (
    <>
      <Navbar />
      <main className="px-[1rem] my-[2rem]">
        <h1 className="text-2xl text-center font-black">Kalender Proker</h1>
        <p className="my-[1rem]">Didalam Kalender Proker berisi setiap kegiatan-kegiatan program kerja pengurus inti dan seksi bidang OSIS</p>
        <CalenderComponents />
      </main>
    </>
  );
}