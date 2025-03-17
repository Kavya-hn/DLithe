import { useState } from "react";
import "./Home.css";
import "./Subscription";

const playlists = [
  { id: 1, name: "Top Hits", image: "https://i.ytimg.com/vi/kXHiIxx2atA/maxresdefault.jpg" },
  { id: 2, name: "Chill Vibes", image: "https://timesofindia.indiatimes.com/photo/msid-96760750,imgsize-217372.cms" },
  { id: 3, name: "Workout", image: "https://tse1.mm.bing.net/th?id=OIP.cO8pKPgHAGTRMpyIQODe-wAAAA&pid=Api&P=0&h=180" },
];

const artists = [
  
  { id: 1, name: "Arijit Singh", image: "https://tse4.mm.bing.net/th?id=OIP.Hg3qblSVwAa0X5SwNAYsHAHaEo&pid=Api&P=0&h=180" },
  { id: 2, name: "A.R. Rahman", image: "https://wallpapercave.com/wp/wp3975288.jpg" },
  { id: 3, name: "Sachin-Jigar", image: "https://www.tellychakkar.com/sites/www.tellychakkar.com/files/s3fs-public/images/movie_image/2024/07/04/Jigar.jpg" },
  { id: 4, name: "Vishal-Shekhar", image: "https://tse2.mm.bing.net/th?id=OIP.BByTdvmWdq8u3xatOMYiNwHaEK&pid=Api&P=0&h=180" },

];
const singers = [
  { name: "Arijit Singh", image: "arijit.jpg", info: "Indian playback singer known for soulful songs." },
  { name: "Taylor Swift", image: "taylor.jpg", info: "American singer-songwriter with multiple Grammy awards." },
  { name: "Ed Sheeran", image: "ed.jpg", info: "English singer known for hit songs like 'Shape of You'." }
];

const albums = [
  { title: "Shape of You", artist: "Ed Sheeran", image: "shape.jpg" },
  { title: "Lover", artist: "Taylor Swift", image: "lover.jpg" },
  { title: "Tum Hi Ho", artist: "Arijit Singh", image: "tumhiho.jpg" }
];

