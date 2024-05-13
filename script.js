const graphs = document.querySelectorAll('.graph');
const amounts = document.querySelectorAll('.amount');

graphs.forEach((graph, index) => {
  graph.addEventListener('mouseenter', () => {
    amounts[index].style.visibility = 'visible';
    amounts[index].style.cursor = 'pointer';
    graph.style.opacity = "0.5";
    amounts[index].style.background = 'hsl(25, 47%, 15%)';
    amounts[index].style.color = 'hsl(33, 100%, 98%)';
    amounts[index].style.padding = '5px';
  });

  graph.addEventListener('mouseleave', () => {
    amounts[index].style.visibility = 'hidden';
    graph.style.opacity = "1";
  });
});


