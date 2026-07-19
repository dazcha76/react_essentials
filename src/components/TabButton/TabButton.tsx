type TabButtonProps = {
  children: React.ReactNode;
};

export default function TabButton(props: TabButtonProps) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
