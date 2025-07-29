import React, { useState } from 'react';
import '../Pages/GenerateImage.scss';
import { Image, Sparkle } from 'lucide-react';

const ImageStyle = [
  'Realistic style',
  'Ghibli style',
  'Anime style',
  'Cartoon style',
  'Fantasy style',
  '3D style',
  'Portrait style'
];

const GenerateImage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Realistic style');
  const [input, setInput] = useState<string>('');


  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Article Topic:', input);
    console.log('Selected Category:', selectedCategory);
  };

  return (
    <div className="generate-image-container">
      <form onSubmit={onSubmitHandler} className="article-box-text">
        <div className="title-text-1">
          <Sparkle />
          <h4>AI Champ Article</h4>
        </div>
        <div className="title-input">
          <p>Describe Your Image</p>
          <textarea
            placeholder="The future of AI"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>
        <div className="article-tiles-category">
          <p>Style</p>
          <div className="options-categories">
            {ImageStyle.map((item, index) => (
              <span
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`option-length-box ${selectedCategory === item ? 'selected' : ''}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <button type="submit">Generate Titles</button>
      </form>
      <div className="article-dop">
        <div className="article-part">
          <Image/>
          <h4>Generated Image</h4>
          <div className="workspace-article">
            <Image />
            <p>Enter a Topic and click "Generate Titles" to get started.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImage;
