import logoUrl from "../../assets/CremationTrackerLogo.png";

type BrandLogoProps = {
  size?: "hero" | "compact";
  tagline?: string;
};

export function BrandLogo({ size = "hero", tagline }: BrandLogoProps) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      <img className="brand-mark" src={logoUrl} alt="Cremation Tracker" />
      {tagline ? <p className="brand-tagline">{tagline}</p> : null}
    </div>
  );
}
