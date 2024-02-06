import Section from "./Section";

export default function Content() {
  return (
    <div className="container mx-auto sm:px-28 px-10">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </ul>
    </div>
  );
}
