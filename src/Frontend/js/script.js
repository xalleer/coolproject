const newBlock = ('<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center block-check"></div>');
const btnAdd = document.querySelector(".btn-add");
const listTovar = document.querySelector(".block-check");

$(btnAdd).click(function() {
 $(listTovar).parent().append(newBlock);
});