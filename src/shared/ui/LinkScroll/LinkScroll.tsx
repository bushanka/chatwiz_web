import { MutableRefObject, useEffect, useRef } from "react";
import { TextSize, TextVariant, Typography } from "../Text";

interface scrollProps {
    name: string;
    size?: TextSize;
    variant?: TextVariant;
    bold?: boolean;
    href: string;
    func?: () => void;
}

export const LinkScroll = (props: scrollProps) => {
    const {
        name,
        href,
        size,
        variant,
        bold,
        func,
    } = props;
    const Link = useRef() as MutableRefObject<HTMLAnchorElement>;

    const handleClick = (e: MouseEvent) => {
        console.log(1111111)
        e.preventDefault();

        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    useEffect(() => {
        Link.current?.addEventListener('click', handleClick);

        return () => {
            Link.current?.removeEventListener('click', handleClick);
        };
    }, [])

    return (
        <a
            href={href}
            ref={Link}
            onClick={func}
        >
            <Typography
                text={name}
                size={size}
                variant={variant}
                bold={bold}
            />
        </a>
    )
};
