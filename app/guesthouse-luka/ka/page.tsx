import type {Metadata} from "next";
import GuesthouseHome from "../GuesthouseHome";

export const metadata: Metadata = {
  title: "Guesthouse Luka — დასვენება უშგულში",
  description: "თბილი საოჯახო სასტუმრო ისტორიულ ჩაჟაშში, უშგულში — სვანური კოშკებისა და კავკასიონის მთების გარემოცვაში.",
};

export default function GuesthouseLukaGeorgian() {
  return <GuesthouseHome lang="ka" />;
}
