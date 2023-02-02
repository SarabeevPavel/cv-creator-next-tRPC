import type { UserType } from "../../utils";
import { Input } from "../fields";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

interface ContactsProps {
  user: UserType;
  onChange: (newUser: UserType) => void;
}

export const Contacts: React.FC<ContactsProps> = ({ user, onChange }) => {
  return (
    <div>
      <h3 className="text-md mb-2 text-left font-semibold">Contacts</h3>
      <Input
        label={<BsFillTelephoneFill size={20} />}
        placeholder="XXX (XXX) XX-XX"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onChange({
            ...user,
            contacts: { ...user.contacts, tel: e.currentTarget.value },
          });
        }}
        value={user.contacts.tel}
      />
      <Input
        label={<MdAlternateEmail size={20} />}
        placeholder="example@mail.com"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onChange({
            ...user,
            contacts: { ...user.contacts, email: e.currentTarget.value },
          });
        }}
        value={user.contacts.email}
      />
      <Input
        label={<HiLocationMarker size={20} />}
        placeholder="Kyiv, Ukraine"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onChange({
            ...user,
            contacts: {
              ...user.contacts,
              location: e.currentTarget.value,
            },
          });
        }}
        value={user.contacts.location}
      />
    </div>
  );
};

// export {};
