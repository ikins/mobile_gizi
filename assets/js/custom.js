    //global variable
    var base_url = $("#url").val();

    $("#buttons-pdf").click(function(){
      //var rekap pb
      var posyandu_nama = $('#posyandu_nama').val();
      var posyandu_alamat = $('#posyandu_alamat').val();
      //var resume kp

    });
    

    $.validate({
      modules : 'location, date, security, file',
      onModulesLoaded : function() {
        $('#country').suggestCountry();
      }
    });

    // Restrict presentation length
    $('#presentation').restrictLength( $('#pres-max-length') );
    
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    });

    $('#info').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    });

    $('#info_pb').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : false,
      'ordering'    : false,
      'info'        : true,
      'autoWidth'   : false,
      dom: 'lBfrtip',
                buttons: [

                    {   
                        extend: 'excelHtml5',
                        title: '',
                        orientation: 'potrait',
                        pageSize: 'A4',
                        messageTop : 'LAPORAN REKAPITULASI PENGUKURAN BALITA'
                    },
                    {
                        text: 'PDF',
                        extend: 'pdfHtml5',
                        title: '',
                        orientation: 'potrait',
                        pageSize: 'A4',
                        messageTop : function () {
                                    return $('#header-title').val();
                                },
                        customize: function (doc) {
                          doc['header']=(function() {
                          return {
                            columns: [
                              {
                                alignment: 'center',
                                fontSize: 12,
                                text: 'LAPORAN REKAPITULASI PENGUKURAN BALITA'
                              
                              }
                            ],
                            margin: 20
                          }
                        });
                        }
                    }

                    ]
    });

    $('#info_kp').DataTable({
      'paging'      : false,
      'lengthChange': true,
      'searching'   : false,
      'ordering'    : false,
      'info'        : true,
      'autoWidth'   : false,
      dom: 'lBfrtip',
                buttons: [

                    {
                        extend: 'excelHtml5',
                        title: '',
                        orientation: 'landscape',
                        pageSize: 'A4',
                        messageTop: 'LAPORAN RESUME KEGIATAN POSYANDU'
                    },
                    { 
                        text: 'PDF',
                        extend: 'pdfHtml5',
                        title: '',
                        orientation: 'potrait',
                        pageSize: 'A4',
                        messageTop : function () {
                                    return $('#header-title').val();
                                },
                        customize: function (doc) {
                          doc['header']=(function() {
                          return {
                            columns: [
                              {
                                alignment: 'center',
                                fontSize: 12,
                                text: 'LAPORAN REKAPITULASI PENGUKURAN BALITA'
                              
                              }
                            ],
                            margin: 20
                          }
                        });
                        }
                    }

                    ]

    });

    //Date picker
    $('#datepicker').datepicker({
      format: 'dd-mm-yyyy',
      autoclose: true
    });

    //Timepicker
    $('.timepicker').timepicker({
      showInputs: false,
      autoclose: true
    });



    $("#kecamatan").change(function(){

      var kec_id = $(this).val();


      $.ajax({
               type: "POST",
               dataType: "html",
               url: base_url +'list_kelurahan',
               data: "kec_id="+kec_id,
               success: function(msg){
                   if(msg == ''){
                          $("#kelurahan").html('<option value="">--Pilih Kelurahan--</option>');
                   }else{
                          $("#kelurahan").html(msg);                                                       
                   }                               
               }
            });

    });

    $("#kelurahan").change(function(){

      var kel_id = $(this).val();


      $.ajax({
               type: "POST",
               dataType: "html",
               url: base_url +'list_posyandu',
               data: "kel_id="+kel_id,
               success: function(msg){
                   if(msg == ''){
                          $("#posyandu").html('<option value="">--Pilih Posyandu--</option>');
                   }else{
                          $("#posyandu").html(msg);                                                       
                   }                               
               }
            });

    });


    $('#info_penyuluhan').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : false,
      'ordering'    : false,
      'info'        : true,
      'autoWidth'   : false,
      dom: 'lBfrtip',
                buttons: [

                    {   
                        extend: 'excelHtml5',
                        title: '',
                        orientation: 'potrait',
                        pageSize: 'A4',
                        messageTop : 'LAPORAN PENYULUHAN'
                    },
                    {
                        text: 'PDF',
                        extend: 'pdfHtml5',
                        title: '',
                        orientation: 'potrait',
                        pageSize: 'A4',
                        messageTop : function () {
                                    return $('#header-title').val();
                                },
                        customize: function (doc) {
                          doc['header']=(function() {
                          return {
                            columns: [
                              {
                                alignment: 'center',
                                fontSize: 12,
                                text: 'LAPORAN PENYULUHAN'
                              
                              }
                            ],
                            margin: 20
                          }
                        });
                        }
                    }

                    ]
    });
