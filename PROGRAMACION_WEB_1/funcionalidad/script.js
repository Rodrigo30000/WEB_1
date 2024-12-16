document.getElementById('generate-matrix').addEventListener('click', () => {
  const n = parseInt(document.getElementById('matrix-size').value);
  if (isNaN(n) || n < 1) {
    alert('Por favor, ingrese un n válido mayor a 0.');
    return;
  }

  const matrix = generateZigZagMatrix(n);
  renderMatrix(matrix);
});

function generateZigZagMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let value = 1;

  for (let row = 0; row < n; row++) {
    if (row % 2 === 0) {
      // Llenar de izquierda a derecha
      for (let col = 0; col < n; col++) {
        matrix[row][col] = value++;
      }
    } else {
      // Llenar de derecha a izquierda
      for (let col = n - 1; col >= 0; col--) {
        matrix[row][col] = value++;
      }
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


// matriz caracol
/**
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

 */
