const Part = (props) =>{
    return (
        <p>{props.name} {props.exercises}</p> 
    );
}

const Content = (props) =>{
    const data = props.parts;
    return (
        <div>
            <Part name={data[0].name} exercises={data[0].exercises}/>
            <Part name={data[1].name} exercises={data[1].exercises}/>
            <Part name={data[2].name} exercises={data[2].exercises}/>
        </div>
    );
}

export default Content;