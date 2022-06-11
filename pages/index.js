import Head from "next/head";
import Image from "next/image";
import { BsFilterLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home(props) {
  const [filter, setFilter] = useState(false);
  const [tab, setTab] = useState(0);
  const [user, setUser] = useState("");
  const res = async () => {
    const res = await axios.get("https://assessment.api.vweb.app/user");
    setUser(res.data);
  };
  useEffect(() => {
    res();
    return () => {
      console.log("Hell");
    };
  }, []);

  // // For filter
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  // console.log(city, state);

  // FOr Navmenu
  const pastArray = [];
  const upcomingArray = [];
  const nearestArray = [];

  const data = props.data;

  data?.map((item) => {
    if (new Date() > new Date(item.date)) {
      pastArray.push(item);
    } else {
      upcomingArray.push(item);
    }
  });

  // For nearest
  data?.map((item) => {
    // return console.log(item);
    if (item.station_path.includes(user?.station_code)) {
      nearestArray.push(item);
    }
  });

  // const renderCards = () => {
  //   if (tab === 0) {
  //     return (
  //       <div className="container mx-auto p-4">
  //         {nearestArray.map((items, i) => {
  //           if (city !== "" || state !== "") {
  //             if (city !== items.city || state !== items.state) {
  //               return;
  //             }
  //           }
  //           return (
  //             <div
  //               key={i}
  //               className="rounded-md p-4 mb-5 bg-[#171717] flex md:flex-row flex-col items-center"
  //             >
  //               <figure className="md:w-1/4 md:h-40 ">
  //                 <img
  //                   src={items.map_url}
  //                   className="w-full h-full object-cover"
  //                 />
  //               </figure>
  //               <section className="flex md:flex-row w-full flex-col-reverse justify-start  items-start md:justify-between md:w-3/4">
  //                 <div className="md:pl-7 md:space-y-1 h-full ">
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Ride Id : <span className="text-white">{items.id}</span>
  //                   </div>
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Origin State :{" "}
  //                     <span className="text-white">
  //                       {items.origin_station_code}
  //                     </span>
  //                   </div>{" "}
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Station Path :{" "}
  //                     <span className="text-white">
  //                       {" "}
  //                       [
  //                       {items.station_path.map((e, i) => {
  //                         return (
  //                           <span key={i} className="">
  //                             {e},&nbsp;
  //                           </span>
  //                         );
  //                       })}
  //                       ]{" "}
  //                     </span>
  //                   </div>{" "}
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Date : <span className="text-white">{items.date}</span>
  //                   </div>
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Distance :{" "}
  //                     <span className="text-white">
  //                       {items.destination_station_code -
  //                         items.origin_station_code}
  //                     </span>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-center space-x-2 py-3 md:py-0 md:space-x-4">
  //                   <div className="bg-black text-center p-2 py-1 tracking-wider text-sm rounded-md text-white">
  //                     {items.city}
  //                   </div>
  //                   <div className="bg-black text-center p-2 py-1 tracking-wider text-sm rounded-md text-white">
  //                     {items.state}
  //                   </div>
  //                 </div>
  //               </section>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   } else if (tab === 1) {
  //     return (
  //       <div className="container mx-auto p-4">
  //         {upcomingArray.map((items, i) => {
  //           if (city !== "" || state !== "") {
  //             if (city !== items.city || state !== items.state) {
  //               return;
  //             }
  //           }
  //           return (
  //             <div
  //               key={i}
  //               className="rounded-md p-4 mb-5 bg-[#171717] flex md:flex-row flex-col items-center"
  //             >
  //               <figure className="md:w-1/4 md:h-40 ">
  //                 <img
  //                   src={items.map_url}
  //                   className="w-full h-full object-cover"
  //                 />
  //               </figure>
  //               <section className="flex md:flex-row w-full flex-col-reverse justify-start  items-start md:justify-between md:w-3/4">
  //                 <div className="md:pl-7 md:space-y-1 h-full ">
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Ride Id : <span className="text-white">{items.id}</span>
  //                   </div>
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Origin State :{" "}
  //                     <span className="text-white">
  //                       {items.origin_station_code}
  //                     </span>
  //                   </div>{" "}
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Station Path :{" "}
  //                     <span className="text-white">
  //                       <span className="text-white">
  //                         {" "}
  //                         [
  //                         {items.station_path.map((e) => {
  //                           return <span className="">{e},&nbsp;</span>;
  //                         })}
  //                         ]{" "}
  //                       </span>
  //                     </span>
  //                   </div>{" "}
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Date : <span className="text-white">{items.date}</span>
  //                   </div>
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Distance :{" "}
  //                     <span className="text-white">
  //                       {items.destination_station_code -
  //                         items.origin_station_code}
  //                     </span>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-center space-x-2 py-3 md:py-0 md:space-x-4">
  //                   <div className="bg-black text-center p-2 py-1 tracking-wider text-sm rounded-md text-white">
  //                     {items.city}
  //                   </div>
  //                   <div className="bg-black text-center p-2 py-1 tracking-wider text-sm rounded-md text-white">
  //                     {items.state}
  //                   </div>
  //                 </div>
  //               </section>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   } else if (tab === 2) {
  //     return (
  //       <div className="container mx-auto p-4">
  //         {pastArray.map((items, i) => {
  //           if (city !== "" || state !== "") {
  //             if (city !== items.city || state !== items.state) {
  //               return;
  //             } else {
  //               console.log(items.city, items.state, "hhj");
  //             }
  //           }

  //           return (
  //             <div
  //               key={i}
  //               className="rounded-md p-4 mb-5 bg-[#171717] flex md:flex-row flex-col items-center"
  //             >
  //               <figure className="md:w-1/4 md:h-40 ">
  //                 <img
  //                   src={items.map_url}
  //                   className="w-full h-full object-cover"
  //                 />
  //               </figure>
  //               <section className="flex md:flex-row w-full flex-col-reverse justify-start  items-start md:justify-between md:w-3/4">
  //                 <div className="md:pl-7 md:space-y-1 h-full ">
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Ride Id : <span className="text-white">{items.id}</span>
  //                   </div>
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Origin State :{" "}
  //                     <span className="text-white">
  //                       {items.origin_station_code}
  //                     </span>
  //                   </div>{" "}
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Station Path :{" "}
  //                     <span className="text-white">
  //                       <span className="text-white">
  //                         {" "}
  //                         [
  //                         {items.station_path.map((e, i) => {
  //                           return (
  //                             <span key={i} className="">
  //                               {e},&nbsp;
  //                             </span>
  //                           );
  //                         })}
  //                         ]{" "}
  //                       </span>
  //                     </span>
  //                   </div>{" "}
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Date : <span className="text-white">{items.date}</span>
  //                   </div>
  //                   <div className="text-gray-400 tracking-wider font-medium md:text-lg">
  //                     Distance :{" "}
  //                     <span className="text-white">
  //                       {items.destination_station_code -
  //                         items.origin_station_code}
  //                     </span>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-center space-x-2 py-3 md:py-0 md:space-x-4">
  //                   <div className="bg-black text-center p-2 py-1 tracking-wider text-sm rounded-md text-white">
  //                     {items.city}
  //                   </div>
  //                   <div className="bg-black text-center p-2 py-1 tracking-wider text-sm rounded-md text-white">
  //                     {items.state}
  //                   </div>
  //                 </div>
  //               </section>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   }
  // };

  return (
    <div>
      <Head>
        <title>Edvora</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="bg-[#101010] py-3 md:py-4">
        <section className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="text-white md:text-4xl text-3xl  font-bold tracking-wide">
            Edvora
          </div>
          {/* About Person */}
          <div className="text-white flex items-center">
            <span className="tracking-wider px-4 font-semibold">
              {user.name}
            </span>
            <img
              src={user?.url}
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
          </div>
        </section>
      </header>
      {/* Homepage */}
      <section className="bg-[#292929] text-white">
        {/* Top Menu */}
        <div className="container  mx-auto sticky top-0 left-0 z-20 bg-[#292929] p-4 justify-between flex items-center">
          <nav className="md:space-x-10 space-x-3 sm:space-x-6">
            <span
              onClick={() => setTab(0)}
              className={
                tab === 0
                  ? "sm:tracking-wider tracking-wide sm:text-base text-xs activeNav py-1 cursor-pointer"
                  : "sm:tracking-wider tracking-wide sm:text-base text-xs text-gray-300 py-1 cursor-pointer"
              }
            >
              Nearest rides ({nearestArray.length})
            </span>

            <span
              onClick={() => setTab(1)}
              className={
                tab === 1
                  ? "tracking-wider sm:text-base text-sm activeNav py-1 cursor-pointer"
                  : "tracking-wider sm:text-base text-sm text-gray-300 py-1 cursor-pointer"
              }
            >
              Upcoming rides ({upcomingArray.length})
            </span>

            <span
              onClick={() => setTab(2)}
              className={
                tab === 2
                  ? "tracking-wider sm:text-base text-sm activeNav py-1 cursor-pointer"
                  : "tracking-wider sm:text-base text-sm text-gray-300 py-1 cursor-pointer"
              }
            >
              Past rides ({pastArray.length})
            </span>
          </nav>
          <div className="relative">
            <div
              onClick={() => setFilter(!filter)}
              className="flex relative items-center cursor-pointer space-x-2"
            >
              <BsFilterLeft className="sm:text-xl text-2xl  font-bold " />
              <span className="tracking-wider font-semibold sm:inline-block hidden">
                Filters
              </span>
            </div>
            {/* Filter Popup */}
            <div
              className={
                filter
                  ? "bg-[#101010] px-4 py-3 w-44 right-0 absolute top-9 md:top-8 rounded-md"
                  : "hidden"
              }
            >
              <div className="tracking-wider border-b pb-1.5 w-full">
                Filters
              </div>

              <div>
                {" "}
                {/* State */}
                <select
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="bg-[#292929] cursor-pointer tracking-wider p-1 flex justify-between items-center outline-none w-full appearance-none my-2 px-2 rounded-md"
                >
                  <option className="tracking-wider">Select State...</option>
                  {data?.map((state, i) => {
                    return (
                      <option
                        key={i}
                        value={state.state}
                        className="tracking-wider"
                      >
                        {state.state}
                      </option>
                    );
                  })}
                </select>
                {/* City */}
                <select
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-[#292929] cursor-pointer tracking-wider p-1 flex justify-between items-center outline-none w-full appearance-none my-2 px-2 rounded-md"
                >
                  <option className="tracking-wider">Select City...</option>
                  {data?.map((city, i) => {
                    return (
                      <option
                        key={i}
                        value={city.city}
                        className="tracking-wider"
                      >
                        {city.city}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* {renderCards()} */}
      </section>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://assessment.api.vweb.app/rides");
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
