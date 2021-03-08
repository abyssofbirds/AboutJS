const NumberJsx = 
    <div>
        <h1 className='modal-name'>Number</h1>
        <div className='modal-content'><h2>Синтаксис</h2>
            <div>new Number(value);</div>
                <div className='coding-window'>
                    <span className='grey'>1</span>  
                        <span className='blue'>var </span> 
                            <span className='light-blue'>a </span> 
                                <span className='white'>=</span> 
                                    <span className='blue'> new</span> Number
                                        <span className='yellow'> (</span>
                                            <span className='orange'>'123'</span>
                                                <span className='yellow'>)</span>
                                                    <span className='white'>;</span> 
                                                        <span className='grey'> // a === 123 is false</span>
                    <br /><span className='grey'>2</span>
                            <span className='blue'>var </span> 
                                <span className='light-blue'>b </span> 
                                    <span className='white'>=</span> Number
                                        <span className='yellow'> (</span>
                                            <span className='orange'>'123'</span>
                                                <span className='yellow'>)</span>
                                                    <span className='white'>;</span>
                                                        <span className='grey'>// b === 123 is true</span>
                    <br /><span className='grey'>3</span>  
                        <span className='light-blue'>a </span> 
                            <span className='blue'>instanceof  </span>
                                 Number
                                    <span className='white'>;</span>
                                        <span className='grey'>// is true</span>
                    <br /><span className='grey'>4</span>
                        <span className='light-blue'>b </span> 
                            <span className='blue'>instanceof </span>
                                Number
                                    <span className='white'>;</span>
                                        <span className='grey'>// is false</span></div>
                </div>
            </div>
            

const StringJsx = <div>
        <h1>String</h1>
    </div>


export {NumberJsx, StringJsx}
