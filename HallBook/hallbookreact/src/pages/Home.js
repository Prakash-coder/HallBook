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

]


export default function Home(){
    return (
        <div>
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