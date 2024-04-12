export function Menu(props: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[100px] flex justify-center items-center gap-12">
      {props.children}
    </div>
  );
}

export function MenuItem(props: {
  key: string;
  children: string;
  href: string;
  disabled: boolean;
}) {
  return (
    !props.disabled && (
      <a href={props.href} key={props.key} className="text-sm font-bold">
        {props.children}
      </a>
    )
  );
}
