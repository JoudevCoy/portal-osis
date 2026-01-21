import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Fas from '@fortawesome/free-solid-svg-icons';
import osisCoverImg from './../assets/osis-cover.jpg';

import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../config/firebase.config.js";
import Navbar from './../components/Navbar.jsx';

import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  // Mengambil data" di firebase
  React.useEffect(() => {
    return async () => {
      const postCol = await getDocs(collection(db, "posts"));
      const postRef = postCol.docs.map(doc => ({
        collection_id: doc.id,
        ...doc.data()
      }))
      setPosts(postRef)
    }
  }, []);

  return (
    <>
      {/*
      <div className="drawer lg:drawer-open">
        <input id="app-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          <div className="navbar text-primary-content">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="app-drawer"
                className="btn btn-square btn-ghost"
              >
                <i className="text-[1.5rem] text-primary">
                  <FontAwesomeIcon icon={Fas.faBars} />
                </i>
              </label>
            </div>

            <div className="flex-1 px-2 text-xl font-bold">
              <img src={osisBadgeImg} className="block max-w-[6rem]" />
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="app-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-64 min-h-full bg-primary text-base-content">
            <li><a>Dashboard</a></li>
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div> */}
      {/* NAVBAR PART */}
      <Navbar />

      {/* HERO PART */}
      <div
        className="hero relative min-h-screen"
      >
        <img className="absolute top-0 left-0 z-[-1] w-full h-full object-cover" src={osisCoverImg} />
        <div className="absolute left-0 bottom-[-10px] w-full h-[25%] bg-gradient-to-t from-white to-[#FFFFFF00]"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">OSIS SMAN 1 TONDANO</h1>
            <p className="mb-5 text-white">
              Portal OSIS SMA Negeri 1 Tondano adalah salah satu platform pertama yang memberikan informasi terpusat dalam satu platform yang terintegritas dan terorganisir
            </p>
          </div>
        </div>
      </div>
      <main className="px-[1rem] mt-[1rem] md:px-[1.5rem] lg:px-[2rem]">

        {/* Card Content */}
        <div className="my-card-content mt-[2rem] w-full">
          <h1 className="text-2xl mb-5 font-black">Kegiatan Terbaru</h1>
          <div className="carousel carousel-center w-full space-x-4 rounded-box">
          {
            posts.map((post,idx) => (
            <div key={idx} className="carousel-item py-[1rem]">
              <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                  <iframe className="rounded-lg w-full aspect-[4/3]"
                    src={post.img}
                    alt={post.title}></iframe>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="card-actions justify-end">
                    <p>{post.time.toDate().toLocaleDateString('id-IN')}</p>
                    <button className="btn btn-primary">Lihat</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;