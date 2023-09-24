function CreateTable(rowAmount, cellAmount){

     var newTable = document.createElement('table');
     newTable.id = 'custTable';





     for (let index = 0; index < rowAmount; index++) {
         var tableRow=document.createElement('tr');
         tableRow.id="TRow"+index;
         newTable.appendChild(tableRow);
         for (let j = 0; j < cellAmount; j++) {
         var tableCell=document.createElement('td');
         tableCell.id="TCell_"+index+"_"+j;
         tableCell.textContent=index+"_"+j
         tableCell.style.border = "thin solid black";
         tableRow.appendChild(tableCell);
             
         }
         
     }
     document.body.appendChild(newTable);
 }

     CreateTable(3, 4); 