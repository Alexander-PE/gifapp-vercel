type Props = {
    title?: string,
    url?: string
}

export const GifGridItem = ({ title, url }: Props) => {
    return (
        <img className="max-w-[337px] rounded-t-lg shadow-md" src={url} />
    )
}