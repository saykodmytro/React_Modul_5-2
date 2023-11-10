import axios from 'axios';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PostsPage = () => {
  const [searchedPosts, setSearchedPosts] = useState(null); // це буде стейт щоб ми зберігали отримані пости

  const [isLoading, setIsLoading] = useState(null); // стейт для індикатора завантаження

  const [error, setError] = useState(null); // стейт для індикатора помилки

  const [searchParams, setSearchParams] = useSearchParams(); // цей хук повертає кортеж, де перше значення це наш обєкт з пошуковим параметрам. Друге значення - це ф-я яка змінює ці параметри
  const queryValue = searchParams.get('query'); // таким чином ми отримуємо значення нашого пошукового параметра і записуємо його в queryValue
  console.log('queryValue: ', queryValue);

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value; // отримуємо значення із інпута по сабміту, яке користувач ввів
    console.log('value: ', value);

    setSearchParams({ query: value }); // записуємо нове значення  в адресн рядок
  };

  useEffect(() => {
    if (!queryValue) return;

    const fetchSearchedPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1&title=${queryValue}`
        );
        // ВАМ ПОТРІБНО БУДЕ ПРОСТО ЗРОБИТИ setSearchedPosts(data)
        setSearchedPosts([data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchedPosts();
  }, [queryValue]);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="">
          <span>Search post by id: </span>
          <input type="text" name="searchKey" required placeholder="12" />{' '}
          {/* щоб наша форма розрізняла інпути , треба кожному інпуту додати
          унікальний ідентифікатор пропс name */}
        </label>
        <button type="submit">Search post</button>
      </form>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {searchedPosts !== null &&
        searchedPosts.map(post => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <h3>PostId: {post.id}</h3>
              <code>{post.body}</code>
            </div>
          );
        })}
    </div>
  );
};

export default PostsPage;
