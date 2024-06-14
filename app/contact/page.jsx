import ContactDetail from "../components/PageComp/ContactForm";
import ContactForm from "../components/PageComp/ContactDetail";

export const metadata = {
  title: "Contact",
  description: "Contact me page",
};

export default function page() {
  return (
    <main className="mx-4 lg:mx-14 xl:mx-auto xl:max-w-xxxl bg-background1 text-white h-auto md:h-auto">
      <div className="grid md:grid-cols-2 py-10">
        <ContactForm />
        <ContactDetail />
      </div>
    </main>
  );
}
