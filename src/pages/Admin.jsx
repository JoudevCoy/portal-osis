import * as React from 'react';
import Navbar from './../components/Navbar';
import bcrypt from 'bcryptjs';
import 'cally';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Fas from "@fortawesome/free-solid-svg-icons";

import { db } from "./../../config/firebase.config.js";
import { Timestamp, collection, getDocs, addDoc } from "firebase/firestore";

const Admin = () => {
  const [pass, setPass] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);
  
  const [pTitle, setPTitle] = React.useState("");
  const [pDesc, setPDesc] = React.useState("");
  const [pImg, setPImg] = React.useState("");
  const [pTime, setPTime] = React.useState("");

  const login = async () => {
    if (pass == null || pass == "") {
      return alert("Password tidak boleh kosong");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(pass, salt);
    const secPassRef = await getDocs(collection(db, "admin"));
    const secPass = await secPassRef.docs.map(doc => ({
      ...doc.data()
    }))[0].hashPass;
    setIsAdmin(await bcrypt.compare(pass, secPass));
  }
  
  const addPost = async () => {
    if (pTitle == "" || pDesc == "" || pImg == "" || pTime == ""){
      return alert("Input tidak valid!");
    }
    const dateObj = await new Date(pTime);
    const timestamp = await Timestamp.fromDate(dateObj);
    await addDoc(collection(db, 'posts'), {
      title: pTitle,
      description: pDesc,
      img: pImg,
      time: timestamp
    });
  }


  return (
    <>
      <Navbar className="fixed top-0 left-0 z-[99]" />

      {
        isAdmin ?
          <>
            <main>
              <div className="tabs tabs-lift">
                <input type="radio" name="post_tabs" className="tab" aria-label="Tab 1" defaultChecked />
                <div className="tab-content border-base-300 p-6">
                  <div className="text-center">
                    <h1 className="my-[1rem] text-2xl font-black">Posting Konten</h1>
                    <fieldset className="fieldset mx-auto block">
                      <legend className="fieldset-legend">Masukan Judul</legend>
                      <input value={pTitle} onChange={(e) => setPTitle(e.target.value)} type="text" className="input" placeholder="Type here" />
                    </fieldset>
                    <fieldset className="fieldset mx-auto block">
                      <legend className="fieldset-legend">Masukan Deskripsi</legend>
                      <input value={pDesc} onChange={(e) => setPDesc(e.target.value)} type="text" className="input" placeholder="Type here" />
                    </fieldset>
                    <fieldset className="fieldset mx-auto block">
                      <legend className="fieldset-legend">Masukan Link Gambar</legend>
                      <input value={pImg} onChange={(e) => setPImg(e.target.value)} type="text" className="input" placeholder="https://drive.google.com/file/d/link_gambar/preview" />
                    </fieldset>
                    <fieldset className="fieldset mx-auto block">
                      <legend className="fieldset-legend">Masukan Tanggal</legend>
                      <button popoverTarget="cally-popover1" className="input input-border" id="cally1" style={{anchorName: "--cally1"}}>
                        Masukan tanggal
                      </button>
                      <div popover id="cally-popover1" className="dropdown" style={{positionAnchor: "--cally1"}}>
                        <calendar-date className="cally" onchange={(e) => {document.getElementById('cally1').innerText = e.target.value; setPTime(e.target.value)}}>
                          <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                          <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                          <calendar-month></calendar-month>
                        </calendar-date>
                      </div>
                    </fieldset>
                    <div className="divider"></div>
                    <button className="btn btn-primary" type="button" onClick={(e) => {e.preventDefault(); addPost()}}>
                      Posting
                    </button>
                  </div>
                </div>

                <input type="radio" name="post_tabs" className="tab" aria-label="Tab 2" />
                <div className="tab-content border-base-300 p-6">
                  content 2
                </div>

                <input type="radio" name="post_tabs" className="tab" aria-label="Tab 3" />
                <div className="tab-content border-base-300 p-6">
                  content 3
                </div>
              </div>
            </main>
          </>
          :
          <>
            <main className="w-full flex justify-center items-center">
              <form className="text-center">
                <h1 className="my-[1rem] text-2xl font-black">Masuk sebagai Admin</h1>

                <label className="input validator">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                      ></path>
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <input
                    value={pass}
                    onInput={(e) => setPass(e.target.value)}
                    type="password"
                    required
                    placeholder="Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
                <button type="button" className="btn btn-primary" onClick={() => login()}>Masuk</button>
              </form>
            </main>
          </>
      }
    </>
  )
}

export default Admin;