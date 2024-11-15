import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value.trim();
    if (inputValue === '') {
      toast.error('Please enter the field', {
        style: {
          backgroundColor: '#D924247F',
          color: '#fff',
        },
      });
      return;
    }

    onSubmit(inputValue);
    e.target.reset();
  };
  return (
    <header className={s.header}>
      <form className={s.form} name="searchForm" onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
