import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, MessageCircle, Target } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle 
              title="프로젝트 소개" 
              centered
            />
          </motion.div>
          
          <div className="text-center mb-12">
            <p className="text-xl leading-relaxed text-gray-600">
              <span className="font-semibold">중도와화합</span>은 정치적 견해가 다른 사람들이 서로를 이해하고
              웃으며 함께할 수 있는 사회를 만들기 위한 프로젝트입니다. 유쾌한 굿즈와 테스트를 통해
              우리의 차이를 재미있게 바라보고, 그 안에서 공통점을 찾아보고자 합니다.
            </p>
          </div>
        </div>
        
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">우리의 가치</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard 
              icon={<Heart size={24} />}
              title="포용성"
              description="서로 다른 생각과 가치관을 존중하고 포용하는 문화를 만들어갑니다."
            />
            <ValueCard 
              icon={<Users size={24} />}
              title="공동체"
              description="정치적 견해를 넘어 함께 웃고 공감할 수 있는 공동체를 지향합니다."
            />
            <ValueCard 
              icon={<MessageCircle size={24} />}
              title="대화"
              description="건강한 대화와 토론을 통해 서로의 관점을 이해하고 배웁니다."
            />
            <ValueCard 
              icon={<Target size={24} />}
              title="유쾌함"
              description="심각한 주제도 유쾌하게 접근하여 웃음과 함께 생각할 기회를 제공합니다."
            />
          </div>
        </section>
        
        <section className="bg-blue-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">프로젝트 시작 배경</h2>
          
          <div className="prose max-w-none">
            <p>
              최근 몇 년간 우리 사회는 정치적 양극화가 심화되면서 서로 다른 의견을 가진 사람들 사이의 
              대화와 소통이 어려워지고 있습니다. 뉴스와 소셜 미디어에서는 날카로운 대립과 비난이 
              일상이 되었고, 이로 인해 많은 사람들이 피로감을 느끼고 있습니다.
            </p>
            <p>
              이러한 상황에서 우리는 정치적 견해 차이를 인정하면서도, 그것이 우리의 일상적인 관계와 
              웃음을 방해하지 않았으면 하는 마음으로 이 프로젝트를 시작했습니다. 재미있는 굿즈와 
              테스트를 통해 우리의 정치적 성향을 가볍게 돌아보고, 서로 다른 생각을 가진 사람들과도 
              웃으며 대화할 수 있는 계기를 마련하고자 합니다.
            </p>
            <p>
              우리는 정치적 중도를 강요하거나 특정 이념을 옹호하지 않습니다. 다만, 다양한 생각과 
              가치관이 공존할 수 있는 건강한 사회문화를 만드는 데 작은 기여를 하고 싶습니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;