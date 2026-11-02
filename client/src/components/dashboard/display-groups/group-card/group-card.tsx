import { BaseGroup } from "@/type/group.type";
import Card from "../../card/card";
import GroupContent from "./group-content/group-content";
import { GroupContentType } from "./group-content/group-content.type";


interface GroupCardProp {
    group  : BaseGroup
}
export default function GroupCard ({group} : GroupCardProp) {

    return (
        <Card>
            <GroupContent group={group}/>
        </Card>
    )
}