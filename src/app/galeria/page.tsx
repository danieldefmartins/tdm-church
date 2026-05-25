import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Veja os momentos especiais da TDM Church — cultos, batismos, louvor, adoração e comunidade. Fotos e vídeos reais dos nossos cultos.",
};

const categories = [
  { id: "all", label: "Todos" },
  { id: "worship", label: "Adoração" },
  { id: "pastor", label: "Pr. Alexandre" },
  { id: "baptism", label: "Batismo" },
  { id: "women", label: "Mulheres" },
  { id: "community", label: "Comunidade" },
];

/* ── worship / congregation ── */
const worshipPhotos = [
  { src: "/images/Photos-Videos/526804262_18396594418143219_6247029674856534470_n.jpg", alt: "Mulher adorando com pandeiro", cat: "worship" },
  { src: "/images/Photos-Videos/527303976_18396594385143219_9034168328906910484_n.jpg", alt: "Congregação adorando", cat: "worship" },
  { src: "/images/Photos-Videos/528306221_18396594337143219_8360075478986114786_n.jpg", alt: "Momento de adoração", cat: "worship" },
  { src: "/images/Photos-Videos/528857871_18396594346143219_8017946801379033765_n.jpg", alt: "Adoração na congregação", cat: "worship" },
  { src: "/images/Photos-Videos/529230592_18396594475143219_706532717718735060_n.jpg", alt: "Momento de louvor", cat: "worship" },
  { src: "/images/Photos-Videos/527295847_18396594364143219_7869423696559982621_n.jpg", alt: "Congregação cantando", cat: "worship" },
  { src: "/images/Photos-Videos/527338908_18396594397143219_5978463486155751785_n.jpg", alt: "Adoração", cat: "worship" },
  { src: "/images/Photos-Videos/527390288_18396594445143219_8791705056099889147_n.jpg", alt: "Louvor e adoração", cat: "worship" },
  { src: "/images/Photos-Videos/528219783_18396594436143219_6374281253739919552_n.jpg", alt: "Adoração no culto", cat: "worship" },
  { src: "/images/Photos-Videos/528326371_18396594454143219_2548641607227441448_n.jpg", alt: "Congregação adorando", cat: "worship" },
  { src: "/images/Photos-Videos/528699545_18396594466143219_7288862407957863901_n.jpg", alt: "Louvor coletivo", cat: "worship" },
  { src: "/images/Photos-Videos/670290276_18576905548038256_5755455007463808641_n.jpg", alt: "Cantoras jovens no palco", cat: "worship" },
  { src: "/images/Photos-Videos/613657908_18419576698143219_257539174028556150_n.jpg", alt: "Músico com guitarra", cat: "worship" },
  { src: "/images/Photos-Videos/615407631_18550432036038256_7208430348224814070_n.jpg", alt: "Momento no culto", cat: "worship" },
];

