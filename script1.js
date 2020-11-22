let table=document.getElementsByClassName('.product-table');
let productList=document.querySelector('#Product-list');


class Product{
	constructor(productname,productprice)
	{
		this.productname=productname;
		this.productprice=productprice;

	}

}

productList.addEventListener('click',removeProduct);

class UI{
	constructor()
	{

	}
	addTo(product)
	{
		let list= document.querySelector('#Product-list');
		let row=document.createElement('tr');
		row.innerHTML=
		`<td>${product.productname}</td>
		<td>${product.productprice}</td>
		<td><a href='#' class="delete">X</a></td>`;

		list.appendChild(row);
	}

		deleteFromCart(target)
	{
		if(target.hasAttribute('href'))
		{
			target.parentElement.parentElement.remove();
			//ui.showalert("Book deleted","success");
		}
	}

		showalert(message,className)
	{
		let div=document.createElement('div');
		div.className=`alert ${className}`;
		div.appendChild(document.createTextNode(message));
		let container=document.querySelector('.container');
		let div1=document.querySelector('.head');
		container.insertBefore(div,div1);

		setTimeout(()=>
		{
			document.querySelector('.alert').remove();
		},1000);
	}


	}



function addToCart1()
{
	let productname=document.getElementsByClassName('productname');
	productname=productname[0].innerHTML;
	let productprice=document.getElementsByClassName('productprice');
	productprice=productprice[0].innerHTML;

	let ui=new UI();
	let product= new Product(productname,productprice);
    	   ui.addTo(product);
    	     ui.showalert("New Product added successfully","success");
  
   
}

function addToCart2()
{
	let productname=document.getElementsByClassName('productname');
	productname=productname[1].innerHTML;
	let productprice=document.getElementsByClassName('productprice');
	productprice=productprice[1].innerHTML;

	let ui=new UI();
	let product= new Product(productname,productprice);
    	   ui.addTo(product);
    	   ui.showalert("New Product added successfully","success");
  
   
}

function addToCart3()
{
	let productname=document.getElementsByClassName('productname');
	productname=productname[2].innerHTML;
	let productprice=document.getElementsByClassName('productprice');
	productprice=productprice[2].innerHTML;

	let ui=new UI();
	let product= new Product(productname,productprice);
    	   ui.addTo(product);
    	   ui.showalert("New product added successfully","success");
  
   
}


function removeProduct(e)
{
	let ui= new UI();
	ui.deleteFromCart(e.target);
	ui.showalert("Product removed","success");
	e.preventDefault();
}

