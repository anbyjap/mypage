interface Props {
    link: string;
    content?: string;
}

export const LearnMoreButton = ({link, content = "Learn More"} : Props) => 
    <a
        href={link}
        target="_blank"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-font bg-second rounded-lg hover:shadow-lg"
    >
        {content}
        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
