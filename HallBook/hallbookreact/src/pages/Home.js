import { useEffect, useState } from "react";
import HallCard from "../components/Hall/HallCard";

const hallList = [
  {
    id: "1",
    name: "Library Hall",
    capacity: "150",
    slides: [
      {
        url: "https://plus.unsplash.com/premium_photo-1664302662512-ffed9b5db747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "libraryHallImg1",
      },
      {
        url: "https://images.unsplash.com/photo-1527698334848-f475f9d99449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
        title: "libraryHallImg2",
      },
      {
        url: "https://images.unsplash.com/photo-1566596343373-30675086c273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "libraryHallImg3",
      },
    ],
  },
  {
    id: "2",
    name: "A Hall",
    capacity: "70",
    photo:
      "https://plus.unsplash.com/premium_photo-1664302662512-ffed9b5db747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    name: "B Hall",
    capacity: "70",
    photo:
      "https://plus.unsplash.com/premium_photo-1664302662512-ffed9b5db747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "4",
    name: "C Hall",
    capacity: "70",
    photo:
      "https://plus.unsplash.com/premium_photo-1664302662512-ffed9b5db747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];


function addBookings(hallList){
  const bookings = {};  
  const today = new Date();
  for (let i = 0; i <= 10; i++){
    const date = new Date(today.getTime()+i*24*3600*1000);
    bookings[date.toISOString().slice(0,10)]= {}
  }
  for (const hall of hallList){
    hall.bookings = bookings;
  }
}

addBookings(hallList)
//when the user supposedly submits the book hall request and the request is still pending
hallList[0].bookings['2023-02-24']['10:00-12:00']= {user:'John',event:"orientation"}
hallList[0].bookings['2023-02-24']['14:00-15:00']= {user:'Mike',event:"initiation"}




export default function Home() {

  /*const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/halls_api/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:,", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  if(loading) return "loading..."
  if(error) return "error..."

  console.log(data)*/

  return (
    <div className="mx-auto mt-10 flex min-h-screen max-w-4xl flex-col gap-12 p-2 md:w-2/3 md:gap-8">
      {hallList.map((hall) => (
        <HallCard
          key={hall.id}
          id={hall.id}
          name={hall.name}
          capacity={hall.capacity}
          slides={hall.slides}
          bookings={hall.bookings}
        />
      ))}
    </div>
  );
}
