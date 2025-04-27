import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import CharacterImage from '../components/CharacterImage';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import TestQuestion from '../components/TestQuestion';
import { featuredProducts } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                서로 다른 우리가<br />
                <span className="text-pink-500">함께 웃을 수 있도록</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                정치적 견해가 달라도 함께 즐길 수 있는 재밌는 굿즈와 테스트로 화합의 가치를 나눠보세요.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/goods" variant="primary">
                  굿즈 보러가기
                </Button>
                <Button to="/test" variant="secondary">
                  정치성향 테스트 하러가기
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <CharacterImage 
                src="https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="메인 캐릭터" 
                className="max-w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-blue-200/30 via-pink-200/30 to-yellow-200/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <SectionTitle 
            title="인기 굿즈" 
            subtitle="가장 많은 사랑을 받고 있는 제품들을 만나보세요." 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button to="/goods" variant="outline">
              <span>모든 굿즈 보기</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Test Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <SectionTitle 
            title="재미있는 정치성향 테스트" 
            subtitle="몇 가지 질문에 답하고 나에게 맞는 굿즈도 추천받아보세요." 
            centered
          />
          
          <div className="max-w-2xl mx-auto">
            <TestQuestion question="사회 문제를 해결하는 데 있어 정부의 역할보다 개인과 시장의 자율성이 더 중요하다." />
            
            <div className="mt-8 text-center">
              <Button to="/test" variant="secondary">
                <span>전체 테스트 하러가기</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;