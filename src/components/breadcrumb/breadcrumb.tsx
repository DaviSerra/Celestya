interface CrewProps {
    page: string;
    title: string;
}

const Breadcrumb = ({ page, title }: CrewProps) => {
    return (
        <div>
            <h1 className="text-3xl font-barlow-condensed uppercase text-white tracking-4 text-center sm:text-left"><span className="text-white/20 text-3xl px-2 sm:px-6 font-barlow-condensed">{page}</span>{title}</h1>
        </div>
    );
}

export default Breadcrumb;