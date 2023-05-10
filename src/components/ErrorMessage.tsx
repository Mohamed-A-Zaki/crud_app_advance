type Props = {
  error: string;
};

const ErrorMessage = ({ error }: Props) => {
  return <div className="alert alert-danger mt-3 text-center">{error}</div>;
};

export default ErrorMessage;
