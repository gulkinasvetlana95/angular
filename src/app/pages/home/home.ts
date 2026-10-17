
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterOutlet } from '@angular/router';
interface Pepper {
  id: string;
  title: string;
  image: string;
  desc: string;
  price: number;
  keywords: string[];
}


interface ProductReview {
  title: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

interface ProductSpecification {
  label: string;
  value: string;
}

 interface ProductDetails {
  id: string;
  description: string;
  reviews: ProductReview[];
  specifications: ProductSpecification[];
}

@Component({
  selector: 'app-home',
  imports: [Header, Footer,  RouterLink,],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})


export class Home {
  peppers: Pepper[] = [
    {
      id: "1",
      title: "The Abyss - Pure Evil Extract",
      image: "img/Image-1.jpg",
      desc: "One drop 77 is a crime. Use with cautio",
      price: 40,
      keywords: ['Whole Chilies', 'Grund Spices']
    },
    {
      id: "2",
      title: "'Why Did I Do This?' Hot Salt",
      image: "img/Image-2.jpg",
      desc: "A salty, crunchy path to pure regret",
      price: 16.2,
      keywords: ['Ground Spices']
    },
    {
      id: "3",
      title: "Five-Alarm Chili Starter Kit",
      image: "img/Image-3.jpg",
      desc: "For questioning all your life choices",
      price: 19.55,
      keywords: ['Scorching Sauces']
    },
    {
      id: "4",
      title: "Satan's Kiss Chilies",
      image: "img/Image-4.png",
      desc: "Cute round peppers with a cruel punch",
      price: 9.55,
      keywords: ['Whole Chilies']
    },
    {
      id: "5",
      title: "The Unforgiving Hot Sauce",
      image: "img/Image-5.png",
      desc: "Made with scorpion peppers and spite",
      price: 16.89,
      keywords: ['Sadistic Blends']
    },
    {
      id: "6",
      title: "Deceptively Mild Ancho Powder",
      image: "img/Image-6.png",
      desc: "Smoky, gentle, and full of lies",
      price: 19.55,
      keywords: ['Infernal Extracts']
    },
    {
      id: "7",
      title: "Whole Carolina Reapers (10-pack)",
      image: "img/Image-7.png",
      desc: "A bag full of painful mistakes",
      price: 9.99,
      keywords: ['Warming Up']
    },
    {
      id: "8",
      title: "Crybaby's Cayenne Sauce",
      image: "img/Image-8.png",
      desc: "A classic way to learn your lesson",
      price: 5.55,
      keywords: ['Serious Heat']
    },
    {
      id: "9",
      title: "Satan's Lollipops (3-pack)",
      image: "img/Image-9.png",
      desc: "The sweetest suffering on a stick",
      price: 7.77,
      keywords: ['Ring of Fire']
    },
    {
      id: "10",
      title: "Ghost Pepper Powder",
      image: "img/Image-10.png",
      desc: "A lingering heat that will haunt you",
      price: 6.66,
      keywords: ['Legal Weapon']
    },
    {
      id: "11",
      title: "Mango Habanero Mercy Sauce",
      image: "img/Image-11.png",
      desc: "Lures you in with sweetness, then bitesk",
      price: 17.2,
      keywords: ['Warming Up']
    },
    {
      id: "12",
      title: "Trinidad Scorpion Venom",
      image: "img/Image-12.png",
      desc: "A blistering sting you won't forget",
      price: 13.13,
      keywords: ['Infernal Extracts']
    }
  ];


