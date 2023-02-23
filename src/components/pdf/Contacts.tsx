import { BsFillTelephoneFill } from "react-icons/bs";
import type { ContactsType, ThemeType } from "../../utils";
import { MdAlternateEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

interface ContactsProps {
  contacts: ContactsType;
  theme: ThemeType;
}

export const Contacts: React.FC<ContactsProps> = ({ contacts }) => (
  <div>
    <h3 className="text-md mb-2 text-left font-semibold uppercase">Contacts</h3>
    <div className="flex flex-col">
      <div>
        <BsFillTelephoneFill size={20} />
        <p>{contacts.tel}</p>
      </div>
      <div>
        <MdAlternateEmail size={20} />
        <p>{contacts.email}</p>
      </div>
      <div>
        <HiLocationMarker size={20} />
        <p>{contacts.location}</p>
      </div>
    </div>
  </div>
);
