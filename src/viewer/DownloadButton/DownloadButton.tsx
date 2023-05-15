import './DownloadButton.css';

interface DownloadButtonProps {
    url: string;
}
export const DownloadButton = ({ url }: DownloadButtonProps) => <a
    className="DownloadButton"
    href={url}
    title="Download file"
    target="_blank"
    download="Sergey_Komarovsky_CV" />