  productDetails: ProductDetails[] = [
     {
    id: '1',
    description: `Ghost Pepper, or Bhut Jolokia, is a true legend in the world of heat. Hailing from Northeast India, it was one of the first peppers to breach the 1 million Scoville mark, and its reputation is absolutely earned. Its burn isn't just intense—it's a slow, creeping, all-consuming fire.
     Don't be fooled by its initial, delicate sweetness and fruity notes. After about 30-45 seconds, the pepper's true nature is unleashed: an intense, merciless wave of fire that will make you question all of your life choices.
     Our powder is hermetically sealed to preserve maximum freshness and demonic potency. Use it to craft extremely hot chili, sauces, or marinades. Start with microscopic amounts. You have been warned.`,
    reviews: [
      {
        rating: 5,
        title: 'This is the real deal!', 
        text: 'Used Citra for my latest NEIPA, and the aroma is absolutely incredible. Poured hazy, with intense notes of grapefruit and passion fruit. A must-have for any hop-forward beer!',
        avatar: 'img/avatar-1.png',
        name: 'ChiliHead_27',
      },
      {
        rating: 4,
        title: 'Painfully Delicious', 
        text: 'Beyond the beautiful, brutal heat, there`s a really nice fruity flavor. I used it to make a spicy mayo and it`s incredible. Just be careful, it`s not forgiving. ',
        avatar: 'img/avatar-2.png',
        name: 'SpiceMasochist',
      },
      {
        rating: 1,
        title: ' I`ve Made A Huge Mistake', 
        text: 'My friend dared me. It`s been an hour. I can see sounds. My disappointment is immeasurable and my day is ruined. This is a weapon, not a spice.',
        avatar: 'img/avatar-3.png',
        name: 'RegretfulRookie',
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Northeast India' },
      { label: 'Scoville Heat Units (SHU)', value: '855,000 – 1,041,427' },
      { label: 'Flavor Profile', value: 'Deceptively sweet, fruity, then overwhelmingly fiery' },
      { label: 'Recommended Uses', value: 'Extreme sauces, chili cook-offs, dares.' },
      { label: 'Warning:', value: 'Use in a well-ventilated area. Keep away from children, pets, and common sense.' },
    ]
  },
  {
    id: '2',
    description: `The Abyss - Pure Evil Extract is a concentrated descent into the darkest depths of chili heat. Created for extreme spice enthusiasts, this powerful extract brings an intense kick to recipes that demand more than ordinary peppers can deliver.
A tiny amount can transform a sauce or stew, while careless overuse can overwhelm the flavor of an entire dish. This is not an ingredient to use casually.
Use only as directed and keep it away from skin, eyes, children, and pets. Some doors are better opened one drop at a time.`,
     reviews: [
      {
        rating: 5,
        title: 'An incredibly intense extract',
        text: 'An incredibly intense extract. A tiny amount makes a huge difference in a large batch of sauce.',
        avatar: 'NC',
        name: 'Nathan C.'
      },
      {
        rating: 4,
        title: 'Definitely a specialist product',
        text: 'Definitely a specialist product. Handle carefully and measure precisely.',
        avatar: 'VH',
        name: 'Victoria H.'
      },
      {
        rating: 5,
        title: 'The name and packaging are fantastic',
        text: 'The name and packaging are fantastic. Made for people who take extreme heat seriously.',
        avatar: 'AP',
        name: 'Adam P.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Depends on the source peppers and manufacturer' },
      { label: 'Scoville Heat Units (SHU)', value: 'Manufacturer-specific; verify the tested value' },
      { label: 'Flavor Profile', value: 'Concentrated chili heat with a pepper-derived flavor' },
      { label: 'Recommended Uses', value: 'Carefully measured additions to suitable sauces and recipes' },
      { label: 'Product Type', value: 'Concentrated chili extract' },
      { label: 'Heat Level', value: 'Extreme' },
      { label: 'Warning', value: 'Follow manufacturer instructions. Avoid inhalation and contact with skin and eyes.' }
    ]
  },
  {
    id: '3',
    description: `"Why Did I Do This?" Hot Salt is the wicked seasoning that turns an ordinary sprinkle into a questionable life decision. Combining the familiar crunch of salt with a fiery chili kick, it's made for anyone who likes bold flavors.

The first taste brings savory satisfaction, followed by a growing warmth that sneaks into every bite. Sprinkle it over fries, popcorn, roasted vegetables, or grilled meat for an instant spicy upgrade.

One pinch is temptation. A second is confidence. A third might explain the name.`,
   reviews: [
      {
        rating: 5,
        title: 'Amazing on fries',
        text: 'Amazing on fries! It adds a nice spicy kick without needing to make a sauce.',
        avatar: 'ML',
        name: 'Mia L.'
      },
      {
        rating: 4,
        title: 'A fun seasoning with a good',
        text: 'A fun seasoning with a good crunch and plenty of flavor. Great on popcorn, too.',
        avatar: 'NS',
        name: 'Noah S.'
      },
      {
        rating: 5,
        title: 'The name made me laugh, but',
        text: 'The name made me laugh, but the flavor made me keep it. My roasted potatoes are so much better now.',
        avatar: 'EW',
        name: 'Ella W.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Depends on the salt and chili ingredients used' },
      { label: 'Scoville Heat Units (SHU)', value: 'Depends on the chili concentration; no verified value available' },
      { label: 'Flavor Profile', value: 'Salty, savory, crunchy, with a spicy chili kick' },
      { label: 'Recommended Uses', value: 'Fries, popcorn, roasted potatoes, grilled meats, vegetables' },
      { label: 'Product Type', value: 'Chili seasoning salt' },
      { label: 'Heat Level', value: 'Depends on the chili blend' },
      { label: 'Texture', value: 'Granular seasoning' },
      { label: 'Warning', value: 'Contains salt and chili ingredients. Use in moderation.' }
    ]
  },
  {
    id: '4',
    description: `The Five-Alarm Chili Starter Kit is your invitation to enter the dangerous world of serious spice. Designed for adventurous cooks, this kit brings together the essentials for creating a bold, fiery chili.

Layer rich aromas, deep chili flavors, and escalating heat into a dish that starts with irresistible comfort and ends with a challenge worthy of its name.

Perfect for homemade chili, spicy stews, or experimenting with your own signature sauce. The kitchen may be yours, but the fire has other plans.`,
    reviews: [
      {
        rating: 5,
        title: 'Made an amazing pot of chili',
        text: 'Made an amazing pot of chili with this kit. The flavors came together beautifully!',
        avatar: 'EM',
        name: 'Ethan M.'
      },
      {
        rating: 4,
        title: 'A great gift for anyone who',
        text: 'A great gift for anyone who enjoys cooking spicy food. Would love to see more kit variations.',
        avatar: 'SR',
        name: 'Samantha R.'
      },
      {
        rating: 5,
        title: 'Perfect for experimenting in the kitchen',
        text: 'Perfect for experimenting in the kitchen. My homemade chili has never tasted this exciting.',
        avatar: 'LF',
        name: 'Lucas F.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Depends on the included ingredients' },
      { label: 'Scoville Heat Units (SHU)', value: 'Varies according to the chili ingredients' },
      { label: 'Flavor Profile', value: 'Bold, savory chili flavors with adjustable heat' },
      { label: 'Recommended Uses', value: 'Homemade chili, spicy stews, sauces, cooking experiments' },
      { label: 'Product Type', value: 'Chili cooking starter kit' },
      { label: 'Package Contents', value: 'Depends on the kit configuration' },
      { label: 'Heat Level', value: 'Adjustable' },
      { label: 'Warning', value: 'Check the ingredient list, allergens, and preparation instructions.' }
    ]
  },
  {
    id: '5',
    description: `Satan's Kiss Chilies are small, round, and dangerously charming. Their glossy red appearance makes them look almost harmless, but their bold chili flavor and lively heat tell a very different story.

Beneath their playful appearance lies a punchy pepper with a bright, slightly sweet taste and a satisfying kick. They're proof that trouble doesn't need to be big to leave a lasting impression.

Stuff them with cheese, add them to antipasti, or bring color and heat to your favorite dishes. The devil never plays fair.`,
    reviews: [
      {
        rating: 5,
        title: 'They look adorable, but they definitely',
        text: 'They look adorable, but they definitely have a kick! Perfect for adding color to a platter.',
        avatar: 'GT',
        name: 'Grace T.'
      },
      {
        rating: 4,
        title: 'Great flavor and a fun shape',
        text: 'Great flavor and a fun shape. I tried stuffing them with cheese, and they turned out delicious.',
        avatar: 'PN',
        name: 'Peter N.'
      },
      {
        rating: 5,
        title: 'A lovely addition to antipasti',
        text: 'A lovely addition to antipasti. They look great and bring just the kind of spicy character I enjoy.',
        avatar: 'OB',
        name: 'Olivia B.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Italy, commonly associated with the Bacio di Satana variety' },
      { label: 'Scoville Heat Units (SHU)', value: 'Depends on the exact cultivar and growing conditions' },
      { label: 'Flavor Profile', value: 'Bright chili flavor with a fruity character and noticeable heat' },
      { label: 'Recommended Uses', value: 'Stuffed peppers, antipasti, pickling, appetizers' },
      { label: 'Product Type', value: 'Small round chilies' },
      { label: 'Heat Level', value: 'Variety-dependent' },
      { label: 'Texture', value: 'Firm, rounded peppers' },
      { label: 'Warning', value: 'Handle with care and avoid contact with eyes.' }
    ]
  },
  {
    id: '6',
    description: `The Unforgiving Hot Sauce was created for those who believe ordinary heat is simply not enough. Packed with the fierce character of scorpion peppers, this sauce delivers an intense chili punch wrapped in bold, unforgettable flavor.

The first taste offers a brief moment to appreciate its complexity. Then the heat begins to climb, spreading across your palate and refusing to leave quietly.

Use sparingly in burgers, marinades, wings, or homemade chili. A few drops can transform an ordinary meal into a fiery ordeal you'll remember long after the last bite.`,
    reviews: [
      {
        rating: 5,
        title: 'The name is accurate',
        text: 'The name is accurate! Intense heat with a bold flavor that works beautifully in burgers.',
        avatar: 'MD',
        name: 'Matthew D.'
      },
      {
        rating: 4,
        title: 'Very powerful sauce',
        text: 'Very powerful sauce. I only need a little, and it adds a serious kick to my meals.',
        avatar: 'EK',
        name: 'Emma K.'
      },
      {
        rating: 5,
        title: 'Exactly what I wanted from an',
        text: 'Exactly what I wanted from an extreme hot sauce. Bold, fiery, and memorable.',
        avatar: 'JW',
        name: 'Jack W.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Depends on the manufacturer and pepper source' },
      { label: 'Scoville Heat Units (SHU)', value: 'Depends on the scorpion pepper concentration and formulation' },
      { label: 'Flavor Profile', value: 'Intense chili heat, bold pepper flavor, persistent finish' },
      { label: 'Recommended Uses', value: 'Burgers, wings, marinades, chili, spicy recipes' },
      { label: 'Product Type', value: 'Hot sauce' },
      { label: 'Heat Level', value: 'Extreme' },
      { label: 'Texture', value: 'Depends on formulation' },
      { label: 'Warning', value: 'Use small amounts and follow the product label.' }
    ]
  },
  {
    id: '7',
    description: `Deceptively Mild Ancho Powder is the quiet troublemaker of the chili world. Made from dried poblano peppers, ancho chili offers a rich, earthy flavor with notes of sweet raisins, dark chocolate, and smoky warmth.

Unlike its more vicious cousins, this powder doesn't rely on overwhelming heat. Instead, it reveals its depth, bringing a warm, mellow character that makes every dish taste richer and more mysterious.

Sprinkle it into chili, rubs, sauces, or roasted vegetables. Sometimes the most dangerous ingredient is the one you can't stop adding.`,
   reviews: [
      {
        rating: 5,
        title: 'Rich, smoky, and slightly sweet',
        text: 'Rich, smoky, and slightly sweet. It adds incredible depth to homemade chili.',
        avatar: 'NG',
        name: 'Natalie G.'
      },
      {
        rating: 4,
        title: 'Lovely aroma and easy to use',
        text: 'Lovely aroma and easy to use. More about flavor than heat, which is exactly what I wanted.',
        avatar: 'JL',
        name: 'James L.'
      },
      {
        rating: 5,
        title: 'Fantastic in taco seasoning and marinades',
        text: 'Fantastic in taco seasoning and marinades. A small amount makes a noticeable difference.',
        avatar: 'IP',
        name: 'Isabella P.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Mexico' },
      { label: 'Scoville Heat Units (SHU)', value: 'Approximately 1,000–2,000 for ancho peppers' },
      { label: 'Flavor Profile', value: 'Smoky, earthy, mildly sweet, with raisin-like and subtle chocolate notes' },
      { label: 'Recommended Uses', value: 'Chili, taco seasoning, dry rubs, sauces, roasted vegetables' },
      { label: 'Product Type', value: 'Ground dried chili powder' },
      { label: 'Heat Level', value: 'Mild' },
      { label: 'Texture', value: 'Fine powder' },
      { label: 'Warning', value: 'Store in a cool, dry place in an airtight container.' }
    ]
  },
  {
    id: '8',
    description: `Meet the Carolina Reaper, one of the most notorious chili peppers ever grown. Recognized for its twisted tail and wicked appearance, this fiery monster combines a surprisingly fruity aroma with an absolutely savage burn.

Don't let its small size fool you. The heat can build relentlessly, transforming a curious taste into an unforgettable experience. Every pepper carries a serious punch.

Use them carefully in homemade sauces, spicy stews, or measured chili preparations. Ten peppers, endless possibilities, and absolutely no room for overconfidence.`,
   reviews: [
      {
        rating: 5,
        title: 'Beautiful peppers with a surprisingly fruity',
        text: 'Beautiful peppers with a surprisingly fruity aroma. Definitely not for beginners!',
        avatar: 'CB',
        name: 'Chris B.'
      },
      {
        rating: 4,
        title: 'Good quality and exactly what I',
        text: 'Good quality and exactly what I expected. One pepper goes a very long way in homemade sauce.',
        avatar: 'OH',
        name: 'Oliver H.'
      },
      {
        rating: 5,
        title: 'The ultimate challenge for chili lovers',
        text: 'The ultimate challenge for chili lovers. The fruity flavor is fantastic, but the heat is no joke.',
        avatar: 'MD',
        name: 'Megan D.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'South Carolina, USA' },
      { label: 'Scoville Heat Units (SHU)', value: 'Approximately 1,400,000–2,200,000, depending on the specimen' },
      { label: 'Flavor Profile', value: 'Fruity, sweet, slightly earthy, followed by an exceptionally intense burn' },
      { label: 'Recommended Uses', value: 'Extreme hot sauces, chili recipes, carefully measured pepper preparations' },
      { label: 'Product Type', value: 'Whole chili peppers' },
      { label: 'Package Contents', value: '10 peppers' },
      { label: 'Heat Level', value: 'Extreme' },
      { label: 'Warning', value: 'Handle with gloves. Avoid inhaling pepper dust and keep away from children and pets.' }
    ]
  },
  {
    id: '9',
    description: `Crybaby's Cayenne Sauce is a classic with a wicked sense of humor. Made for those who love straightforward chili flavor, it delivers a bright, peppery kick with enough warmth to wake up even the dullest meal.

The first drop brings a tangy burst of flavor, followed by a clean, building heat that spreads without completely stealing the show. But keep pouring, and those tears might not be so imaginary.

Add it to pizza, eggs, sandwiches, or your favorite comfort food. Even a little devil can cause a lot of trouble.`,
    reviews: [
      {
        rating: 5,
        title: 'A fantastic everyday hot sauce',
        text: 'A fantastic everyday hot sauce. Goes with practically everything in my kitchen.',
        avatar: 'RC',
        name: 'Ryan C.'
      },
      {
        rating: 4,
        title: 'Nice tangy flavor with a clean',
        text: 'Nice tangy flavor with a clean kick. I wish it were just a little hotter!',
        avatar: 'LS',
        name: 'Laura S.'
      },
      {
        rating: 5,
        title: 'Perfect on pizza and scrambled eggs',
        text: 'Perfect on pizza and scrambled eggs. Simple, tasty, and surprisingly addictive.',
        avatar: 'BF',
        name: 'Ben F.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Inspired by traditional cayenne pepper sauces' },
      { label: 'Scoville Heat Units (SHU)', value: 'Cayenne peppers typically range from 30,000–50,000; finished sauce varies' },
      { label: 'Flavor Profile', value: 'Bright, tangy, peppery, with a clean and warming kick' },
      { label: 'Recommended Uses', value: 'Pizza, eggs, sandwiches, burgers, everyday seasoning' },
      { label: 'Product Type', value: 'Cayenne hot sauce' },
      { label: 'Heat Level', value: 'Medium to hot' },
      { label: 'Texture', value: 'Pourable sauce' },
      { label: 'Warning', value: 'Contains chili peppers. Adjust serving size to your heat tolerance.' }
    ]
  },
  {
    id: '10',
    description: `Satan's Lollipops look like innocent candy, but don't let their playful appearance fool you. These fiery little treats are made for adventurous spice lovers who enjoy a wicked twist on sweetness.

The sugary first impression gives way to a spicy surprise that turns every lick into a battle between pleasure and regret. Sweet, bold, and devilishly memorable, they're guaranteed to make people look twice.

Perfect for novelty gifts, themed parties, or anyone who believes candy should come with a warning label. Three lollipops, three little temptations, and absolutely no angelic intentions.`,
   reviews: [
      {
        rating: 5,
        title: 'Such a fun gift',
        text: 'Such a fun gift! Everyone thought they were ordinary lollipops until the spicy surprise arrived.',
        avatar: 'HJ',
        name: 'Hannah J.'
      },
      {
        rating: 4,
        title: 'Funny concept and great for parties',
        text: 'Funny concept and great for parties. The packaging alone makes people curious.',
        avatar: 'TR',
        name: 'Tom R.'
      },
      {
        rating: 5,
        title: 'Bought these for a friend who',
        text: 'Bought these for a friend who loves spicy food. The reaction was absolutely priceless!',
        avatar: 'CA',
        name: 'Chloe A.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Product-specific; check packaging for manufacturing details' },
      { label: 'Scoville Heat Units (SHU)', value: 'Depends on the chili ingredient and concentration' },
      { label: 'Flavor Profile', value: 'Sweet candy notes with a spicy surprise' },
      { label: 'Recommended Uses', value: 'Novelty gifts, themed parties, spicy-food challenges' },
      { label: 'Product Type', value: 'Spicy hard candy' },
      { label: 'Package Contents', value: '3 lollipops' },
      { label: 'Heat Level', value: 'Product-dependent' },
      { label: 'Texture', value: 'Hard candy' },
      { label: 'Warning', value: 'Check ingredients and allergens. Hard candy presents a choking risk for young children.' }
    ]
  },
  {
    id: '11',
    description: `Mango Habanero Mercy Sauce is a dangerous little masterpiece that perfectly balances tropical sweetness with savage heat. Ripe mango brings a smooth, fruity flavor, while habanero peppers prepare a fiery surprise that refuses to be ignored.

At first, the sweetness feels comforting and almost innocent. Then the habanero strikes, spreading a sharp, lingering burn that turns every drop into a delicious mistake.

Drizzle it over grilled chicken, tacos, or roasted vegetables. Sweet, spicy, and dangerously addictive—this is mercy with a very cruel twist.`,
    reviews: [
      {
        rating: 5,
        title: 'The mango sweetness is incredible, and',
        text: 'The mango sweetness is incredible, and then the heat sneaks up on you. Perfect for chicken wings!',
        avatar: 'ER',
        name: 'Emily R.'
      },
      {
        rating: 4,
        title: 'Great balance of fruity and spicy',
        text: 'Great balance of fruity and spicy. A little sweeter than expected, but delicious on tacos.',
        avatar: 'DK',
        name: 'Daniel K.'
      },
      {
        rating: 5,
        title: 'My new favorite hot sauce',
        text: 'My new favorite hot sauce. Sweet, tangy, and just evil enough to keep me coming back.',
        avatar: 'SM',
        name: 'Sophie M.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Caribbean-inspired, featuring mango and habanero peppers' },
      { label: 'Scoville Heat Units (SHU)', value: 'Habanero peppers typically range around 100,000–350,000; finished sauce varies' },
      { label: 'Flavor Profile', value: 'Tropical mango sweetness, tangy fruit, followed by a sharp, lingering heat' },
      { label: 'Recommended Uses', value: 'Chicken wings, tacos, grilled meats, marinades' },
      { label: 'Product Type', value: 'Mango habanero hot sauce' },
      { label: 'Heat Level', value: 'Hot' },
      { label: 'Texture', value: 'Smooth sauce' },
      { label: 'Warning', value: 'Start with a small amount. Avoid contact with eyes and sensitive skin.' }
    ]
  },
  {
    id: '12',
    description: `Trinidad Scorpion Venom is not a pepper for the faint-hearted. Originating from Trinidad and Tobago, this legendary chili is infamous for its scorching intensity and distinctive scorpion-like sting. Its fruity, slightly floral aroma hides a truly merciless character.

The first taste may seem manageable, but that illusion doesn't last long. A wave of brutal heat builds across your tongue and lingers long after the flavor disappears.

Use tiny amounts in hot sauces, marinades, and chili recipes when you want to push the limits. This isn't just heat—it's a warning in every bite.`,
     reviews: [
      {
        rating: 5,
        title: 'This sauce means business',
        text: 'This sauce means business! The heat builds slowly, and the fruity flavor makes it even better.',
        avatar: 'MT',
        name: 'Michael T.'
      },
      {
        rating: 4,
        title: 'Seriously hot stuff',
        text: 'Seriously hot stuff. A couple of drops in a pot of chili were more than enough for me.',
        avatar: 'AP',
        name: 'Alex P.'
      },
      {
        rating: 5,
        title: 'Amazing depth of flavor',
        text: 'Amazing depth of flavor. Not just heat for the sake of heat—this one has real character.',
        avatar: 'JW',
        name: 'Jessica W.'
      }
    ],
    specifications: [
      { label: 'Origin', value: 'Trinidad and Tobago' },
      { label: 'Scoville Heat Units (SHU)', value: 'Approximately 800,000–1,463,700 for Trinidad Scorpion pepper varieties' },
      { label: 'Flavor Profile', value: 'Fruity, slightly floral, followed by an intense, lingering burn' },
      { label: 'Recommended Uses', value: 'Extreme hot sauces, chili, marinades' },
      { label: 'Product Type', value: 'Chili pepper or pepper-based product; confirm the exact format' },
      { label: 'Heat Level', value: 'Extreme' },
      { label: 'Warning', value: 'Use sparingly. Wear gloves when handling fresh peppers and avoid contact with eyes.' }
    ]
  }
];



  

categories: string[] = ['Whole Chilies', 'Ground Spices', 'Scorching Sauces', 'Sadistic Blends', 'Infernal Extracts'];
levels: string[] = ['Warming Up', 'Serious Heat', 'Ring of Fire', 'Legal Weapon',];
selectedCategory: string[] = [];

search = '';

sort = 'new';

toggleCategory(category: string): void {
  if (this.selectedCategory.includes(category)) {
    this.selectedCategory = this.selectedCategory.filter(
      item => item !== category
    );
  } else {
    this.selectedCategory = [...this.selectedCategory, category];
  }
}
toggleLevel(level: string): void {
  if (this.selectedCategory.includes(level)) {
    this.selectedCategory = this.selectedCategory.filter(
      item => item !== level
    );
  } else {
    this.selectedCategory = [...this.selectedCategory, level];
  }
}

setSort(value: string): void {
  this.sort = value;
}

  sortedProducts: Pepper[] = this.peppers;

 
 selectedWords: string[] = [];

selectWord(word: string): void {
  if (!this.selectedWords.includes(word)) {
    this.selectedWords = [...this.selectedWords, word];
  }

  this.search = word;
}


get filteredProducts(): Pepper[] {
  const query = this.search.trim().toLowerCase();

  return this.peppers.filter(product => {
    const matchesSearch =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.desc.toLowerCase().includes(query) ||
      product.keywords.some(keyword =>
        keyword.toLowerCase().includes(query)
      );

   
    const matchesCategory =
      this.selectedCategory.length === 0 ||
      product.keywords.some(keyword =>
        this.selectedCategory.includes(keyword)
      );

    return matchesSearch && matchesCategory;
  });
}


get keyboardWords(): string[] {
  if (!this.search.trim()) {
    return [];
  }

  return this.peppers
    .map(product => product.title)
    .filter(title =>
      title.toLowerCase().includes(this.search.toLowerCase())
    );
}
}



