import './App.css';
import NavScroll from './components/NavScroll';
import HeadingBig from './components/HeadingBig';
import {Button} from 'react-bootstrap'

function App() {

  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]


  return (
    <>
    <NavScroll/>
    <HeadingBig/>
    <div style={{display:'flex',justifyContent:'space-around'}}>
    {productsArr.map((item,i) =>{
      return (
        <div>
          <h2>Album {i+1}</h2>
          <img src={item.imageUrl} alt='' />
        <p>{item.title}        ${item.price}</p>
        <Button>Add to Cart</Button>
        <p></p>
        </div>
      )
    })}
    </div>
    </>
  );
}

export default App;
