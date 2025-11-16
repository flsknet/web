import type { ReactNode } from "react";
import { useLingui, Trans } from "@lingui/react/macro";

import { Modal, ModalTrigger } from "~/components/ui/modal";
import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import {
  createEventInputSchema,
  useCreateEvent,
} from "~/features/events/api/create-event";

type CreateEventProps = {
  organisationId: string;
  children?: ReactNode;
};

export const CreateEvent = ({ children, organisationId }: CreateEventProps) => {
  const { t } = useLingui();

  const { mutate } = useCreateEvent();

  return (
    <ModalTrigger>
      {children}
      <Modal title={t`Create an event`}>
        <Form
          onSubmit={(data) => mutate({ organisationId, data })}
          schema={createEventInputSchema}
        >
          <TextInput
            name="name"
            label={t`Name`}
            placeholder={t`Meeting`}
          />
          <TextInput
            name="description"
            label={t`Description`}
            placeholder={t`What is this event about?`}
          />
          <Button type="submit">
            <Trans>Create</Trans>
          </Button>
          <Button
            variant="secondary"
            slot="close"
          >
            <Trans>Cancel</Trans>
          </Button>
        </Form>
      </Modal>
    </ModalTrigger>
  );
};
