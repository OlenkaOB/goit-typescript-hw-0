import s from './LoadMoreBtn.module.css';

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
