console.log('Indecision App');

var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hand of a computer',
  options: []
}

var onFormSubmit = (e) => {
  e.preventDefault();
  var option = e.target.elements.option.value;
  e.target.elements.option.value = '';
  app.options.push(option);
  render();
}

var onRemoveAll = () => {
  app.options = [];
  render();
}

var render = () => {
  var jsx = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onRemoveAll}>Remove all</button>
      {app.subTitle && <p>{app.subTitle}</p>}
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <input type="submit"/>
      </form>
    </div>
  )

  ReactDOM.render(jsx, document.getElementById('app'));
}

render();