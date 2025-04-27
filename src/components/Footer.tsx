import React from 'react';
import { Heart, Instagram, Twitter, Mail, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-pink-400" />
              <span className="ml-2 text-xl font-bold">중도와화합</span>
            </div>
            <p className="text-gray-300 mb-4">
              서로 다른 우리가 함께 웃을 수 있는 사회를 만들기 위한 프로젝트입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/goods" className="text-gray-300 hover:text-pink-400 transition-colors">
                  굿즈 보기
                </Link>
              </li>
              <li>
                <Link to="/test" className="text-gray-300 hover:text-pink-400 transition-colors">
                  테스트 하러 가기
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">
                  프로젝트 소개
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="flex items-start mb-2">
              <Mail className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                contact@example.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} 중도와화합. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;