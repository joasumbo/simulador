

type BackToTopProps = {
  scroll: boolean;
};

export default function BackToTop({ scroll }: BackToTopProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scroll && (
        <a
          className="scroll-top scroll-to-target"
          href="#top"
          onClick={handleClick}
        >
          <span><i className="flaticon-up-arrow-1"></i>Top</span>
        </a>
      )}
    </>
  );
}
