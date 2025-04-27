import React, { useState } from 'react';
import { motion } from 'framer-motion';

const options = [
  { value: 'strongly-agree', label: '매우 동의' },
  { value: 'agree', label: '동의' },
  { value: 'neutral', label: '중립' },
  { value: 'disagree', label: '비동의' },
  { value: 'strongly-disagree', label: '매우 비동의' },
];

interface TestQuestionProps {
  question: string;
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-6">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option) => (
          <motion.div
            key={option.value}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              selected === option.value
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-primary-300'
            }`}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(option.value)}
          >
            <label className="flex items-center cursor-pointer">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selected === option.value ? 'border-primary-500' : 'border-gray-400'
              }`}>
                {selected === option.value && (
                  <div className="w-3 h-3 rounded-full bg-primary-500" />
                )}
              </div>
              <span className="ml-3">{option.label}</span>
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestQuestion;