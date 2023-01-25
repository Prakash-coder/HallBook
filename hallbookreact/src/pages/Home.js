import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            Home goes here
            <Link to="about">Click to view the about page</Link>
        </div>
    )
}