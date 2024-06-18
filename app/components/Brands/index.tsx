import Image from "next/image";

type Brand = {
  id: number;
  name: string;
  href: string;
  image: string;
};

const brandsData: Brand[] = [
  {
    id: 1,
    name: "ODA",
    href: "https://vedirasolutions.com/",
    image: "/images/logo/vedria-logo.png",
  },
  // {
  //   id: 2,
  //   name: "Tailgrids",
  //   href: "https://tailgrids.com",
  //   image: "/images/brands/tailgrids.svg",
  // },
  // {
  //   id: 3,
  //   name: "Lineicons",
  //   href: "https://lineicons.com",
  //   image: "/images/brands/lineicons.svg",
  // },
  // {
  //   id: 4,
  //   name: "GrayGrids",
  //   href: "https://graygrids.com",
  //   image: "/images/brands/graygrids.svg",
  // },
  // {
  //   id: 5,
  //   name: "TailAdmin",
  //   href: "https://tailadmin.com",
  //   image: "/images/brands/tailadmin.svg",
  // },
];

const Brands = () => {
  return (
    <section className="pt-2">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md py-8 px-8  sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 -mt-20 flex w-full max-w-[260px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[330px] xl:mx-6 xl:max-w-[350px] 2xl:mx-8 2xl:max-w-[360px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative flex h-40 w-full  items-center justify-center transition hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
      >
        <Image
          src={image}
          alt={name}
          quality={100}
          fill
          className="  flex items-center justify-center rounded-md border   object-contain  filter"
        />
      </a>
    </div>
  );
};
