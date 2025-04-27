import { Product } from '../components/ProductCard';

export const products: Product[] = [
  {
    id: 1,
    name: "양당 화합 티셔츠",
    price: 25000,
    description: "좌우를 넘어서 모두가 함께하는 미래를 상징하는 티셔츠입니다. 부드러운 코튼 소재로 편안한 착용감을 제공합니다.",
    imageUrl: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isBestseller: true,
    externalLink: "#"
  },
  {
    id: 2,
    name: "중립지대 에코백",
    price: 18000,
    description: "귀여운 캐릭터가 그려진 에코백으로, 일상에서 중립적 관점의 가치를 표현해보세요.",
    imageUrl: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    externalLink: "#"
  },
  {
    id: 3,
    name: "대화의 시작 머그컵",
    price: 15000,
    description: "서로 다른 생각을 가진 사람들이 대화를 시작할 수 있게 도와주는 재미있는 디자인의 머그컵입니다.",
    imageUrl: "https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    externalLink: "#"
  },
  {
    id: 4,
    name: "함께해요 후드티",
    price: 45000,
    description: "편안한 착용감과 귀여운 디자인으로 정치적 성향과 상관없이 모두가 좋아할 수 있는 후드티입니다.",
    imageUrl: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isBestseller: true,
    externalLink: "#"
  },
  {
    id: 5,
    name: "중도 스티커 세트",
    price: 8000,
    description: "노트북, 물병, 다이어리 등 어디에나 붙일 수 있는 귀여운 캐릭터 스티커 10종 세트입니다.",
    imageUrl: "https://images.pexels.com/photos/5855281/pexels-photo-5855281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    externalLink: "#"
  },
  {
    id: 6,
    name: "화합의 노트 세트",
    price: 12000,
    description: "다양한 정치적 견해를 가진 캐릭터들이 함께 어우러진 디자인의 노트 3종 세트입니다.",
    imageUrl: "https://images.pexels.com/photos/6690927/pexels-photo-6690927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    externalLink: "#"
  }
];

export const featuredProducts = products.filter(product => 
  [1, 4, 5].includes(product.id)
);