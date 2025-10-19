const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center min-h-screen gap-5">
    <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
      <svg
        className="w-8 h-8 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <p className="text-red-500 text-base font-medium">{message}</p>
  </div>
);

export default ErrorMessage;
