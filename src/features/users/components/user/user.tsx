import { useUser } from "~/features/users/api/get-user";

type UserProps = {
  userId: string;
};

export const User = ({ userId }: UserProps) => {
  const { data, isPending } = useUser(userId);

  if (isPending) {
    return <span>...</span>;
  }

  return <span>{data!.name}</span>;
};
