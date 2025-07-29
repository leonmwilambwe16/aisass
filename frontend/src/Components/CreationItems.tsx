import React, { useState } from 'react';
import '../Components/Creationitems.scss';
import  Markdown from 'react-markdown'

interface CreationItem {
  prompt: string;
  type: string;
  createdAt: string | Date;
  content?: string;
}

interface Props {
  item: CreationItem;
}

const CreationItems = ({ item }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="Creationitems-container"
      onClick={() => setExpanded(prev => !prev)}
      style={{ cursor: 'pointer' }}
    >
      <div className="creation-items-content">
        <div className="creation-items-cart">
          <h2>{item.prompt}</h2>
          <p>
            {item.type} - {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
        <button type="button" onClick={e => e.stopPropagation()}>
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className="creation-items-expanded">
          {item.type === 'image' ? (
            item.content ? (
              <img src={item.content} alt="Generated visual" />
            ) : (
              <p>No image content available.</p>
            )
          ) : (
            item.content ? (
              <div>
                <Markdown>{item.content}</Markdown>
              </div>
            ) : (
              <p>No content available.</p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItems;


