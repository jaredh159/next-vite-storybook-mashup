import React from 'react';
import { Link } from 'react-router-dom';

const Foo: React.FC = () => (
  <div>
    <h1>Foo</h1>
    <Link to="/">Home</Link>
  </div>
);

export default Foo;
