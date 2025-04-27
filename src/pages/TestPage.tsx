import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import CharacterImage from '../components/CharacterImage';
import SectionTitle from '../components/SectionTitle';

const TestPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle 
              title="정치성향 테스트" 
              subtitle="당신의 정치성향은 무엇일까요? 재미있게 알아보고, 딱 맞는 굿즈를 추천받으세요!" 
              centered
            />
          </motion.div>
          
          <div className="flex justify-center mb-10">
            <CharacterImage 
              src="https://images.pexels.com/photos/7303182/pexels-photo-7303182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="테스트 캐릭터" 
              className="w-64 h-auto rounded-lg"
            />
          </div>
          
          <div className="bg-white shadow-lg rounded-xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-4">테스트 내용</h3>
            <p className="text-gray-600 mb-6">
              총 20개의 질문에 대해 동의 정도를 선택하면 당신의 정치적 성향과 그에 맞는 굿즈를 추천해드립니다. 
              테스트 소요 시간은 약 5분입니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">경제 관점</h4>
                <p className="text-sm text-blue-700">시장과 정부 역할에 대한 견해</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">사회 관점</h4>
                <p className="text-sm text-pink-700">사회적 가치와 전통에 대한 견해</p>
              </div>
            </div>
            
            <Button 
              href="#" 
              variant="primary"
              className="flex items-center justify-center w-full"
            >
              <span>테스트 시작하기</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">참고하세요!</h3>
            <p className="text-yellow-700">
              이 테스트는 재미 요소를 중심으로 제작되었으며, 학술적/정치적 정확성을 보장하지 않습니다.
              테스트 결과는 굿즈 추천을 위한 참고 자료로 활용됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;