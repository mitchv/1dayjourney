todo:
add lazy loader to figure drawings gallery
temp solution - commented out all but 40



CREDIT SCORE IMPACT CALCULATOR

Visa 5257  - 12.15% APR - $500 limit - 6 age






<div id="cardname">
Foo
</div>

<form>
<a href="#" onclick="addCard()">New car</a>
</form>

/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

function CardConstruct(lastdigs, issuer, apr, limit, age, balance) {
  this.lastdigs = lastdigs;
  this.issuer = issuer;
  this.apr = apr;
  this.limit = limit;
  this.age = age;
  this.balance = balance;
  this.name = issuer + lastdigs;
  this.fees =  apr * balance;
  this.percentage = balance / limit;
}

function addCard() {
let myPurpleVisa = new CardConstruct(5257, "V", '.1215', 500, 2190, 65);
document.getElementByID('cardname').innerHTML = myPurpleVisa.name;
};














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