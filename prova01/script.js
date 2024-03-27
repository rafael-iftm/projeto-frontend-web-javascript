document.addEventListener("DOMContentLoaded", function() {
    const selectCategory = document.getElementById("selectCategory");
    const promoImage = document.getElementById("promoImage");
    const promoInfo = document.getElementById("promoInfo");
  
    let currentIndex = 0;
    let products = [];
  
    selectCategory.addEventListener("change", function() {
      fetchProducts(selectCategory.value);
    });
  
    function fetchProducts(category) {
      fetch("data.json")
        .then(response => response.json())
        .then(data => {
          products = data[category];
          currentIndex = 0;
          showPromotion();
          setInterval(showPromotion, 3000);
        })
        .catch(error => console.error('Erro ao obter os dados:', error));
    }
  
    function showPromotion() {
      const product = products[currentIndex];
      promoImage.src = "img/" + selectCategory.value + "/" + product.imagem;
      promoInfo.textContent = `${product.Marca} ${product.Modelo} - R$ ${product.Valor}`;
      currentIndex = (currentIndex + 1) % products.length;
    }
  
    fetchProducts(selectCategory.value);
  });
  