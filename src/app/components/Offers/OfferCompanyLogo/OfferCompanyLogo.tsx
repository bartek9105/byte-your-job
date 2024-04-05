import Image from "next/image";

interface OfferCompanyLogoProps {
  imgUrl: string;
  alt: string;
}

export const OfferCompanyLogo = ({ imgUrl, alt }: OfferCompanyLogoProps) => {
  return <Image src={imgUrl} width="36" height="36" alt={alt} />;
};
