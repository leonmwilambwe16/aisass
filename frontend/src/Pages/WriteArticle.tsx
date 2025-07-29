import React, { useState } from 'react';
import '../Pages/WriteArticle.scss';
import { Edit, Sparkle } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import Markdown from 'react-markdown';

type ArticleLength = {
  wordCount: number;
  label: string;
};



const articleLengths: ArticleLength[] = [
  { wordCount: 800, label: 'Short (500–800 wds)' },
  { wordCount: 1200, label: 'Medium (800–1200 wds)' },
  { wordCount: 1600, label: 'Long (1200–1600 wds)' },
];

const WriteArticle = () => {
  const [selectedLength, setSelectedLength] = useState<number | null>(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const { getToken } = useAuth();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedLength) return;

    const selected = articleLengths.find(
      (item) => item.wordCount === selectedLength
    );
    if (!selected) return;

    try {
      setLoading(true);
      const token = await getToken();
      console.log('Clerk Token:', token); 

      const prompt = `Write an article about ${input} in ${selected.label}`;
      
      const { data } = await axios.post(
        'https://aichampiondechampion.onrender.com/api/ai/generate-article', 
        { prompt, length: selectedLength },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message || 'Failed to generate article.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Something went wrong.');
      } else {
        toast.error((error as Error).message || 'Unexpected error.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='write-article-container'>
      <form onSubmit={onSubmitHandler} className='article-box-text'>
        <div className='title-text-article-1'>
          <Sparkle />
          <h4>Ai Champ Article</h4>
        </div>

        <div className='article-input'>
          <p>Article Topic</p>
          <input
            className='article-write-input'
            type='text'
            placeholder='The future of AI'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>

        <div className='article-legnt'>
          <p>Article Length</p>
          <div className='length-options'>
            {articleLengths.map(({ wordCount, label }) => (
              <span
                key={wordCount}
                onClick={() => setSelectedLength(wordCount)}
                className={`option-length-box ${
                  selectedLength === wordCount ? 'selected' : ''
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <button disabled={loading || !input || !selectedLength}>
          {loading ? 'Generating...' : 'Generate Article'}
        </button>
      </form>

      <div className='article-dop'>
        <div className='article-part'>
          <Edit />
          <h4>Generated Article</h4>
          <div className='workspace-article'>
            {content ? (
              <Markdown>{content}</Markdown>
            ) : (
              <>
                <Edit />
                <p>Enter a topic and click "Generate article" to get started.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
