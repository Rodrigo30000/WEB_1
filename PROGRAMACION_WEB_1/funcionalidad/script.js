document.getElementById('generate-matrix').addEventListener('click', () => {
    const n = parseInt(document.getElementById('matrix-size').value);
    if (isNaN(n) || n < 1) {
      alert('Por favor, ingrese un n válido mayor a 0.');
      return;
    }
  
    const matrix = generateSpiralMatrix(n);
    renderMatrix(matrix);
  });
  
  function generateSpiralMatrix(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let value = 1;
    let top = 0, left = 0, bottom = n - 1, right = n - 1;
  
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) matrix[top][i] = value++;
      top++;
  
      for (let i = top; i <= bottom; i++) matrix[i][right] = value++;
      right--;
  
      if (top <= bottom) {
        for (let i = right; i >= left; i--) matrix[bottom][i] = value++;
        bottom--;
      }
  
      if (left <= right) {
        for (let i = bottom; i >= top; i--) matrix[i][left] = value++;
        left++;
      }
    }
  
    return matrix;
  }
  
  function renderMatrix(matrix) {
    const container = document.getElementById('matrix-container');
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${matrix.length}, auto)`;
  
    matrix.forEach(row => {
      row.forEach(cell => {
        const cellDiv = document.createElement('div');
        cellDiv.textContent = cell;
        cellDiv.className = 'matrix-cell';
        container.appendChild(cellDiv);
      });
    });
  }
  