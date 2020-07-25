
//Default input state in editor 
const defaultInput= `# This is my H1 size header
## This is my H2 size header
### This is my H3 size header
Here is the [link](https://github.com/markedjs/marked) to Markdown parser
It also has inline code \`let s="Hello World!";\`
It also has code blocks such as

\`\`\` 
function helloCopyWorld(hello){
  let world = hello;
  return world;
}
\`\`\`

> You can also use block quotes
> Programming is like gaming

It has feature to **BE** **bold**

It has list too 
- A grocery List
-food
-coffee

And you can add an image:

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)`;


//Main React component 
 class MainComponent extends React.Component{
      constructor(props){
        super(props);

        //default state of component
        this.state={
          input:defaultInput
        };
        this.handleChange=this.handleChange.bind(this);
      }

      //changes input state in editor
      handleChange(event){
        this.setState({
          input:event.target.value
        });
      }

      /**render method of MainComponent
        textarea with value as current state of input and set state with handleChange onChange in input state  
        change innerHTML of div with id preview to display parsed markdown output from marked library along with carraige returns parsed to br
     **/
      render(){
        return(
          <div className="container-fluid d:flex" id="main">
              
              <div id="textAreaContainer">
                <h3 id="editor-head">Markdown Editor</h3>
                <textarea className="bg-dark " id="editor" value={this.state.input} onChange={this.handleChange}/>
              </div>

              <div id="previewContainer">
                <h3 id="preview-head">Markdown preview</h3>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.input,{breaks:true})}}>
                </div>
              </div>

          </div>
        );
      }
  }

  //renders MainComponent to HTML DOM
  ReactDOM.render(<MainComponent />,document.getElementById("container"));
