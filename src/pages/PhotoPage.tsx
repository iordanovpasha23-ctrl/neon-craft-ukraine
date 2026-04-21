import truck1 from "@/assets/truck-1.jpg";
import truck2 from "@/assets/truck-2.jpg";
import truck3 from "@/assets/truck-3.jpg";

const trucks = [
  { src: truck1, alt: "Вантажний автомобіль Mercedes Sprinter" },
  { src: truck2, alt: "Завантаження вантажівки коробками" },
  { src: truck3, alt: "Парк вантажних автомобілів" },
];

const PhotoPage = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-primary text-glow-green text-center mb-10">
          Наш вантажний транспорт
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {trucks.map((t, i) => (
            <div
              key={i}
              className="glass-panel rounded-xl overflow-hidden border border-border"
            >
              <img
                src={t.src}
                alt={t.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
