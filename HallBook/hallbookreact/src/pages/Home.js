import HallCard from "../components/Hall/HallCard";

const hallList = [
    {
        id:"1",
        name:"Library Hall",
        capacity:"150",
        photo:"https://plus.unsplash.com/premium_photo-1664302662512-ffed9b5db747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        id:"2",
        name:"A Hall",
        capacity:"70",
        photo:"https://plus.unsplash.com/premium_photo-1664302662512-ffed9b5db747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        id:"3",
        name:"B Hall",
        capacity:"70",
        photo:"https://plus.unsplash.com/premium_photo-1664302662512-ffed9b5db747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

    },
    {
        id:"4",
        name:"C Hall",
        capacity:"70",
        photo:"https://plus.unsplash.com/premium_photo-1664302662512-ffed9b5db747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },



]

export default function Home(){
    return (
        <div className="flex flex-col md:w-2/3 max-w-4xl mx-auto min-h-screen gap-12 md:gap-8 mt-10 p-2">
            {hallList.map((hall)=>(
                <HallCard
                key={hall.id}
                name={hall.name}
                capacity={hall.capacity}
                />
            ))}
        </div>
    )
}