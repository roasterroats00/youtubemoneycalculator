import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
    title: "Contact Us - YouTube Money Calculator",
    description: "Get in touch with the YouTube Money Calculator team. We're available for general support, business partnerships, and feature requests.",
    openGraph: {
        title: "Contact Us - YouTube Money Calculator",
        description: "Reach out to our analytics team. We are here to help creators maximize their revenue intelligence.",
        type: "website",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
