const mongoose = require("mongoose");
const Whale = require("../../api/whales/whale.model");
require("dotenv").config();
const whales = [
  {
    name: "Bowhead Whale",
    image:
      "https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/Bowhead-Whale.png",
    scientificName: "Balaena mysticetus",
    length: "14-18 meters",
    weight: "Up to 100 tonnes",
    description:
      "Also known as the Arctic or polar whale, the bowhead whale has a distinctive bow-like jaw structure, hence the name. Bowheads have the largest mouth of any extant animal species, making them efficient filter-feeders. Unlike most of the other whale species, bowhead whales do not feature a dorsal fin. Bowhead whales have an estimated lifespan of over 200 years, making them the longest-living mammals on Earth. Their population is prevalent throughout the Arctic and sub-Arctic waters.",
  },
  {
    name: "Amazon River Dolphin",
    image:
      "https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/Amazon-River-Dolphin--Pink-Animal-Water-Mammal-MPS-KS2.png",
    scientificName: "Inia geoffrensis",
    length: "2.5 meters",
    weight: "185kg",
    description: "The Amazon river dolphin is one of the only two known species of river dolphin (Family Iniidae) found in South America. While the exact population of the Amazon river dolphins is unknown, three subspecies have been identified that are located in different parts of the Amazon basin. The largest size an individual of this species can reach is 2.5 meters and weigh as much as 408 lb (185 kg). Due to s*xual dimorphism, male Amazon river dolphins are 55 percent heavier and 16 percent longer than the female population. The dorsal and pectoral fins of this species are larger relative to their body.The only other member of the river dolphin family is the Araguaian river dolphin. The species is nearly identical to their relatives, except they feature a dorsal ridge instead of a fin.",
  },
  {
    name: "Southern right Whale",
    image:
      "https://coastalstudies.org/wp-content/uploads/2013/11/right-whale.gif",
    scientificName: "Eubalaena australis",
    length: "15 meters",
    weight: "80-90 tonnes",
    description: "Unlike the other two right whale species, the Southern right whales are not threatened or endangered. According to the most recent estimates, the Southern right whale population is close to 10,000 individuals and is fairly widespread in the lower part of the Southern Hemisphere. A unique behavioral trait of the Southern right whales is tail sailing (lifting the tail out of the water surface). Also, they are often attracted to passing ships and vessels and trail them over long distances.",
  },
  {
    name: "Blue Whale",
    image: 
    "https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/blue-whale.png",
    scientificName: "Balaenoptera musculus",
    length: "29 meters",
    weight: "173 tonnes",
    description: "The Blue whale is one of the eight [and most prominent] species in the genus Balaenoptera. Once abundant in the world’s oceans, the blue whale species now have about 10,000-25,000 individuals remaining today. About three subspecies of blue whale have been identified so far: B.m. musculus in North Atlantic and Pacific waters, B. m. intermedia in South Atlantic ocean, and B. m. brevicauda or Pygmy blue whale in the South Pacific and the Indian Ocean. They are the largest known animal species on Earth.",
  },
  {
    name: "Fin Whale",
    image: 
    "https://i.pinimg.com/originals/1f/c2/66/1fc2667e18c241e1baba34b832636d05.png",
    scientificName: "Balaenoptera physalus",
    length: "25.9 meters",
    weight: "74 tonnes",
    description: "Fin whale or finback whale is the second-largest animal species on the planet after the mighty Blue whale. They are also fast swimmers with the highest recorded speed, close to 41 km/h. As a cosmopolitan species, the fin whale is found in every climatic region (except polar extremes). While fin whales are usually recognized by curved dorsal fins and distinctive asymmetrical markings on the body, they are often misidentified as blue whales or sei whales.",
  },
  {
    name: "Sei whale",
    image: "https://lakitours.com/wp-content/uploads/2021/05/sejwal.png",
    scientificName: "Balaenoptera borealis",
    length: "19.5 meters",
    weight: "28 tonnes",
    description: "The Sei whale is a large whale species in the genus Balaenoptera (same as the fin whale). They are blueish grey in appearance and feature a pointed rostrum (front part of the whale’s mouth, including the jaw) and arched dorsal fin. Sei whales may often present with flesh wounds (white scars) all over their body. These scars are believed to be a result of “cookie-cutter” shark bites. Sei whale populations have been subjected to multiple mass death events in the past. One such event occurred in June 2015, when about 337 dead whales were discovered in a remote area of Patagonia, Chile.",
  },
  {
    name: "Humpback whale",
    image: "https://www.pnguniverse.com/wp-content/uploads/2021/11/Ballena-jorobada-bdc91a1a.png",
    scientificName: "Megaptera novaeangliae",
    length: "12-16 meters",
    weight: "25-30 tonnes",
    description: "The humpback whales are easily identified by their long pectoral fin and bulky body. As the only member of the genus Megaptera, humpback whales have other bodily attributes distinctive to them. Humpbacks are very popular among whale watchers and enthusiasts due to their frisky surfacing behavior (spy-hopping, tail-slapping, etc.) and singing or vocalization.",
  },
  {
    name: "Hector’s Dolphin",
    image: "https://whaleopedia.org/animalfund/wp-content/uploads/2013/10/Hectors-Dolphin.png",
    scientificName: "Cephalorhynchus hectori",
    length: "1.4 meters",
    weight: "40-60 kilos",
    description: "Hector’s dolphin is one of the four [and the most prominent] dolphin species in the genus Cephalorhynchus. Not only are they the smallest, but also one of the rarest dolphins on Earth.Identifying Hector’s dolphin is easy because of its distinctive, round dorsal fin. They are overall pale grey in appearance. The critically endangered Maui dolphin is a subspecies of Hector’s dolphin and is endemic to New Zealand.",
  },
  {
    name: "Short Finned Pilot",
    image: "https://whaleopedia.org/animalfund/wp-content/uploads/2013/10/Long-finned-Pilot-Whale-1024x280.png",
    scientificName: "Globicephala macrorhynchus",
    length: "Globicephala macrorhynchus",
    weight: "3 tonnes",
    description: "The short-finned pilot whale is one of the two whale species of the genus Globicephala the other being the long-finned pilot whale (Globicephala melas). As the name suggests, both species are distinguished by the length of their flippers. Short-finned pilot whales also have relatively smaller jaws and feature numerous white spots or scars all over the body. The shape of the dorsal fin may differ from one individual to another since it is determined by the individual’s age and s*xual orientation.",
  },
  {
    name: "Killer Whale",
    image: "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-killer-whale.png?itok=mpHhEa6Y",
    scientificName: "Orcinus orca",
    length: "6-8 meters",
    weight: "6 tonnes",
    description: "Killer whales, also known as orcas, are at the very top of the marine food chain. They are known to hunt other predatory species such as tiger sharks, great white sharks, and feisty leopard seals. They also prey on larger whales, including the sperm whale and grey whale. The killer whale is a highly social marine animal bound by complex social structures. Individuals live in a matriline society in which they spend their entire life with their mothers.",
  },
  {
    name: "Beluga Whale",
    image: "https://cdn.pixabay.com/photo/2020/09/30/07/33/beluga-whale-5614827_960_720.png",
    scientificName: "Delphinapterus leucas",
    length: "5.5 meters",
    weight: "1.9 tonnes",
    description: "The beluga whale is a large and distinctive whale species. It is the only living species of the genus Delphinapterus. Beluga whales lack a dorsal fin and are entirely white (the only marine species known with this attribute). In front of their head is a large but deformable biosonar, which allows them to produce high-pitched clicks to navigate and find prey. Belugas inhabit cold, arctic, and sub-arctic waters but are kept in aquariums across the world.",
  },
  {
    name: "Narwhal",
    image: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/4800/narwhal-clipart-xl.png",
    scientificName: "Monodon monoceros",
    length: "5.5 meters",
    weight: "1.6 tonnes",
    description: "Narwhal is a medium-sized whale species found exclusively in the Arctic waters. It is the only surviving species in the genus Monodon and part of the family Monodontidae, together with the beluga whale. Narwhal males (in rare cases female) feature a long, spiral tusk, an extended tooth that can grow up to 10 ft in length.",
  },
  {
    name: "Sperm Whale",
    image: "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-sperm-whale.png?itok=IBxI7-oi",
    scientificName: "Physeter macrocephalus",
    length: "16.20 meters",
    weight: "41 tonnes",
    description: "The sperm whale is the largest toothed whale and one of the three extant species of the sperm whale superfamily (Physeteroidea); the other two are pygmy sperm whale and dwarf sperm whale. About one-third of the sperm whale’s body is composed of its head alone. Its brain is the largest known of any species in the entire animal kingdom. Sperm whales are known to create several high-frequency clicks or vocalizations. The loudest sound that a sperm whale can produce is 230 dB at 15 kHz",
  },
  {
    name: "Bottlenose Dolphin",
    image: "https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/Bottlenose-Dolphin.png",
    scientificName: "Delphinus truncatus",
    length: "4 meters",
    weight: "300 kilos",
    description: "The bottlenose dolphin is a common name for the three extant whale species of the Tursiops genus, namely, the common bottlenose, the Burrunan, and the Indo-Pacific dolphin. Bottlenose dolphins are known for their cognitive abilities, such as mimicry and concept learning. Because of this and friendly nature towards humans, bottlenose dolphins are a common sight in aquarium shows worldwide. Moreover, they are also trained by several nations’ military (the United States and Russia) to detect enemy divers and underwater mines.",
  },
  {
    name: "Vaquita",
    image: "https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/vaquita.png",
    scientificName: "Phocoena sinus",
    length: "1.35 m",
    weight: "200 kilos",
    description: "Once thought to be extinct, the Vaquita or cochito is a species of porpoise (similar to dolphins) endemic to the Gulf of California. It is the world’s most endangered cetacean species known.",
  },
];

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allWhales = await Whale.find().lean();

    if (!allWhales.length) {
      console.log("[seed]: No estoy encontrando las ballenas ... ");
    } else {
      console.log(`[seed]: Encontrados ${allWhales.length} cuadros.`);
      await Whale.collection.drop();
      console.log("[seed]: Colección Whales eliminada correctamente");
    }
  })
  .catch((error) => console.log("[seed]: Error eliminando la colección -->", error))
  .then(async () => {
    await Whale.insertMany(whales);
    console.log("[seed]: Nuevas ballenas añadidas con éxito");
  })
  .catch((error) => console.log("[seed]: Error añadiendo las ballenas", error))
  .finally(() => mongoose.disconnect());
