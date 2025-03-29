interface CrewProps {
    page: string;
    title: string;
}

const Breadcrumb = ({ page, title }: CrewProps) => {
    return (
        <div>
            <h1 className="md:text-2xl text-sm text-center text-white lg:text-white font-bellefair md:font-barlow-condensed uppercase md:tracking-4 sm:text-left"><span className="text-white/20 text-base md:text-2xl lg:text-3xl px-2 sm:px-6 font-barlow-condensed">{page}</span>{title}</h1>
        </div>
    );
}

export default Breadcrumb;