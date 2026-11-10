import Image from "next/image";

/** Фото-слот сайта (.photo): картинка из public/img/photos/<name>.jpg на всю площадь блока */
/** mobilePos — какая часть фото видна на телефоне (object-position), чтобы в узком кадре был главный герой */
export function Photo({ name, sizes, priority = false, mobilePos }: { name: string; sizes: string; priority?: boolean; mobilePos?: string }) {
  return (
    <div className="photo has-photo" style={mobilePos ? ({ "--m-pos": mobilePos } as React.CSSProperties) : undefined}>
      <Image src={`/img/photos/${name}.jpg`} alt="" fill sizes={sizes} priority={priority} />
    </div>
  );
}
