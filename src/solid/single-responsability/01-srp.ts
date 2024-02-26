(() => {

  interface Product { 
      id:   number;
      name: string;
  }
  
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.

  class Mailer {
    sendEmail() {
      console.log('Enviando correo a los clientes');
    }
  }

  class ProductService {

    constructor(private mailer: Mailer){}

    notifyClients() {
      this.mailer.sendEmail();
    }
  }

  class ProductBloc {
  
    constructor(private productService: ProductService) {}

    loadProduct( id: number ) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log('Producto: ',{ id, name: 'OLED Tv' });
    }

    saveProduct( product: Product ) {
      // Realiza una petición para salvar en base de datos 
      const saved = true;
      console.log('Guardando en base de datos', product );
      if (saved) {
        this.productService.notifyClients()
      }
    }
  
  }
  
  class CartBloc {
    

    onAddToCart( productId: number ) {
        // Agregar al carrito de compras
        console.log('Agregando al carrito ', productId );
    }
  }


  const mailer = new Mailer();
  const productService = new ProductService(mailer);
  const productBloc = new ProductBloc(productService);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  cartBloc.onAddToCart(10);








})();