import marked from 'marked';

export default function() {
  return function(input) {
    return marked(input);
  }
}
