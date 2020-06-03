let categories=['Dog','Cat','Bird','Small Pet'];
class AnimalProduct{
    constructor(id,productImage,productTitle,productDescription,productPrice,productCategory){
        this.id=id;
        this.productImage=productImage;
        this.productTitle=productTitle;
        this.productDescription=productDescription;
        this.productPrice=productPrice;
        this.productCategory=productCategory;
        this.statusPanier=false;
        this.statusFavori=false;
    }
}
//Dog Products
let productDog1=new AnimalProduct(
    1,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/medium/puppy/5/400/4892_pla_royal_canin_shn_medium_puppy_packshot_5.jpg",
    "Royal Canin Medium Puppy",
    "Royal Canin Medium Puppy / Juniordog food for puppies and young dogs of medium-sized breeds (11 - 25kg) from 2 months, for harmonious growth, a strong immune system and healthy joints.",
    "£43.99",
    categories[0]
);
let productDog2=new AnimalProduct(
    2,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/medium/adult/0/400/80731_pla_royalcanin_mediumadult_15kg_hs_01_0.jpg",
    "Royal Canin Medium Adult",
    "Dry food for medium breed adult dogs (11-25kg) between the ages of 12 months and 7 years, designed to support strong natural immunity and digestive health, with an antioxidant complex.",
    "£46.99",
    categories[0]
);
let productDog3=new AnimalProduct(
    3,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/educ/training/reward/low/calorie/6/400/61181_PLA_rgb_Royal_Canin_Educ_Belohnungssnack_50g_6_6.jpg",
    "Royal Canin Educ Training Reward - Low Calorie",
    "Low-calorie dog snack and nutritional supplement by Royal Canin, ideal as a training reward, tasty bites in just the right size for adult dogs and puppies, rich in vitamins C and E.",
    "£7.99",
    categories[0]
);
let productDog4=new AnimalProduct(
    4,
    "https://shop-cdn-m.mediazs.com/bilder/nylabone/puppybone/9/400/58926_pla_interpet_nylabone_puppybone_hs_01_9.jpg",
    "Nylabone PuppyBone",
    "Designed for puppies which are teething, this long-lasting chew bone is made from soft plastic. It has a delicious chicken flavour and cleans the teeth while strengthening the jaw muscles.",
    "£2.79",
    categories[0]
);
let productDog5=new AnimalProduct(
    5,
    "https://shop-cdn-m.mediazs.com/bilder/pedigree/puppy/tubos/pack/5/400/51864_PLA_Pedigry_PuppyTubos_3Sticks_Chicken_5.jpg",
    "Pedigree Puppy Tubos 3 Pack",
    "Pedigree Puppy Tubos Chews with Chicken for puppies. Rich calcium snack for developing teeth and gums.",
    "£2.79",
    categories[0]
);
let productDog6=new AnimalProduct(
    6,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/starter/mousse/mother/babydog/0/400/84123_pla_royal_canin_starter_motherbabydog_195g_0.jpg",
    "Royal Canin Starter Mousse Mother & Babydog",
    "Royal Canin Starter Mousse for weaning puppies under 2 months or female dogs from the end of gestation and during lactation, special recipe with all important nutrients and vitamins.",
    "£14.99",
    categories[0]
);
let productDog7=new AnimalProduct(
    7,
    "https://shop-cdn-m.mediazs.com/bilder/rinti/extra/puppy/bitties/3/400/35456__PLA_rgb_Rinti_Extra_Puppy_Bitties_Huhn___Rind_75g_3.jpg",
    "RINTI Extra Puppy Bitties",
    "RINTI Extra Bitties are packed with meat, with valuable omega 3 fatty acids, free from soy. Ideal for puppy training, air-drying process makes them easy to digest, no preservatives",
    "£4.99",
    categories[0]
);
let productDog8=new AnimalProduct(
    8,
    "https://shop-cdn-m.mediazs.com/bilder/trixie/reflective/paws/dog/collar/silver/2/400/23130_PLA_Trixie_Halsband_Pfoten_Silver_Reflect_FG30__2.jpg",
    "Trixie Reflective Paws Dog Collar - Silver",
    "Chic, reflective Trixie dog collar made of nylon with a cute paw pattern. Offers your and your dog safety when walking at twilight or in the dark.",
    "£2.99",
    categories[0]
);
let productDog9=new AnimalProduct(
    9,
    "https://shop-cdn-m.mediazs.com/bilder/feel/free/soft/dog/harness/black/1/400/geschirre_137_1.jpg",
    "Feel Free Soft Dog Harness - Black",
    "A durable, yet light, black dog harness made from soft polyester with reflecting stripes. Very comfortable to wear.",
    "£4.99",
    categories[0]
);
let productDog10=new AnimalProduct(
    10,
    "https://shop-cdn-m.mediazs.com/bilder/hygge/dog/bed/3/400/97648_aussiemix_fg_4794_3.jpg",
    "Hygge Dog Bed",
    "An extremely comfortable bed for dogs, ideal for older pets or those with mobility issues, with a viscoelastic filling and soft cover, including a reversible cushion on an anti-slip base.",
    "£41.99",
    categories[0]
);

