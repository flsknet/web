import { useEvents } from "~/features/events/api/get-events";

type EventsProps = {
  organisationsId: string;
};

export const Events = ({ organisationsId }: EventsProps) => {
  const { data } = useEvents(organisationsId);

  return (
    <div>
      {data?.map(({ id, name, description }) => (
        <div key={id}>
          <div>{name}</div>
          <div>{description}</div>
        </div>
      ))}
    </div>
  );
};
