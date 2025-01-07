
import React, { Component , useState , useEffect , useRef } from "react";
import axios from "axios";

//Bootstrap and jQuery libraries
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

const DataTableTest = () => {
  const [data, setData] = useState([]);
  const tableRef = useRef()

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;

    const table = $(el).DataTable({lengthChange: false,
			responsive: true,
			dom:  "<'row align-items-center mb-2'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
				"<'row'<'col-sm-12'tr>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			
			"language": {
				"url": "/assets/plugins/DataTables/i18n/French.json"
			},
			processing: true,
			serverSide: false,
			stateSave: true,
			ajax: {
				url: 'https://jsonplaceholder.typicode.com/todos',
        dataSrc: '',
        data: {
          _token: '{{ csrf_token() }}'
        }
			},
      select: true,
			columns: [
        {
          data: null,
          defaultContent: '',
          orderable: false,
          searchable: false,
        },
        { data: "id" , title: "ID"},
        { data: "title" , title: "Title"},
        { data: "completed"  , title: "Completed"},
			],
        
    });

    }, [])

    function selectRows(e) {
        e.preventDefault();
        var el = $('#select-rows');
        if(el.hasClass('fa-circle-check')) {
            $('#validation-entretien-datatable').DataTable().rows().select();
            el.removeClass('fa-circle-check');
            el.addClass('fa-circle');
        } else {
            $('#validation-entretien-datatable').DataTable().rows().deselect();
            el.removeClass('fa-circle');
            el.addClass('fa-circle-check');
        }
    }


  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table ref={tableRef} className="table table-bordered" id="dataTable">
            <thead>
                <tr>
                <th></th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}





export default DataTableTest;





























  
  