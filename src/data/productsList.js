const productsList = [
  {
    title: 'Суп кимчи',
    desc: 'Острый суп на основе мисо, с капустой кимчи, говядиной, тофу, яйцом и водорослями вакамэ. Украшается зелёным луком и кунжутом',
    price: 360,
    image: require('../assets/s1111.jpg'),
  },
  {
    title: 'Унаги сиру',
    desc: 'Сливочный суп с угрём, водорослями вакамэ, рисом. Украшается зелёным луком и кунжутом.',
    price: 230,
    image: require('../assets/s22.jpg'),
  },
  {
    title: 'Хoлодный борщ',
    desc: 'Бульон суимоно, табаджан, водоросли вакаме, яйцо куриное, масло кунжутное.',
    price: 260,
    image: require('../assets/s3.jpg'),
  },
  {
    title: 'Тори сиру',
    desc: 'Традиционный суп на легком курином бульоне с обжаренным куриным филе, яичной лапшой и перепелиным яйцом',
    price: 270,
    image: require('../assets/s44.jpg'),
  },
  {
    title: 'Гаспачо',
    desc: 'Болгарский перец, огурец, сельдерей, красный лук, базилик, перец чили, зелёное масло.',
    price: 330,
    image: require('../assets/s5.jpg'),
  },
  {
    title: 'Салат с цыпленком',
    desc: 'Филе грудки цыплёнка, майонез, дижонская горчица, морковь, яблоко, салат айсберг, китайская капуста, сыр гауда, картофель пай, перец чили острый.',
    price: 189,
    image: require('../assets/c1.jpg'),
  },
  {
    title: 'Кани сарада',
    desc: 'Микс салатов с фалангой краба, томатами черри, апельсином и мини-шпинатом под медово-горчичным соусом',
    price: 270,
    image: require('../assets/c22.jpg'),
  },
  {
    title: 'Баклажаны по-азиатски',
    desc: 'Маринованные баклажаны под пикантным соусом',
    price: 350,
    image: require('../assets/c33.jpg'),
  },
  {
    title: 'Тартар с морепродуктами и соусом Юдзу',
    desc: 'Тартар с креветкой, гребешком, тунцом и авокадо с соусом юдзу. Украшается зеленью и лаймом.',
    price: 330,
    image: require('../assets/c44.jpg'),
  },
  {
    title: 'Салат Греческий',
    desc: 'Салат айсберг, болгарский перец, маслины, томаты, сыр фета, огурец, красный лук, ростки подсолнечника, итальянская заправка.',
    price: 350,
    image: require('../assets/c5.jpg'),
  },
  {
    title: 'Паста талльятелье',
    desc: 'Тальятелле, цыплёнок, шпинат, пармезан, сливочный соус дорблю.',
    price: 450,
    image: require('../assets/p1.jpg'),
  },
  {
    title: 'Лапша рамен с говядиной в перечном соусе ',
    desc: 'Лапша рамен, обжаренная с говядиной, шампиньонами, стрелками чеснока и цукини, с добавлением перечного, унаги и устричного соусов. Украшается зелёным луком и кунжутом.',
    price: 510,
    image: require('../assets/p22.jpg'),
  },
  {
    title: 'Паста с гребешками',
    desc: 'Тальятелле, гребешки, лук, пармезан, сливочный соус, укроп.',
    price: 590,
    image: require('../assets/p3.jpg'),
  },
  {
    title: 'Паста с томатами',
    desc: 'Пенне, томаты, пармезан, оливковое масло, свежий базилик, специи.',
    price: 450,
    image: require('../assets/p4.jpg'),
  },
  {
    title: 'Ньоке паршутто',
    desc: 'Ньокки, баклажан, грибы шампиньоны, ветчина, сыр пармезан, сливки, базилик, томатный соус, чеснок.',
    price: 550,
    image: require('../assets/p5.jpg'),
  },
  {
    title: 'Набор Дорама',
    desc: '"Ойшо", "Хоташи".',
    price: 1150,
    image: require('../assets/n1.jpg'),
  },
  {
    title: 'Набор Джуниор',
    desc: 'Шамерма в лаваше (2 шт.), Картофель фри с кетчупом (2 шт.), Эвервесс Кола 1 л. Напиток может отличаться от представленого на фото.',
    price: 1550,
    image: require('../assets/n2.jpg'),
  },
  {
    title: 'Амами сет',
    desc: 'Набор из роллов для особого случая:Радуга, Унаги урамаки с лепестками арахиса, Хайко урамаки, Саппоро ролл, Наутилус ролл, Йоко оно.',
    price: 3450,
    image: require('../assets/n33.jpg'),
  },
  {
    title: 'Набор высшая лига',
    desc: '"Филадельфия лайт", "Канагава", "Киджиро", "Касима", "Эби маки".',
    price: 2650,
    image: require('../assets/n4.jpg'),
  },
  {
    title: 'Набор Большой куш',
    desc: 'Роллы "Филадельфия", "Филадельфия люкс", "Филадельфия Некст", "Филадельфия в угре", "Канагава", "Харима", "Торино", "Нежная Калифорния", "Самурай", "Диего", "Гринвуд", "Хоташи". Суши: саке (2 шт.), эби (2 шт.), унаги (2 шт.), чука (4 шт.). Классические гунканы: спайси креветка (4 шт.), спайси лосось (4 шт. ).',
    price: 3750,
    image: require('../assets/n5.jpg'),
  },
  {
    title: 'Бизнес ланч 1',
    desc: 'Салат с крабовой палочкой и огурцом, рыбная котлета с картофельным пюре, грибной крем-суп, Брауни с мятным соусом',
    price: 870,
    image: require('../assets/q111.jpg'),
  },
  {
    title: 'Фасоль стручковая',
    desc: 'Стручковая фасоль в растительном масле.',
    price: 170,
    image: require('../assets/q2.jpg'),
  },
  {
    title: 'Бизнес ланч 2>',
    desc: 'Бифштекс с картофельным пюре, Том ям с курицей, овощной ролл',
    price: 850,
    image: require('../assets/q33.jpg'),
  },
  {
    title: 'Мисо',
    desc: 'Грибы намеко, тофу, водоросли вакаме, бульон мисо, зелёный лук.',
    price: 350,
    image: require('../assets/q4.jpg'),
  },
  {
    title: 'Блэк пеппер краб ',
    desc: 'Фаланга краба в соусе на основе чёрного перца и сливочного масла с чесноком, луком порей, имбирём и кинзой. Подаётся с рисом',
    price: 1350,
    image: require('../assets/q55.jpg'),
  },
  
];

export default productsList;
