import GroupDashboard from "@/components/group/group-dashboard";
import { GroupDetails } from "@/type/group.type";
import { Box } from "@mui/material";

const group: GroupDetails = {
  id: 1,
  title: "Trip to Manali",
  description: "Friends' trip",
  createdAt: "2026-10-31T10:00:00Z",
  updatedAt: "2026-10-31T10:00:00Z",
  imageUrl: "/images/manali.jpg",
  memberCount: 5,
  expenses: 12000,
  ownerId : 1,
  Owner: {
    id: 10,
    username: "Jashan",
  },
};
export default function GroupPage() {

    return(
        <Box>
            <GroupDashboard group={group} />
        </Box>
    )
}