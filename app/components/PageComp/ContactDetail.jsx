import { getContact } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";

export default async function ContactDetail() {
  const contacts = await getContact();

  return (
    <>
      <div className="pb-12 md:pb-2">
        <div className="lg:pt-6 pb-6 md:pb-2 lg:w-[80%] mx-auto  text-center">
          <h1 className="font-Playfare text-6xl font-medium py-2">
            Get In Touch
          </h1>
          <p className="text-text text-sm w-[90%]  md:w-[80%] mx-auto">
            Fill out the form below and let&apos;s discuss how I can help bring
            your vision to life
          </p>
        </div>
        <div className="flex flex-col-reverse py-5 gap-4 items-center">
          {contacts.items.map((contact) => (
            <div
              key={contact.sys.id}
              className="bg-background2 py-8 px-4 w-[85%]  md:w-[75%] lg:w-[70%] rounded-md flex hover:scale-[1.02] cursor-pointer"
            >
              {contacts.includes.Asset.map(
                (img) => img.sys.id === contact.fields.img.sys.id
              ) ? (
                <div className="">
                  <Image
                    src={
                      "https:" +
                      contacts.includes.Asset.find(
                        (img) => img.sys.id === contact.fields.img.sys.id
                      ).fields.file.url
                    }
                    alt="contact-image"
                    width={28}
                    height={28}
                    className=" "
                  />
                </div>
              ) : null}
              <Link
                target="_blank"
                href={`https://www.${contact.fields.link}.com/`}
              >
                <div className="pl-3 ">
                  <h6 className="text-lg font-medium">{contact.fields.name}</h6>
                  <h6 className="text-text ">{contact.fields.detail}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