const Home = () => {
  return (
    <div>
      <header>
        <h1>Spotify Clone</h1>
        <input type="text" placeholder="Search..." />
        <button>Login</button>
      </header>

      <main>
        <h2>Top Singers</h2>
        <div className="artists">
          {singers.map((singer, index) => (
            <div key={index} className="singer-card">
              <img src={singer.image} alt={singer.name} />
              <h3>{singer.name}</h3>
              <p>{singer.info}</p>
            </div>
          ))}
        </div>

        <h2>Popular Albums</h2>
        <div className="album-container">
          {albums.map((album, index) => (
            <div key={index} className="album-card">
              <img src={album.image} alt={album.title} />
              <h3>{album.title}</h3>
              <p>{album.artist}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export {Home};

const MusicApp = () => {
  return (
    <div>
      <h2>Playlists</h2>
      <div>
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <img src={playlist.image} alt={playlist.name} />
            <p>{playlist.name}</p>
          </div>
        ))}
      </div>

      <h2>Artists</h2>
      <div>
        {artists.map((artist) => (
          <div key={artist.id}> 
            <img src={artist.image} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { MusicApp };


const songs = [
  { title: "Blinding Lights", language: "english", singer: "The Weeknd" },
  { title: "Save Your Tears", language: "english", singer: "The Weeknd" },
  { title: "Tum Hi Ho", language: "hindi", singer: "Arijit Singh" },
  { title: "Agar Tum Saath Ho", language: "hindi", singer: "Arijit Singh" },
  { title: "Rowdy Baby", language: "tamil", singer: "Dhanush" },
  { title: "Why This Kolaveri Di", language: "tamil", singer: "Dhanush" },
  { title: "Anisuthide", language: "kannada", singer: "Sonu Nigam" },
  { title: "Belageddu", language: "kannada", singer: "Vijay Prakash" },
  { title: "Butta Bomma", language: "telugu", singer: "Armaan Malik" },
  { title: "Samajavaragamana", language: "telugu", singer: "Sid Sriram" },
  { title: "Shape of You", language: "english", singer: "Ed Sheeran" },
  { title: "Perfect", language: "english", singer: "Ed Sheeran" },
  { title: "Photograph", language: "english", singer: "Ed Sheeran" },
  { title: "Tera Ban Jaunga", language: "hindi", singer: "Akhil Sachdeva" },
  { title: "Dil Dhadakne Do", language: "hindi", singer: "Farhan Akhtar" },
  { title: "Jimikki Kammal", language: "malayalam", singer: "Vineeth Sreenivasan" },
  { title: "Uyire", language: "tamil", singer: "Hariharan" },
  { title: "Vachindamma", language: "telugu", singer: "Sid Sriram" },
  { title: "Karuppu Vellai", language: "tamil", singer: "Anirudh Ravichander" },
  { title: "Huttidare Kannada", language: "kannada", singer: "Dr. Rajkumar" },
  { title: "Geleya Geleya", language: "kannada", singer: "Sanjith Hegde" },
  { title: "Maan Meri Jaan", language: "hindi", singer: "King" },
  { title: "Faded", language: "english", singer: "Alan Walker" },
  { title: "On My Way", language: "english", singer: "Alan Walker" },
  { title: "Taki Taki", language: "english", singer: "DJ Snake" },
  { title: "Love Me Like You Do", language: "english", singer: "Ellie Goulding" },
  { title: "Senorita", language: "english", singer: "Shawn Mendes" },
  { title: "Cheap Thrills", language: "english", singer: "Sia" },
  { title: "Attention", language: "english", singer: "Charlie Puth" },
  { title: "Sugar", language: "english", singer: "Maroon 5" },
  { title: "Havana", language: "english", singer: "Camila Cabello" },
  { title: "Memories", language: "english", singer: "Maroon 5" },
  { title: "Despacito", language: "spanish", singer: "Luis Fonsi" },
  { title: "Lungi Dance", language: "hindi", singer: "Yo Yo Honey Singh" },
  { title: "Gallan Goodiyan", language: "hindi", singer: "Farhan Akhtar" },
  { title: "Bekhayali", language: "hindi", singer: "Arijit Singh" },
  { title: "Bulleya", language: "hindi", singer: "Amit Mishra" },
  { title: "Vaaste", language: "hindi", singer: "Dhvani Bhanushali" },
  { title: "Shayad", language: "hindi", singer: "Arijit Singh" },
  { title: "Kannamma", language: "tamil", singer: "Anirudh Ravichander" },
  { title: "Vaathi Coming", language: "tamil", singer: "Anirudh Ravichander" },
  { title: "Aalaporaan Thamizhan", language: "tamil", singer: "A.R. Rahman" },
  { title: "Ranjithame", language: "tamil", singer: "Vijay" },
  { title: "Inkem Inkem Kavale", language: "telugu", singer: "Sid Sriram" },
  { title: "Adiga Adiga", language: "telugu", singer: "Sid Sriram" },
  { title: "Kolussu Thenni", language: "malayalam", singer: "Shreya Ghoshal" },
  { title: "Malare", language: "malayalam", singer: "Vineeth Sreenivasan" },
  { title: "Thallipogathey", language: "tamil", singer: "A.R. Rahman" },
  { title: "Yennai Maatrum Kadhale", language: "tamil", singer: "Sid Sriram" },
  
];

export function LikedSongs({ likedSongs }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredLikedSongs = likedSongs.filter(song => 
    song.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-3">Liked Songs</h2>
      <input 
        type="text" 
        className="p-2 text-black w-full mb-3" 
        placeholder="Search Liked Songs" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul className="list-disc pl-5">
        {filteredLikedSongs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SpotifyHomePage() {
  const [likedSongs, setLikedSongs] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedSinger, setSelectedSinger] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = songs.filter(
    (song) =>
      (!selectedLanguage || song.language === selectedLanguage) &&
      (!selectedSinger || song.singer === selectedSinger) &&
      (song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       song.singer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const addLikedSong = (song) => {
    if (!likedSongs.includes(song)) {
      setLikedSongs([...likedSongs, song]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <header className="flex items-center justify-between p-5 bg-gray-900">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/50" alt="Spotify Logo" className="mr-3" />
          <h1 className="text-3xl font-bold">Spotify</h1>
        </div>
        <input 
          type="text" 
          className="p-2 text-black" 
          placeholder="Search Songs or Singers" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded" 
          onClick={() => window.location.href = "/subscription"}
        >
          Subscribe
        </button>
      </header>
      <main className="flex-1 p-5 overflow-auto">
        <h2 className="text-3xl font-semibold mb-5">Your Playlists</h2>
        <select className="p-2 text-black" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
          <option value="">Select Language</option>
          {[...new Set(songs.map((song) => song.language))].map((language) => (
            <option key={language} value={language}>{language.toUpperCase()}</option>
          ))}
        </select>
        <select className="p-2 text-black ml-4" value={selectedSinger} onChange={(e) => setSelectedSinger(e.target.value)}>
          <option value="">Select Singer</option>
          {[...new Set(songs.map((song) => song.singer))].map((singer) => (
            <option key={singer} value={singer}>{singer}</option>
          ))}
        </select>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Songs</h3>
          <ul className="list-disc pl-5">
            {filteredSongs.map((song, index) => (
              <li key={index} className="flex justify-between">
                <span>{song.title}</span>
                <button onClick={() => addLikedSong(song.title)} className="bg-blue-500 text-white px-2 py-1 rounded">Like</button>
              </li>
            ))}
          </ul>
        </div>
        <LikedSongs likedSongs={likedSongs} />
      </main>
    </div>
  );
}