import React from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onPage: () => void;
  isLoading: boolean;
}

const LoadMoreBtn = ({ onPage, isLoading }) => {
  return (
    <div>
      <button className={s.loadBtn} onClick={onPage} type="button" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
};
export default LoadMoreBtn;
