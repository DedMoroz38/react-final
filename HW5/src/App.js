import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import Profile from './profile/profile.js';
import './App.css'
import News from './news/news.js';
import MessageList from "./messanger/messagelist.js";




export default function App() {
  return (
    <Switch>
      <Route path='/chats'>
        <MessageList />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/'>
        <News />
      </Route>
    </Switch>
  );
}