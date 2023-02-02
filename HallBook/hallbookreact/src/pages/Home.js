import HallCard from "../components/Hall/HallCard";

const hallList = [
    {
        id:"1",
        name:"Library Hall",
        capacity:"150",
    },
    {
        id:"2",
        name:"A Hall",
        capacity:"70",
    },
    {
        id:"3",
        name:"B Hall",
        capacity:"70",
    },
    {
        id:"4",
        name:"C Hall",
        capacity:"70",
    },



]

export default function Home(){
    return (
        <div className="flex flex-col w-2/3 mx-auto min-h-screen gap-8 mt-10 p-2">
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