// Cat Products
let productCat1=new AnimalProduct(
    11,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/vet/care/nutrition/cat/neutered/young/male/5/400/52571_PLA_Royal_Canin_Vet_Care_Young_Male_5_5.jpg",
    "Royal Canin Vet Care Nutrition Cat - Neutered Young Male",
    "A complete dry cat food for young male cats which have been neutered, up to 7 years of age. Rich in protein, and with reduced calorie density, it helps your cat to maintain an ideal body weight.",
    "£111.99",
    categories[1]
);
let productCat2=new AnimalProduct(
    12,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/pure/feline/no/lively/vitality/6/400/61325_PLA_rgb_Royal_Canin_Pure_Feline_Vitalitaet_3kg_6_6.jpg",
    "Royal Canin Pure Feline No.3 Lively Vitality",
    "Royal Canin Pure Feline cat food for your cat's vitality, with tomatoes, rich in poultry and fish, a balanced ratio of fat & protein for high energy requirements ",
    "£37.99",
    categories[1]
);
let productCat3=new AnimalProduct(
    13,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/vet/care/cat/senior/consult/stage/balance/0/400/67359_pla_royal_canin_vet_senior_consult_stage_1_balance_dry_0.jpg",
    "Royal Canin Vet Care Cat – Senior Consult Stage 1 Balance",
    "A complete, dry dietary food, which is ideal for senior cats aged over seven years. It promotes vitality and helps your cat maintain its ideal weight. High in fibre and with an antioxidant complex.",
    "£104.99",
    categories[1]
);
let productCat4=new AnimalProduct(
    14,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/pure/feline/no/beauty/6/400/61319_PLA_rgb_Royal_Canin_Pure_Feline_Schoenheit_3kg_6_6.jpg",
    "Royal Canin Pure Feline No.1 Beauty",
    "Royal Canin Pure Feline cat food for your cat's beauty, with borage oil and linseed, rich in poultry as a single animal protein source.",
    "£37.99",
    categories[1]
);
let productCat5=new AnimalProduct(
    15,
    "https://shop-cdn-m.mediazs.com/bilder/royal/canin/pure/feline/no/slimness/6/400/61322_PLA_rgb_Royal_Canin_Pure_Feline_Idealgewicht_3kg_6_6.jpg",
    "Royal Canin Pure Feline No.2 Slimness",
    "Royal Canin Pure Feline cat food for the ideal weight of your cat, with apple fibre, rich in poultry as the single animal protein source.",
    "£37.99",
    categories[1]
);
let productCat6=new AnimalProduct(
    16,
    "https://shop-cdn-m.mediazs.com/bilder/kattovit/urinary/trial/pack/2/400/110125_pla_finnern_kattovit_fd_huhn_harnweg_185g_2.jpg",
    "Kattovit Urinary Trial Pack",
    "Kattovit Urinary wet and dry food for cats suffering from diseases of the lower urinary tract. To prevent gallstone formation, with DL-methionine and low magnesium content.",
    "£11.99",
    categories[1]
);
let productCat7=new AnimalProduct(
    17,
    "https://shop-cdn-m.mediazs.com/bilder/trixie/friends/on/tour/steel/travel/bottle/and/bowl/5/400/500968_trixie_flasche_trinknapf_schwarz_klein_5.jpg",
    "Trixie Friends on Tour Steel Travel Bottle and Bowl",
    "Handy stainless steel drinks bottle with a secure, dual-purpose screw cap that is large enough for your pet to use as a water bowl. A great travel accessory! Note: Not possible to select colour.",
    "£6.99",
    categories[1]
);
let productCat8=new AnimalProduct(
    18,
    "https://shop-cdn-m.mediazs.com/bilder/felix/as/good/as/it/looks/mega/pack/x/g/1/400/67426_pla_felix_sgwea_jumbo_pack_44x100g_fleisch_1.jpg",
    "Felix As Good As It Looks Mega Pack 132 x 100g",
    "Now buy 132 x 100g pouches of Felix As Good As It Looks wet cat food in a great-value Mega Pack",
    "£33.99",
    categories[1]
);
let productCat9=new AnimalProduct(
    19,
    "https://shop-cdn-m.mediazs.com/bilder/gourmet/gold/pt/recipes/mega/pack/x/g/9/400/50340_pla_purina_gourmet_feine_pastete_huhn_85g_9.jpg",
    "Gourmet Gold Pâté Recipes Mega Pack 48 x 85g",
    "Buy 48 x 85g Gourmet Gold Pâté Recipes wet cat food in a great-value Mega Pack",
    "£19.99",
    categories[1]
);
let productCat10=new AnimalProduct(
    20,
    "https://shop-cdn-m.mediazs.com/bilder/bozita/chunks/in/jelly/mega/pack/x/g/5/400/52430_PLA_Bozita_Haeppchen_in_Gelee_mit_Elch_370g_5.jpg",
    "Bozita Chunks in Jelly Mega Pack 36 x 370g",
    "Bozita Chunks in Jelly cat food is a complete wet cat food from Sweden, packaged in a practical cardboard Tetra Pak. Now available in a great-value mega pack",
    "£33.99",
    categories[1]
);

