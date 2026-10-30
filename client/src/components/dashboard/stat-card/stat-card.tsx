import Card from "../card/card";
import StatCardContent from "./stat-card-content/stat-card-content";
import { StatCardContentType } from "./stat-card-content/stat-card-content.type";


export default function StatCard ({stat} : {stat : StatCardContentType}) {
    return (
        <Card>
            <StatCardContent  content={stat}/>
        </Card>
    )
}