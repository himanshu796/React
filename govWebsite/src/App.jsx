import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './App.css';

// TODO: Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const [members, setMembers] = useState([]);
  const [newsList, setNewsList] = useState([
    {
      title: 'Community Meeting',
      content: 'Join us for the monthly community meeting on October 15th at City Hall.'
    },
    {
      title: 'New Recycling Program',
      content: 'We are launching a new recycling initiative. Details coming soon!'
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'members'));
        const data = querySnapshot.docs.map(doc => doc.data());
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  const addNews = () => {
    if (newTitle && newContent) {
      setNewsList([...newsList, { title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  return (
    <div className="w-full">
      {/* CHANGED → Tailwind header */}
      <header className="bg-blue-900 w-full text-white text-center p-6">
        <h1 className="text-3xl font-bold"></h1>
        <p className="text-lg mt-1">Stay informed and connected with your community.</p>
      </header>

      <div className="flex w-full mx-auto mt-6 p-6 bg-white shadow-lg gap-6">
        {/* Community Members */}
        <div className="flex-2 overflow-hidden relative">
          <h2 className="text-2xl font-semibold mb-4">Community Members</h2>

          <div className="flex animate-scroll whitespace-nowrap">
            {members.map((member, index) => (
              <div key={index} className="mr-6 text-center">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mx-auto"
                />
                <p className="mt-2 font-medium">{member.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* News */}
        <div className="flex-1 pl-6 border-l border-gray-300">
          <h2 className="text-2xl font-semibold mb-4">News & Announcements</h2>

          <div>
            {newsList.map((news, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold text-xl">{news.title}</h3>
                <p className="text-gray-700 mt-1">{news.content}</p>
              </div>
            ))}
          </div>

          {/* Post Announcement */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Post New Announcement</h3>

            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Title"
              className="block w-full mb-3 p-3 border rounded-lg"
            />

            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Content"
              className="block w-full mb-3 p-3 border rounded-lg h-28"
            />

            <button
              onClick={addNews}
              className="w-full p-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
