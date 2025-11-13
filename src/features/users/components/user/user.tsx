import { useUser } from "~/features/users/api/get-user";

type UserProps = {
  userId: string;
};

export const User = ({ userId }: UserProps) => {
  const { data } = useUser(userId);

  return <span>{data?.name}</span>;
};
