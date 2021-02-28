import Word from './components/Word'
import React, { useState ,useEffect} from 'react';
import Container from './components/Container';
import { Layout } from 'antd';
import Results from './components/Results';

const { Header,Sider, Content } = Layout;




function App() {
  const [word, setWord] = useState(Word);
  const [newWord,setNewWord] = useState(word[0])
  const [time,setTime] = useState(50);
  const [inputValue,setInputValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [num, setNum] = useState(0);
  const [rightResult,setRightResult] = useState([]);
  const [wrongResult,setWrongResult] = useState([]);


  const showWordNum = Math.floor(Math.random()*word.length);
 
  const checkAnswer = ()=>{
    if(inputValue.trim() === newWord){
      setRightResult(prevValue=>[...prevValue,newWord]);
      setNum(num => num+1);
    }else{
      setWrongResult(prevValue => [...prevValue,inputValue]);
    }
  }

  const handleInput=(e)=>{
      if(e.charCode === 13 && inputValue.trim() !==''){
        checkAnswer();
        setNewWord(word[showWordNum]);
        setInputValue('');
      }
  }

  const handleStart = ()=>{
    setDisabled(!disabled);
    setInputValue('');
    setNum(0);
    setRightResult([]);
    setWrongResult([]);
    setWord('salute');
  }
   
  useEffect(()=>{
     if(time<= 50 && time !==0 && disabled === false){
       setTimeout(()=>setTime(time=>time-1),1000)
     }else if (disabled) {
       setTime(50);
     }else if(time===0){
      setDisabled(true);
     } 
  },[disabled,time])


  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{color:'white',textAlign:'center',fontSize:'1.5rem'}}>Spell Game</Header>
        <Layout>
          <Content>
            <Container 
              newWord={newWord}
              time={time}
              inputValue={inputValue}
              setInputValue={setInputValue}
              disabled={disabled}
              handleInput={handleInput}
              handleStart={handleStart}
            />
          </Content>
          <Sider theme="light">
            <Results
              num={num}
              rightResult={rightResult}
              wrongResult={wrongResult}
             
            />
          </Sider>
        </Layout>
      </Layout>

      
    </div>
  );
}

export default App;
