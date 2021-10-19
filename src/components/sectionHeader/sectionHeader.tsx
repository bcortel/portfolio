const SectionHeader = ({
  topTitle,
  botTitle,
  className,
}: {
  topTitle: string;
  botTitle: string;
  className?: string;
}) => {
  return (
    <header className={`text-center mb-14 ${className}`}>
      <h2 className="font-serif">
        <span className="font-bold block uppercase text-xl text-gray-500 tracking-widest">
          {topTitle}
        </span>
        <span className="font-bold uppercase text-4xl tracking-wider">
          {botTitle}
        </span>
      </h2>
    </header>
  );
};

export default SectionHeader;