/* ── pastor alexandre ── */
const pastorPhotos = [
  { src: "/images/Photos-Videos/Pr-Alexandre.jpg", alt: "Pr. Alexandre pregando com mão estendida", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre2.jpg", alt: "Pr. Alexandre lendo a Bíblia", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre5.jpg", alt: "Pr. Alexandre no palco", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre9.jpg", alt: "Pr. Alexandre com cruz ao fundo", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre14.jpg", alt: "Pr. Alexandre orando pelo povo", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre3.jpg", alt: "Pr. Alexandre pregando", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre4.jpg", alt: "Pr. Alexandre ministrando", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre6.jpg", alt: "Pr. Alexandre no púlpito", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre7.jpg", alt: "Pr. Alexandre em oração", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre10.jpg", alt: "Pr. Alexandre", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre11.jpg", alt: "Pr. Alexandre ensinando", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre12.jpg", alt: "Pr. Alexandre louvando", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre13.jpg", alt: "Pr. Alexandre no altar", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre15.jpg", alt: "Pr. Alexandre abençoando", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre16.jpg", alt: "Pr. Alexandre", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre17.jpg", alt: "Pr. Alexandre com o povo", cat: "pastor" },
  { src: "/images/Photos-Videos/Pr-Alexandre18.jpg", alt: "Pr. Alexandre pregando", cat: "pastor" },
  { src: "/images/Photos-Videos/650019878_18429183328143219_5906374747522973205_n.jpg", alt: "Pr. Alexandre com velas e congregação", cat: "pastor" },
  { src: "/images/Photos-Videos/650727567_18429183373143219_6410839749881018476_n.jpg", alt: "Pr. Alexandre com telão", cat: "pastor" },
];

/* ── baptism ── */
const baptismPhotos = [
  { src: "/images/Photos-Videos/523098151_18524808037030544_7887472504581379021_n.jpg", alt: "Batismo — mulher sendo batizada", cat: "baptism" },
  { src: "/images/Photos-Videos/524490633_18524808046030544_6071906744422372845_n.jpg", alt: "Abraço emocionante pós-batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/523370012_18524807962030544_4747526134383902307_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/523381456_18524808013030544_1407208516655384993_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/523411355_18524808016030544_6060370010237310104_n.jpg", alt: "Batismo na igreja", cat: "baptism" },
  { src: "/images/Photos-Videos/523411355_18524808061030544_7006024068141711030_n.jpg", alt: "Celebração do batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/523489875_18524807926030544_8342256403782647074_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/523856461_18524808010030544_3043881870079519186_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/523986814_18524807953030544_5074832351067911150_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/524061467_18524807989030544_7446467708407846115_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/524137072_18524808073030544_132435276713753328_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/524290921_18524808025030544_9061311440975567443_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/524424393_18524807971030544_5640861744950038281_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/524907891_18524807935030544_5038094472707988837_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/504876443_18507945940038256_9107886628462640032_n.jpg", alt: "Batismo", cat: "baptism" },
  { src: "/images/Photos-Videos/504491889_18507945949038256_5993430233711444650_n.jpg", alt: "Batismo", cat: "baptism" },
];

/* ── women's service ── */
const womenPhotos = [
  { src: "/images/Photos-Videos/Culto-de-mulheres.jpg", alt: "Culto de Mulheres — adoração", cat: "women" },
  { src: "/images/Photos-Videos/Culto-de-mulheres2.jpg", alt: "Culto de Mulheres — mão levantada", cat: "women" },
  { src: "/images/Photos-Videos/Culto-de-mulheres3.jpg", alt: "Culto de Mulheres", cat: "women" },
  { src: "/images/Photos-Videos/Culto-de-mulheres4.jpg", alt: "Culto de Mulheres", cat: "women" },
  { src: "/images/Photos-Videos/Culto-de-mulheres5.jpg", alt: "Mulheres adorando", cat: "women" },
  { src: "/images/Photos-Videos/Culto-de-mulheres6.jpg", alt: "Culto de Mulheres", cat: "women" },
  { src: "/images/Photos-Videos/Culto-de-mulheres7.jpg", alt: "Culto de Mulheres", cat: "women" },
  { src: "/images/Photos-Videos/Culto-de-mulheres8.jpg", alt: "Culto de Mulheres", cat: "women" },
  { src: "/images/Photos-Videos/Culto-de-mulheres9.jpg", alt: "Mulheres unidas adorando", cat: "women" },
];

/* ── community / general ── */
const communityPhotos = [
  { src: "/images/Photos-Videos/527927531_18396595075143219_1901539867358092896_n.jpg", alt: "Dedicação de bebê — Stella & Aryel", cat: "community" },
  { src: "/images/Photos-Videos/528577146_18396595042143219_5228020265744675484_n.jpg", alt: "Mulher homenageada com flores", cat: "community" },
  { src: "/images/Photos-Videos/528659816_18396595102143219_8695559956128241952_n.jpg", alt: "Momento no culto", cat: "community" },
  { src: "/images/Photos-Videos/528724399_18396595093143219_2994705468517847719_n.jpg", alt: "Comunidade TDM", cat: "community" },
  { src: "/images/Photos-Videos/526838451_18396595030143219_7051025870573855721_n.jpg", alt: "Momento de oração", cat: "community" },
  { src: "/images/Photos-Videos/527149697_18396595063143219_6152280337523329448_n.jpg", alt: "Culto de celebração", cat: "community" },
  { src: "/images/Photos-Videos/527295847_18396595012143219_4148480223897047132_n.jpg", alt: "Comunidade unida", cat: "community" },
  { src: "/images/Photos-Videos/695943242_18584877118038256_6369725103238529442_n.jpg", alt: "Culto com cruz ao fundo", cat: "community" },
  { src: "/images/Photos-Videos/698483876_18584877088038256_8314401509394760064_n.jpg", alt: "Abraço na congregação", cat: "community" },
  { src: "/images/Photos-Videos/548296443_18401838529143219_902555118183139563_n.jpg", alt: "Jovem adorando", cat: "community" },
  { src: "/images/Photos-Videos/549768183_18401838598143219_8437497373732346550_n.jpg", alt: "Mulher adorando com mão levantada", cat: "community" },
  { src: "/images/Photos-Videos/617850621_18419963566143219_2151709232702837070_n.jpg", alt: "Pr. Alexandre pregando com telão", cat: "community" },
  { src: "/images/Photos-Videos/618838316_18419963503143219_4084491921846707090_n.jpg", alt: "Momento de culto", cat: "community" },
  { src: "/images/Photos-Videos/619247653_18419963557143219_4537226540081494379_n.jpg", alt: "Momento de culto", cat: "community" },
];

const allPhotos = [
  ...worshipPhotos.slice(0, 3),
  ...pastorPhotos.slice(0, 3),
  ...baptismPhotos.slice(0, 3),
  ...womenPhotos.slice(0, 3),
  ...communityPhotos.slice(0, 3),
  ...worshipPhotos.slice(3),
  ...pastorPhotos.slice(3),
  ...baptismPhotos.slice(3),
  ...womenPhotos.slice(3),
  ...communityPhotos.slice(3),
];

const videos = [
  "/images/Photos-Videos/Great-for-website.mp4",
  "/images/Photos-Videos/Great-for-website2.mp4",
  "/images/Photos-Videos/Great-for-website3.mp4",
  "/images/Photos-Videos/Great-for-website4.mp4",
  "/images/Photos-Videos/Great-for-website5.mp4",
];

export default function GaleriaPage() {
  return (
    <>
      {/* Hero with video */}
      <section className="relative py-28 sm:py-36 bg-black overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/images/Photos-Videos/Great-for-website.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Camera className="w-7 h-7 text-secondary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
            Nossa <span className="italic text-secondary">Galeria</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Momentos reais de fé, adoração e comunidade. Sinta a energia dos
            nossos cultos e veja como somos uma família.
          </p>
        </div>
      </section>

      {/* Video reel */}
      <section className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {videos.map((video, i) => (
              <VideoPlayer
                key={video}
                src={video}
                className="aspect-[9/16] sm:aspect-video rounded-lg"
                overlay={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured photos — large showcase */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {/* Large featured — candles photo */}
            <div className="col-span-2 lg:col-span-2 row-span-2 relative group rounded-sm overflow-hidden">
              <Image
                src="/images/Photos-Videos/650019878_18429183328143219_5906374747522973205_n.jpg"
                alt="Pastor Alexandre com congregação e velas — momento inesquecível"
                width={1200}
                height={900}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-lg font-display">Noite de Adoração</p>
                <p className="text-white/60 text-sm">Um momento inesquecível na presença de Deus</p>
              </div>
            </div>

            {/* Pastor preaching */}
            <div className="relative group rounded-sm overflow-hidden aspect-[3/4]">
              <Image
                src="/images/Photos-Videos/Pr-Alexandre.jpg"
                alt="Pr. Alexandre pregando"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Baptism */}
            <div className="relative group rounded-sm overflow-hidden aspect-[3/4]">
              <Image
                src="/images/Photos-Videos/523098151_18524808037030544_7887472504581379021_n.jpg"
                alt="Batismo na TDM"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Women worship */}
            <div className="relative group rounded-sm overflow-hidden aspect-video col-span-2 lg:col-span-1">
              <Image
                src="/images/Photos-Videos/Culto-de-mulheres.jpg"
                alt="Culto de Mulheres"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Worship singers */}
            <div className="relative group rounded-sm overflow-hidden aspect-video">
              <Image
                src="/images/Photos-Videos/670290276_18576905548038256_5755455007463808641_n.jpg"
                alt="Jovens cantando no louvor"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Hug */}
            <div className="relative group rounded-sm overflow-hidden aspect-[3/4]">
              <Image
                src="/images/Photos-Videos/698483876_18584877088038256_8314401509394760064_n.jpg"
                alt="Abraço na congregação"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Pastor reading Bible */}
            <div className="relative group rounded-sm overflow-hidden aspect-[3/4]">
              <Image
                src="/images/Photos-Videos/Pr-Alexandre2.jpg"
                alt="Pr. Alexandre lendo a Bíblia"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full masonry gallery */}
      <section className="py-16 sm:py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
              Galeria Completa
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black font-display">
              Todos os <span className="italic">Momentos</span>
            </h2>
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3 space-y-2 sm:space-y-3">
            {allPhotos.map((photo, i) => (
              <div
                key={`${photo.src}-${i}`}
                className="relative group break-inside-avoid rounded-sm overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-black text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Venha Fazer Parte Desta <span className="italic text-secondary">Família</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Esses momentos podem ser os seus também.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vempraigreja"
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              Vem Pra Igreja
            </Link>
            <Link
              href="/cultos"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Horários dos Cultos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
