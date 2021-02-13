function carifilm(){
    $('#movie-list').html('') //agar layar kosong kembali setelah mencari film//

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=5121258b&',
        type: 'get',
        dataType : 'json',
        data : {

            's': $('#search-input').val()  //mencari input sesuai dengan apa yang ditulis pada pencarian di html
            
        },
        success: function (result){
            if (result.Response == "True"){
                let movies = result.Search;
                
                $.each(movies, function(i,data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                        <div class="card" > 
                            <img src="`+ data.Poster +`">
                                <div class="card-body">
                                    <h4 class="card-title">`+data.Title+`</h4>
                                    <h6 class="card-title">`+data.Year+`</h6>
                                        <a href="#" class="btn btn-primary">Details</a>
                                </div>
                        </div>
                        </div>
                    `)
                });

                $('#search-input').val(''); //agar tulisan pencarian kosong kembali//
                


            }else{
                $('#movie-list').html(`
                <div class="col"> 
                <h1 class="text-center"> Tidak ada Film</h1>
                </div>
                `)
                
            }
        }
    })
}

$('#search-button').on('click', function(){
   carifilm()
})

$('#search-input').on('keyup', function(event){     //agar enter bisa buat memencet tombol//
    if (event.keyCode === 13){      
        carifilm()
    }

})

