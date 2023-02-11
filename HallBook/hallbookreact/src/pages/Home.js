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

export default function Home() {
  return (
    <div className="mx-auto mt-10 flex min-h-screen max-w-4xl flex-col gap-12 p-2 md:w-2/3 md:gap-8">
      {hallList.map((hall) => (
        <HallCard
          key={hall.id}
          id={hall.id}
          name={hall.name}
          capacity={hall.capacity}
          slides={hall.slides}
        />
      ))}
    </div>
  );
}
