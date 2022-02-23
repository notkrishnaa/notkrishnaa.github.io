const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML =` 
    <div class="footer-content">
    <img src="css/img/logo.png" class="logo" alt="">
    <div class="footer-ul-container">
    <ul class="category">
            <li class="category-title">mens</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trouser</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
    </ul>

    <ul class="category">
        <li class="category-title">womens</li>
        <li><a href="#" class="footer-link">sweatshirts</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">tops</a></li>
        <li><a href="#" class="footer-link">shoes</a></li>
        <li><a href="#" class="footer-link">leggings</a></li>
</ul>
</div>
</div>
<p class="footer-title">about company</p>
<p class="info">Fashions a one stop shop for all your fashion and lifestyle needs. <br>
    Being India's largest e-commerce store for fashion and lifestyle products,
     Myntra aims at providing a hassle free and enjoyable shopping experience to 
     shoppers across the country with the widest range of brands and products on its portal.
     The brand is making a conscious effort to bring the power of fashion to shoppers with an
     array of the latest and trendiest products available in the country.</p>
     <p class="info">support emails - help@fashion.com,
        customersupport</p>
    <p class ="info">telephone - 1800 30 11 200</p> 
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-links">terms & condition</a>
            <a href="#" class="social-links">Privacy page</a>
        </div>

        <div>
            <a href="#" class="social-links">instagram</a>
            <a href="#" class="social-links">facebook</a>
        </div>
    </div>
</div>
<p class="footer-credit">Fashion-trends, Best apparels online store</p>  
    `;
}

createFooter();