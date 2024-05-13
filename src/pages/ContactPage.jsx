import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';

import API from '../utils/API';

export default function ContactPage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  
  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <h1>Contact Me Through this Form</h1>
      <form>
        <label>Your Request</label>
        <textarea></textarea>
      </form>
      <h3>My Email: </h3>
      <h3>My Github: </h3>
      <h3>My Website: </h3>
    </div>
  );
}
