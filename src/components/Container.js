import { Button} from 'antd';

const Container = (props) => {
    const { newWord, time, inputValue, setInputValue,disabled,handleInput,handleStart}=props;
    return ( 
        <div className="container">
            <div className="showWord">
                <p>{newWord}</p>
            </div>
            <div className="timer">
                <p>{time}</p>
            </div>
            <div className="input">
                <input 
                    value={inputValue} 
                    disabled={disabled && disabled}
                    onKeyPress={e => handleInput(e)}
                    onChange={e=>setInputValue(e.target.value)}
                    placeholder={disabled ? '' : 'press enter to compare word'}
                />
                <Button className="button" type="primary" onClick={()=>handleStart()}>
                  {disabled ? 'Start' : 'Restart'}
                </Button>
            </div>
        </div>
     );
}
 
export default Container;