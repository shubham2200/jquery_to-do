$(document).ready(function () {
    $('#saveid').click(function () {
        console.log('click now button')
        nm = $('#name').val();
        tk = $('#task').val();
        de = $('#date').val();
        var numbers = $('#table_body').children().length;
        number = numbers + 1

        var items = []
        my_data = { 'name': nm, 'task': tk, 'date': de, 'number': number }

        var text = localStorage.getItem("testJSON");
        var obj = JSON.parse(text);
        for (i in obj) {
            console.log(obj[i]);
            items.push(obj[i])
        }

        items.push(my_data)
        var data = JSON.stringify(items);
        localStorage.setItem("testJSON", data);




        // console.log(nm)
        // console.log(tk)
        // console.log(de)

        // console.log(my_data)



        var list = `   <tr >
        <td >${nm}</td>
        <td >${tk}</td>
        <td >${de}</td>
        <td>
            <input class="form-check-input check " type="checkbox" value="${number}" >

        </td>
       <td>
        <button  class="btn btn-danger " type="submit" value="${number}">Delete</button>

       </td> 
    </tr> `
        $('#table_body').append(list);
        $('#name').val('');
        $('#task').val('');
        $('#date').val('');
        event.preventDefault();







    });

    // $('#table_body').on('click', 'tr', function (e) {
    //     e.preventDefault();
    //     $(this).closest('tr').remove();
    // });


    var text = localStorage.getItem("testJSON");
    var obj = JSON.parse(text);


    for (i in obj) {
        if (obj[i] !== null) {
            console.log(obj)
            var list = `   <tr >
    <td >${obj[i].name}</td>
    <td >${obj[i].task}</td>
    <td >${obj[i].date}</td>
    <td>
        <input class="form-check-input" type="checkbox" value="${obj[i].number}" id="check">

    </td>
   <td>
    <button  class="btn btn-danger delete_row " type="submit" value="${obj[i].number}">Delete</button>

   </td> 
    </tr> `
            $('#table_body').append(list);
            // for (i in obj) {
            //     // console.log(obj[i]);
            //     if(obj.name in localStorage){
            //         console.log(' value')
            //     }
            //     else{
            //         console.log('no value')
            //     }
            // }



        }
    }

    $(document).on('click', '.delete_row', function () {

        var id = $('.delete_row').val()
        console.log(id)
        var text = localStorage.getItem("testJSON");
        var obj = JSON.parse(text);
        for (i in obj) {
            console.log(obj[i])
            var object = obj[i];
            if (object !== null) {
                if (object.number == id) {
                    console.log(object.number)
                    delete obj[i];
                    $(this).parents('tr').empty();
                }
            }
            item = JSON.stringify(obj)
            localStorage.setItem('testJSON', item)
        }



    })


});
