import { render, h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

const App = () => <p>test</p>;

render(<App />, document.querySelector('#app'));
