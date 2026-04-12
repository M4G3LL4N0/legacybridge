type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <div className="page-intro">
      <div className="page-intro-eyebrow">{eyebrow}</div>
      <h1 className="page-intro-title">{title}</h1>
      <p className="page-intro-body">{description}</p>
    </div>
  );
}
