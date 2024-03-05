import { IconButton, Icon } from "@chakra-ui/react";

import { IContacts } from "../../types/contacts/interface";

export const SocialMedias = (contacts?: IContacts) => {
  return (
    <IconButton
      aria-label="icon-ib"
      variant="none"
      color="white"
      cursor="pointer"
      _hover={{
        transform: "scale(1.5)",
        transition: "transform 0.2s ease-in-out",
        color: contacts?.color,
      }}
      onClick={() => window.open(contacts?.link, "_blank")}
    >
      <Icon height="32px" width="32px" as={contacts?.icon} />
    </IconButton>
  );
};
