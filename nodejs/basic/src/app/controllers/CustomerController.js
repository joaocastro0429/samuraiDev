const customer = [
    { id: 1, name: "devsamurai", site: "https://devsamurai.com.br" },
    { id: 2, name: "google", site: "https://google.com.br" },
    { id: 3, name: "uol", site: "https://uol.com.br" },
  ];


class customersController{
    index(request,response){
        return response.status(200).json(customer);

    }
    show(request,response){
        const id = parseInt(request.params.id);

        const indexId = customer.find((item) => item.id === id);
      
        return response.json(indexId);
      }
        
    
    create(request,response){
        const { id, name, site } = request.body;

        customer.push({
          id,
          site,
          name,
        });
        console.log(name, site);
        return response.status(201).send();
        
    }
    update(request,response){
        const id = parseInt(request.params.id);
        const { name, site } = request.body;
      
        const indexId = customer.findIndex((item) => item.id === id);
      
        if (indexId >= 0) {
          customer[indexId].name = name;
          customer[indexId].site = site;
      
          response.json(customer[indexId]);
        } else {
          response.status(404).json({ message: "Customer not found" });
        }
      }
        
    
    destroy(request,response){
        const id = parseInt(request.params.id);
  const indexId = customer.findIndex((item) => item.id === id);

  customer.splice(indexId, 1);

  return response.status(200).send();
}
    
}


export default  new customersController()