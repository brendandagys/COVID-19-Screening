/// <reference types="react" />
interface MessageProps {
    variant: string;
    children: React.ReactNode;
}
declare const Message: ({ variant, children }: MessageProps) => JSX.Element;
export default Message;
