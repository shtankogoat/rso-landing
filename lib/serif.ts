import { Source_Serif_4 } from "next/font/google";

/** Шрифт лонгридов: читаемая антиква с кириллицей (только раздел «Новости») */
export const serif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--serif",
});
