import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";
import { Schema, SchemaFactory } from "@/components/Schema";

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
    const contactPageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "description": "Reach out to us for support or business inquiries.",
        "publisher": { "@id": "https://youtubemoneycalculator.net/#organization" }
    };

    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Contact Us", item: "/contact" },
    ]);

    return (
        <>
            <Schema data={contactPageSchema} />
            <Schema data={breadcrumbData} />
            <ContactClient />
        </>
    );
}
