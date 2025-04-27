import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const GoodsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            title="모든 굿즈" 
            subtitle="정치적 견해와 상관없이 모두가 즐길 수 있는 다양한 상품들을 만나보세요." 
          />
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
        
        {/* Info Message */}
        <div className="mt-16 p-6 bg-blue-50 rounded-lg text-center">
          <p className="text-blue-800 mb-2">모든 구매는 외부 결제 서비스로 연결됩니다.</p>
          <p className="text-sm text-blue-600">구매 관련 문의: contact@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default GoodsPage;