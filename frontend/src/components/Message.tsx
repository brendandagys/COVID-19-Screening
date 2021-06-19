import Alert from 'react-bootstrap/Alert'

interface MessageProps {
  variant: string
  children: React.ReactNode
}

const Message = ({ variant, children }: MessageProps): JSX.Element => {
  return <Alert variant={variant}>{children}</Alert>
}

export default Message