//Bird Products
let productBird1=new AnimalProduct(
    21,
    "https://shop-cdn-m.mediazs.com/bilder/orlux/frutti/patee/concentrated/feed/1/400/13066_PLA_Versele_Orlux_FRUTTI_PATEE_Kraftfutter_250g_1.jpg",
    "Orlux Frutti Patee Concentrated Feed",
    "Concentrated feed for seed-eating budgies/small parakeets, canaries and exotic birds, it is specifically developed to meet the high energy requirements of these birds.",
    "£6.49",
    categories[2]
);
let productBird2=new AnimalProduct(
    22,
    "https://shop-cdn-m.mediazs.com/bilder/verselelaga/prestige/budgies/food/6/400/38434_pla_prestige_wellensittich_4kg_6.jpg",
    "Versele-Laga Prestige Budgies Food",
    "Versele-Laga Prestige Budgies Food is a complete food for budgies and other small parakeets. From Versele Laga",
    "£16.99",
    categories[2]
);
let productBird3=new AnimalProduct(
    23,
    "https://shop-cdn-m.mediazs.com/bilder/jr/farm/individual/budgie/food/5/400/52189_PLA_jrfarm_Individual_Wellensittich_1kg_5.jpg",
    "JR Farm Individual Budgie Food",
    "JR Birds Premium is now JR Farm Individual: Premium complete food from JR Farm for budgies. High quality seeds, oyster shells, berries, flowers and grass seeds. For comprehensive general health.",
    "£7.99",
    categories[2]
);
let productBird4=new AnimalProduct(
    24,
    "https://shop-cdn-m.mediazs.com/bilder/prestige/premium/african/parrot/9/400/106033_pla_verselelaga_prestigeloro_parque_african_papageimix_hs_01_9.jpg",
    "Prestige Premium African Parrot",
    "Enriched, premium seed mixture for all African parrots such as grey parrots, red-fronted parrots and red-bellied parrots.",
    "£54.99",
    categories[2]
);
let productBird5=new AnimalProduct(
    25,
    "https://shop-cdn-m.mediazs.com/bilder/lillebro/wild/bird/food/4/400/230762_lillebro_wildvogelf2_4.jpg",
    "Lillebro Wild Bird Food",
    "Premium wild bird food for all-year feeding. Made with a variety of grains, seeds and energy-rich nuts. Species appropriate; ragweed seed (ambrosia artemisiifolia) tested.",
    "£14.99",
    categories[2]
);
let productBird6=new AnimalProduct(
    26,
    "https://shop-cdn-m.mediazs.com/bilder/nutribird/p/tropical/3/400/39182_PLA_Versele_Laga_Nutribird_P15_1kg_3.jpg",
    "Nutribird P15 Tropical",
    "Nutribird P15 Tropical, complete food for parrots in pellets by Versele Laga, with grains, seeds and fruit and Florastimul for healthy digestion.",
    "£67.99",
    categories[2]
);
let productBird7=new AnimalProduct(
    27,
    "https://shop-cdn-m.mediazs.com/bilder/bella/casa/bird/aviary/5/400/71860_pla_vogelvoliere_bellacasa_front_5.jpg",
    "Bella Casa Bird Aviary",
    "This bird aviary for small birds is made from robust wood, featuring metal mesh, three mesh doors, two stainless steel feeding bowls, 5 perches, swivelling feeding bar and a removable tray.",
    "£119.99",
    categories[2]
);
let productBird8=new AnimalProduct(
    28,
    "https://shop-cdn-m.mediazs.com/bilder/lillebro/fat/balls/wild/bird/food/saver/pack/2/400/1_lillebro_meisenkn_del_box_u_2.jpg",
    "Lillebro Fat Balls Wild Bird Food Saver Pack",
    "Tasty fat balls for wild birds; each saver pack box contains 100 balls in individual nets. Fat balls help wild birds stay healthy during the winter. Ragweed seed (ambrosia artemisiifolia) tested.",
    "£13.99",
    categories[2]
);
let productBird9=new AnimalProduct(
    29,
    "https://shop-cdn-m.mediazs.com/bilder/hagen/vision/bird/cage/for/medium/birds/m/7/400/19649_vogelkaefighagenvision_hs_02_7.jpg",
    "Hagen Vision Bird Cage for Medium Birds",
    "Medium-sized bird cage, double height for budgies, canaries, lovebirds and finches, with extra deep tray, including accessories.",
    "£72.99",
    categories[2]
);
let productBird10=new AnimalProduct(
    30,
    "https://shop-cdn-m.mediazs.com/bilder/trixie/natural/living/playground/for/parakeets/1/400/20974_pla_trixie_holzspielplatznaturallivingsittiche_1.jpg",
    "Trixie Natural Living Playground for Parakeets",
    "A charming playground for parakeets and other small birds. Made from wood and with a ladder and rope.",
    "£9.99",
    categories[2]
);

