import Icon from "./Icon.jsx";

const pillClass =
  "inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

export default function PillLink({ href, icon, external = true, children }) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} className={pillClass} {...externalProps}>
      {icon ? <Icon name={icon} /> : null}
      {children}
    </a>
  );
}
