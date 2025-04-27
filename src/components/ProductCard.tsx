import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  isBestseller?: boolean;
  externalLink: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="card group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {product.isBestseller && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            베스트셀러
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{product.price.toLocaleString()}원</span>
          <Button 
            href={product.externalLink} 
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            구매하러 가기
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;