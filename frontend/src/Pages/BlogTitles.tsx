import React, { useState } from 'react';
import { Hash, Sparkle } from 'lucide-react';
import '../Pages/BlogTittles.scss';
import axios from 'axios';
import toast from 'react-hot-toast';
import Markdown from 'react-markdown';
import { useAuth } from '@clerk/clerk-react';

const blogCategories = [
  'General', 'Technology', 'Business', 'Health', 'Lifestyle', 'Education', 'Travel', 'Food'
];


const BlogTitles = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const { getToken } = useAuth();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || !selectedCategory) {
      toast.error('Please enter a keyword and select a category.');
      return;
    }

    try {
      setLoading(true);
      const token = await getToken();
      console.log('Clerk Token:', token); 

      const prompt = `Generate a blog title for the keyword "${input}" in the category "${selectedCategory}"`;

      const { data } = await axios.post(
        'https://aichampiondechampion.onrender.com/api/ai/generate-blog-title', 
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message || 'Failed to generate title');
      }
    } catch (error: any) {
      console.error('Error:', error);
      toast.error(error?.response?.data?.message || error?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="write-titles-container">
      <form onSubmit={onSubmitHandler} className="article-box-text">
        <div className="title-text-1">
          <Sparkle />
          <h4>Ai Champ Blog Titles</h4>
        </div>

        <div className="title-input">
          <p>Keyword</p>
          <input
            type="text"
            placeholder="The future of AI"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>

        <div className="article-tiles-category">
          <p>Category</p>
          <div className="options-categories">
            {blogCategories.map((item) => (
              <span
                key={item}
                onClick={() => setSelectedCategory(item)}
                className={`option-length-box ${selectedCategory === item ? 'selected' : ''}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <button type="submit" disabled={loading || !input || !selectedCategory}>
          {loading ? 'Generating...' : 'Generate Titles'}
        </button>
      </form>

      <div className="article-dop">
        <div className="article-part">
          <Hash />
          <h4>Generated Titles</h4>
          <div className="workspace-article">
            {content ? (
              <Markdown>{content}</Markdown>
            ) : (
              <>
                <Hash />
                <p>Enter a keyword and select a category to generate blog titles.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