//Small Pet Products
let productSmallPet1=new AnimalProduct(
    31,
    "https://shop-cdn-m.mediazs.com/bilder/bunny/dwarf/hamsterdream/expert/0/400/73381_pla_bunny_zwerghamstertraumexpert_0.jpg",
    "Bunny Dwarf HamsterDream Expert",
    "Feed your dwarf hamster this complete balanced dish, free from pellets and extrudate but packed with a range of valuable ingredients and beneficial nutrients from small seeds and delicious mealworms.",
    "£11.49",
    categories[3]
);
let productSmallPet2=new AnimalProduct(
    32,
    "https://shop-cdn-m.mediazs.com/bilder/verselelaga/cuni/adult/complete/3/400/63357_cuni_adult_complete_3.jpg",
    "Versele-Laga Cuni Adult Complete",
    "Extruded food for rabbits from Versele-Laga, with long, unground fibres, high-fibre and low starch content and no cereal grains.",
    "£54.99",
    categories[3]
);
let productSmallPet3=new AnimalProduct(
    33,
    "https://shop-cdn-m.mediazs.com/bilder/burgess/excel/adult/rabbit/nuggets/with/mint/4/400/burgess_adult_nuggets_with_mint_4.jpg",
    "Burgess Excel Adult Rabbit Nuggets with Mint",
    "Wholesome complementary feed designed to support good health in adult rabbits, rich in fibre and with added mint for unbeatable flavour that your rabbit will adore.",
    "£37.49",
    categories[3]
);
let productSmallPet4=new AnimalProduct(
    34,
    "https://shop-cdn-m.mediazs.com/bilder/vilmie/mountain/meadow/hay/6/400/80297_pla_vilmie_wiesenheu_4_kg_6.jpg",
    "Vilmie Mountain Meadow Hay",
    "This sweet smelling mountain meadow hay made from top quality hay is full of vital nutrients and has a high fibre content. Ready to use and great value for money.",
    "£28.99",
    categories[3]
);
let productSmallPet5=new AnimalProduct(
    35,
    "https://shop-cdn-m.mediazs.com/bilder/burgess/excel/long/stem/feeding/hay/for/rabbits/3/400/burgess_long_stem_hay_3.jpg",
    "Burgess Excel Long Stem Feeding Hay for Rabbits",
    "Nutrient-rich Timothy Hay designed to support your rabbit's digestion and encourage natural foraging and chewing behaviours, great for dental health and overall wellbeing.",
    "£5.99",
    categories[3]
);
let productSmallPet6=new AnimalProduct(
    36,
    "https://shop-cdn-m.mediazs.com/bilder/greenwoods/meadow/dandelion/hay/4/400/greenwoods_heu_loewenzahn_4.jpg",
    "Greenwoods Meadow Dandelion Hay",
    "Gently dried meadow hay enriched with 10% dandelion is a natural, tasty food, with a high fibre content and ideal for gourmet small pets.",
    "£9.99",
    categories[3]
);
let productSmallPet7=new AnimalProduct(
    37,
    "https://shop-cdn-m.mediazs.com/bilder/verselelaga/cavia/complete/7/400/606948_sparpaket_versele_laga_meerschweinchen_7.jpg",
    "Versele-Laga Cavia Complete",
    "Extruded complete pellet food for guinea pigs by Versele Laga, with long, whole fibre. High in crude fibre, low in starch and grain-free.",
    "£14.99",
    categories[3]
);
let productSmallPet8=new AnimalProduct(
    38,
    "https://shop-cdn-m.mediazs.com/bilder/greenwoods/wet/food/for/ferrets/5/400/53630_pla_1greenwoods_frettche_8_5.jpg",
    "Greenwoods Wet Food for Ferrets",
    "A premium complete wet food for ferrets. Made with chicken hearts, low fat chicken meat and nutritious chicken offal for a protein rich diet enriched with taurine.",
    "£34.99",
    categories[3]
);
let productSmallPet9=new AnimalProduct(
    39,
    "https://shop-cdn-m.mediazs.com/bilder/jr/farm/willow/hay/ball/5/400/40917_pla_jr_farm_weiden_heuball_5.jpg",
    "JR Farm Willow Hay Ball",
    "JR Farm Willow Hay Ball is a delicious, extra-large willow ball. Filled with marigolds and hay. Perfect for your pet rabbit or other small pets to play with or nibble on.",
    "£3.99",
    categories[3]
);
let productSmallPet10=new AnimalProduct(
    40,
    "https://shop-cdn-m.mediazs.com/bilder/hammock/relax/de/luxe/fake/fur/2/400/26257_PLA_Savic_Relax_De_Luxe_Fake_Fur_2.jpg",
    "Hammock Relax de Luxe Fake Fur",
    "Cosy hammock for rats and ferrets made from extra soft fake fur with leopard print",
    "£9.99",
    categories[3]
);



export const animalsProducts=[productDog1,productDog2,productDog3,productDog4,productDog5,productDog6,productDog7,productDog8,productDog9,productDog10,productCat1,productCat2,productCat3,productCat4,productCat5,productCat6,productCat7,productCat8,productCat9,productCat10,productBird1,productBird2,productBird3,productBird4,productBird5,productBird6,productBird7,productBird8,productBird9,productBird10,productSmallPet1,productSmallPet2,productSmallPet3,productSmallPet4,productSmallPet5,productSmallPet6,productSmallPet7,productSmallPet8,productSmallPet9,productSmallPet10];