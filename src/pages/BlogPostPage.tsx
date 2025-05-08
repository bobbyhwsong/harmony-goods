import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MDEditor from '@uiw/react-md-editor';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

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

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTitle, setEditedTitle] = React.useState('');
  const [editedContent, setEditedContent] = React.useState('');

  React.useEffect(() => {
    const foundPost = dummyPosts.find(p => p.id === Number(id));
    if (foundPost) {
      setPost(foundPost);
      setEditedTitle(foundPost.title);
      setEditedContent(foundPost.content);
    }
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // TODO: API로 수정된 내용 저장
    if (post) {
      setPost({
        ...post,
        title: editedTitle,
        content: editedContent
      });
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('정말로 이 글을 삭제하시겠습니까?')) {
      // TODO: API로 삭제 요청
      navigate('/blog');
    }
  };

  if (!post) {
    return <div>로딩 중...</div>;
  }

  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-8"
      >
        {isEditing ? (
          <div className="space-y-6">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full text-2xl font-bold mb-4 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <MDEditor
              value={editedContent}
              onChange={(value) => setEditedContent(value || '')}
              height={400}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                취소
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                저장
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="text-gray-600 mb-6">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            <div className="prose max-w-none">
              <MDEditor.Markdown source={post.content} />
            </div>
            {isAdmin && (
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={handleEdit}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  수정
                </button>
                <button
                  onClick={handleDelete}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  삭제
                </button>
              </div>
            )}
          </>
        )}
      </motion.article>
    </div>
  );
};

export default BlogPostPage; 