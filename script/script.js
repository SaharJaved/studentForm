var count = 0;
var array = ['0'];
window.onload = function () {
     document.getElementById("mod").disabled = true;


}
function add() {
    var id = document.getElementById("id").value;
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var date = document.getElementById("date").value;
    var year = document.getElementById("Year").value;
    var email = document.getElementById("email").value;
    var table_rows = "";
    console.log(fName);
    console.log(lName);
    console.log(date);
    console.log(year);
    console.log(email);
    if (fName != '' && lName != '' && date != '' && year != '' && email != '') {

        if (/^[A-Za-z]+$/.test(fName) && /^[A-Za-z]+$/.test(lName)) {
            if (/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                count = count + 1;

                table_rows += "<tr> <td>" + count + "</td><td>" + fName + "</td><td>" + lName + "</td><td>" + date + "</td><td>" + email + "</td><td>" + year + "</td></tr>";
//append method add at the end of selectd itemm
                $(table_rows).appendTo("#reg-list");
                document.getElementById("fName").value = '';
                document.getElementById("lName").value = '';
                document.getElementById("date").value = '';
                document.getElementById("Year").value = '';
                document.getElementById("email").value = '';
           }
            else {
                $('#dialogue').dialogBox({
                    title: 'title text',
                    hasClose: true,
                    content: 'Invaild email address'
                });

                //   prompt("valid email");
            }
        } else {
            $('#dialogue').dialogBox({
                title: 'title text',
                hasClose: true,
                content: 'name should be in alphabates'
            });


        }

    }
    else {
        $('#dialogue').dialogBox({
            title: 'title text',
            hasClose: true,
            content: 'fill all values'
        });

    }
}

function remove() {
    //  console.log(rowCount);
    var flag=true;
    var id = document.getElementById("id").value;
    var table = document.getElementById("reg-list");
    for (var i = 0; i < table.rows.length; i++) {
        console.log(table.rows[i].cells[0].innerHTML);
        if (table.rows[i].cells[0].innerHTML == id)
            table.rows[i].remove();
        console.log("hi");
        document.getElementById("id").value = '';
        flag=false;
    }
    if(flag){
        $('#dialogue').dialogBox({
            title: 'title text',
            hasClose: true,
            content: 'ID is not found'
        });

    }
//    document.getElementById("delete").disabled = true;


}
function search() {
    var flag=true;
    var id = document.getElementById("id").value;
    var table = document.getElementById("reg-list");
    for (var i = 0; i < table.rows.length; i++) {
        console.log(table.rows[i].cells[0].innerHTML);
        if (table.rows[i].cells[0].innerHTML == id) {
            document.getElementById("id").value = table.rows[i].cells[0].innerHTML;
            document.getElementById("fName").value = table.rows[i].cells[1].innerHTML;
            document.getElementById("lName").value = table.rows[i].cells[2].innerHTML;
            document.getElementById("date").value = table.rows[i].cells[3].innerHTML;
            document.getElementById("email").value = table.rows[i].cells[4].innerHTML;
            document.getElementById("Year").value = table.rows[i].cells[5].innerHTML;
            flag=false;
            console.log("hi");
                 document.getElementById("mod").disabled = false;


        }

    }
    if(flag){
        $('#dialogue').dialogBox({
            title: 'title text',
            hasClose: true,
            content: 'ID is not found'
        });

    }


}

function modify() {
    console.log("me yaahaaaaaa");
    var table_rows = "";


    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var date = document.getElementById("date").value;
    var year = document.getElementById("Year").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var table = document.getElementById("reg-list");

    for (var i = 0; i < table.rows.length; i++) {
        console.log(table.rows[i].cells[0].innerHTML);
        if (table.rows[i].cells[0].innerHTML == id) {



            if (fName != '' && lName != '' && date != '' && year != '' && email != '') {

                if (/^[A-Za-z]+$/.test(fName) && /^[A-Za-z]+$/.test(lName)) {
                    if (/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        table.rows[i].cells[1].innerHTML = document.getElementById("fName").value;
                        table.rows[i].cells[2].innerHTML = document.getElementById("lName").value;

                        table.rows[i].cells[3].innerHTML = document.getElementById("date").value;

                        table.rows[i].cells[4].innerHTML = document.getElementById("email").value;

                        table.rows[i].cells[5].innerHTML = document.getElementById("Year").value;

                        document.getElementById("id").value ='';
                        document.getElementById("fName").value = '';
                        document.getElementById("lName").value = '';
                        document.getElementById("date").value = '';
                        document.getElementById("Year").value = '';
                        document.getElementById("email").value = '';
                        document.getElementById("mod").disabled = true;
                    }
                    else {
                        $('#dialogue').dialogBox({
                            title: 'title text',
                            hasClose: true,
                            content: 'Invaild email address'
                        });

                        //   prompt("valid email");
                    }
                } else {
                    $('#dialogue').dialogBox({
                        title: 'title text',
                        hasClose: true,
                        content: 'name should be in alphabates'
                    });


                }

            }
            else {
                $('#dialogue').dialogBox({
                    title: 'title text',
                    hasClose: true,
                    content: 'fill all values'
                });

            }




        }
    }







}


