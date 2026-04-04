import BannerImg from "../assets/img/banner.jpg";

export const Banner = () => {
  return (
    <div className="relative w-full h-96 flex items-end px-10 pt-2 shadow-lg overflow-hidden">
      <img
        src={BannerImg}
        alt="banner"
        className="absolute -z-10 w-full h-full"
      />
      <div className="w-full pb-10">
        <h1 className="text-5xl font-bold mb-1">Your Trust, is Our Honesty</h1>
        <p className="text-md font-medium">
          We show the true not entertainment
        </p>
      </div>
    </div>
  );
};
