import logo from './logo.svg';
import './App.css';
import Gallery from 'react-photo-gallery';

const photos = [
  
  {
    src: 'photo_2023-09-15_11-25-42.jpg'
  },
  {
    src: 'photo_2023-09-15_11-25-45.jpg'
  },
  {
    src: 'photo_2023-09-15_11-44-14.jpg'
  },
  {
    src: 'photo_2023-09-15_11-46-30.jpg'
  },
  {
    src: 'photo_2023-09-15_11-50-00.jpg'
  },
  {
    src: 'photo_2023-09-15_11-53-26.jpg'
  },
  {
    src: 'photo_2023-09-15_11-55-37.jpg'
  },
  {
    src: 'photo_2023-09-15_11-58-41.jpg'
  },
  {
    src: 'photo_2023-09-15_12-04-25.jpg'
  },
  {
    src: 'photo_2023-09-15_11-16-58.jpg'
  },
  {
    src: 'photo_2023-09-15_11-18-13.jpg'
  },
  {
    src: 'photo_2023-09-15_11-19-29.jpg'
  },
  {
    src: 'photo_2023-09-15_11-20-47.jpg'
  },
  {
    src: 'photo_2023-09-15_11-24-42.jpg'
  },
  {
    src: 'photo_2023-09-15_11-25-02.jpg'
  },
  {
    src: 'photo_2023-09-15_11-25-08.jpg'
  },
  {
    src: 'photo_2023-09-15_11-25-12.jpg'
  },
  {
    src: 'photo_2023-09-15_11-25-18.jpg'
  },
  {
    src: 'photo_2023-09-15_11-25-30.jpg'
  },
  {
    src: 'photo_2023-09-15_11-25-35.jpg'
  },
  {
    src: 'photo_2023-09-15_11-25-39.jpg'
  },
];

const gallery = photos.map((pic) =>
<div>
<p>{pic.text}</p>
<img style={{maxWidth: "100%"}} src={pic.src} />
</div>
);

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Te amo harley ❤️
        </h1>
        <h1>
          Un año contigo en mi vida
        </h1>
        <div style={{maxWidth: "100%"}}>

        {gallery}
        </div>
        
      </header>
    </div>
  );
}

export default App;
