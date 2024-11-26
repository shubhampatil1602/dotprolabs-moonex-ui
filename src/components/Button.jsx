import { cn } from '../../lib';

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        'text-sm font-extrabold h-[47px] w-[159px] rounded-full',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
