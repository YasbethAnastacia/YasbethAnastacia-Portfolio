import { contact } from "../../data/contact";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="px-5 md:px-10 lg:px-16 py-8 border-t border-pink-100 bg-[#FFF8F8]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <p className="font-semibold text-zinc-800">{contact.name}</p>
                    <p className="text-sm text-pink-500">{contact.role}</p>
                </div>

                <div className="flex items-center gap-5 text-sm">
                    <a
                        href={`mailto:${contact.email}`}
                        className="text-zinc-600 hover:text-pink-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
                    >
                        Email
                    </a>
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-600 hover:text-pink-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-600 hover:text-pink-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
                    >
                        GitHub
                    </a>
                </div>

                <p className="text-sm text-zinc-500">© {year}</p>
            </div>
        </footer>
    );
};
