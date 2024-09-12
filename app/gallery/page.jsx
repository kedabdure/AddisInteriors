import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="rounded-lg"
            src="/image/badroom.jpg"
            alt="Bedroom"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery2.jpg"
            alt="Gallery 2"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery.jpg"
            alt="Gallery"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="rounded-lg"
            src="/image/swiper1.jpg"
            alt="Swiper 1"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery11.jpg"
            alt="Gallery 11"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/image/living.jpg"
            alt="Living Room"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery14.jpg"
            alt="Gallery 14"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery15.jpg"
            alt="Gallery 15"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery12.jpg"
            alt="Gallery 12"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery7.jpg"
            alt="Gallery 7"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery11.jpg"
            alt="Gallery 11"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/image/gallery3.jpg"
            alt="Gallery 3"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
