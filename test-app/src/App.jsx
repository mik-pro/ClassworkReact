import React from 'react';
import Header from './components/header.jsx';
import Navigation from './components/Navigation.jsx';
import BlogPost from './components/BlogPost.jsx';
import AuthorDetails from './components/AuthorDetails.jsx';
import Footer from './components/footer.jsx';
import './index.css';

const posts = [
  { id: 1, title: 'React-тің негіздері', content: 'React — бұл интерфейстерді құруға арналған күшті кітапхана.' },
  { id: 2, title: 'Компоненттер мен Props', content: 'Компоненттер — бұл React-та қайта қолданылатын UI бөліктері.' }
];

const author = {
  name: 'Ismail Miras',
  bio: 'Miras — fullstack developer and stydenet.'
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Navigation />
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
      <AuthorDetails name={author.name} bio={author.bio} />
      <Footer />
    </div>
  );
};

export default App;


