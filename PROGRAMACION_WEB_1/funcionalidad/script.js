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



// matriz para  BORRAR O NO
// 111
// 121
// 111
/*
document.getElementById('generate-matrix').addEventListener('click', () => {
  const n = parseInt(document.getElementById('matrix-size').value);
  if (isNaN(n) || n < 1) {
    alert('Por favor, ingrese un n válido mayor a 0.');
    return;
  }

  const matrix = generateLayeredMatrix(n);
  renderMatrix(matrix);
});

function generateLayeredMatrix(n) {
  const size = 2 * n - 1; // El tamaño total de la matriz será (2n - 1)
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));

  let layerValue = 1;
  let start = 0;
  let end = size - 1;

  while (start <= end) {
    for (let i = start; i <= end; i++) {
      matrix[start][i] = layerValue; // Fila superior
      matrix[end][i] = layerValue; // Fila inferior
      matrix[i][start] = layerValue; // Columna izquierda
      matrix[i][end] = layerValue; // Columna derecha
    }
    layerValue++;
    start++;
    end--;
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
