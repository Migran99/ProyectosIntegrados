var current = []

$("#numberDrik").click(() => {
    const drink = $("select[name='drink']").val();
    const count = $("input[name='numberDrik']").val();
    //var current = $("input[name='bebida']").val();

    const html = `
                    <div class="col-lg-3">${count}</div>
                    <div class="col-lg-9">${drink}</div>
    `;


    $(".addedDrink").prepend(html);
    
    current.push({product:drink, quantity: count});

    $("input[name='bebida']").attr("value", current);

    console.log(current);
});

$("#numberEat").click(() => {
    const drink = $("select[name='eat']").val();
    const count = $("input[name='numberEat']").val();
    //var current = $("input[name='comida']").val();

    const html = `
                    <div class="col-lg-3">${count}</div>
                    <div class="col-lg-9">${drink}</div>
    `;
    
    $(".addedEat").prepend(html);

    current.push({product:drink, quantity: count})

    $("input[name='comida']").attr("value", current);

    console.log(current);
});