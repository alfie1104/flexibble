import { UserProfile } from "@/common.types";
import { getUserProjects } from "@/lib/actions";

type Props = {
  userId: string;
  projectId: string;
};

const RelatedProjects = async ({ userId, projectId }: Props) => {
  const result = (await getUserProjects(userId)) as {
    user?: UserProfile;
  };

  return <div>RelatedProjects</div>;
};

export default RelatedProjects;
