todo:

jen video 


CREDIT SCORE IMPACT CALCULATOR

Visa 5257  - 12.15% APR - $500 limit - 6 age







/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");


	function CardConstruct(lastdigs, assoc, apr, limit, age) {
		this.lastDigs = lastdigs;
		this.assoc = assoc;
		this.apr = apr;
		this.limit = limit;
		this.age = age;
	}

	let myPurpleVisa = new CardConstruct(5257, "Visa", 12.15, 500, 2190);

}










<!DOCTYPE html>
<html lang="en">
<head>
  
  <!--  Meta  -->
  <meta charset="UTF-8" />
  <title>My New Pen!</title>
  
  <!--  Styles  -->
  <link rel="stylesheet" href="styles/index.processed.css">
</head>
<body>
  
<form>
  <input name="lastDigs" value="0000">Last 4 Digits</input>
  <select name="assoc">
    <option value="amex">American Express</option>
    <option value="discover">Discover</option>
    <option value="mc">MasterCard</option>
    <option value="sb">Store Brand</option>
    <option value="visa">Visa</option>
  </select>
  <button>Add Card</button>
  </form>
  
  <!-- Scripts -->
  <script src="scripts/index.js"></script>
</body>
</html>