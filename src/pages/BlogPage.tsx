import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    const dummyPosts: BlogPost[] = [
      {
        id: 1,
        title: "중도와 화합의 시작",
        content: "안녕하세요, 중도와 화합입니다. 이 블로그는 중도와 화합의 이야기를 나누는 공간입니다. 앞으로 다양한 주제로 글을 작성할 예정이니 많은 관심 부탁드립니다.",
        date: "2024-03-20",
        author: "관리자"
      },
      {
        id: 2,
        title: "우리의 첫 번째 굿즈",
        content: "중도와 화합의 첫 번째 굿즈가 출시되었습니다! 이번 굿즈는 우리의 가치를 담은 디자인으로 제작되었으며, 앞으로 더 많은 굿즈를 준비하고 있습니다.",
        date: "2024-03-21",
        author: "관리자"
      },
      {
        id: 3,
        title: "화합의 의미",
        content: "화합이란 무엇일까요? 단순한 합치가 아닌, 서로의 차이를 인정하고 존중하는 것에서 시작됩니다. 이번 글에서는 화합의 진정한 의미에 대해 이야기해보려 합니다.",
        date: "2024-03-22",
        author: "관리자"
      }
    ];
    setPosts(dummyPosts);
  }, []);

  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">블로그</h1>
        {isAdmin && (
          <button
            onClick={() => navigate('/blog/create')}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Plus className="w-5 h-5 mr-2" />
            새 글 작성
          </button>
        )}
      </div>
      <div className="grid gap-6">
        {posts.map((post) => (
          <motion.article
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div className="text-gray-600 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            <p className="text-gray-700">{post.content}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage; 