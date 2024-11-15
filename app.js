
const div = document.querySelector("#div");

async function hello() {
    try {
       
        let result = await fetch('https://dummyjson.com/products');
        let data = await result.json();

        
        data.products.map((item) => {
            console.log(item);
            
            div.innerHTML += `
                <div class="card">
                    <img src=" ${item.thumbnail}" alt="thumbnail" class="card-img">
                    <p class="card-title"> Title: ${item.title}</p>
                      <p class="card-title"> Brand:  ${item.brand}</p>
                          <p class="card-title"> Category: ${item.category}</p>
                              <p class="card-title"> Price: ${item.price}</p>



                </div>
            `;
        });

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

hello();



 


