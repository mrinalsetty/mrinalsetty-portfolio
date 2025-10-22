import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function LinkButton({
  href,
  children,
  variant = "secondary",
  external = false,
  className = "",
}: LinkButtonProps) {
  const baseClasses = "px-3 py-1.5 rounded-lg transition-colors";

  const variants = {
    primary:
      "bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90",
    secondary:
      "border border-slate-300/70 dark:border-slate-700/70 hover:bg-slate-100/70 dark:hover:bg-slate-800/70",
  };

  const finalClasses =
    `${baseClasses} ${variants[variant]} ${className}`.trim();

  return (
    <a
      href={href}
      className={finalClasses}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
