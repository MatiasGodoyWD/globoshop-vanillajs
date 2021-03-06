const ProductsTable = (cartProds) => {
  return `
        <div class='table__container'>
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
               
                    ${cartProds.products
                      .map((prod) => {
                        return `
                        <tr>
                            <td>
                                ${prod.name}(${prod.size})       
                            </td>
                            <td>
                                ${prod.quantity}        
                            </td>
                            <td>
                                $${
                                  Number(prod.price) * Number(prod.quantity)
                                }        
                            </td>
                         </tr>
                            `;
                      })
                      .join("")}
                      <tr class='table__subtotal'>
                      <td>
                        Subtotal        
                      </td>
                      <td>
                          ${cartProds.products.reduce(
                            (a, b) => (a += b.quantity),
                            0
                          )}
                      </td>
                      <td>
                          $${cartProds.total}        
                      </td>
                   </tr>
                   <tr class='table__shipping'>
                   <td>
                     Envío        
                   </td>
                   <td>
   
                   </td>
                   <td>
                       $500        
                   </td>
                </tr>
                      <tr class='table__total'>
                      <td>
                             Total   
                      </td>
                      <td>
                      ${cartProds.products.reduce(
                        (a, b) => (a += b.quantity),
                        0
                      )}
                      </td>
                      <td>
                          $${cartProds.total + 500}        
                      </td>
                   </tr>

            </table>
        </div>
    `;
};

export { ProductsTable };
