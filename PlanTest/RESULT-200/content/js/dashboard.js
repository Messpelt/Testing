/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 98.92076862332193, "KoPercent": 1.0792313766780732};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.2926981745436359, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.26375, 500, 1500, "https://vodolei54.ru/dushevye-kabiny"], "isController": false}, {"data": [0.594282848545637, 500, 1500, "https://vodolei54.ru/enter-0"], "isController": false}, {"data": [0.377, 500, 1500, "https://vodolei54.ru/aktsii"], "isController": false}, {"data": [0.32698094282848544, 500, 1500, "https://vodolei54.ru/enter-1"], "isController": false}, {"data": [0.47688442211055276, 500, 1500, "https://vodolei54.ru/enter-2"], "isController": false}, {"data": [0.353, 500, 1500, "https://vodolei54.ru/vanna-chugunnaya-roca-continental-150h70-s-nojkami"], "isController": false}, {"data": [0.6666666666666666, 500, 1500, "https://vodolei54.ru/order-0"], "isController": false}, {"data": [0.8333333333333334, 500, 1500, "https://vodolei54.ru/order-1"], "isController": false}, {"data": [0.0695, 500, 1500, "https://vodolei54.ru/enter"], "isController": false}, {"data": [0.277, 500, 1500, "https://vodolei54.ru/polotentsesushiteli-vodyanye-elektricheskie"], "isController": false}, {"data": [0.3565, 500, 1500, "https://vodolei54.ru/zerkalo-shkaf-uglovoe-altair-62-akvaton-1a042702ar010-utsenka-potertosti"], "isController": false}, {"data": [0.255, 500, 1500, "https://vodolei54.ru/rakoviny"], "isController": false}, {"data": [0.2915, 500, 1500, "https://vodolei54.ru/order"], "isController": false}, {"data": [0.274, 500, 1500, "https://vodolei54.ru/installyatsii-dlya-unitazov"], "isController": false}, {"data": [0.0, 500, 1500, "Test"], "isController": true}, {"data": [0.299, 500, 1500, "https://vodolei54.ru/rasprodaja"], "isController": false}, {"data": [0.363, 500, 1500, "https://vodolei54.ru/dobornyy-profil-dlya-dveri-v-nishu-glyantsevyy-al-zodiac-iddis-zod4cs0i23"], "isController": false}, {"data": [0.2515, 500, 1500, "https://vodolei54.ru/vanny-chugunnye"], "isController": false}, {"data": [0.234, 500, 1500, "https://vodolei54.ru/catalog"], "isController": false}, {"data": [0.2925, 500, 1500, "https://vodolei54.ru/vodonagrevateli-zanussi"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 18995, 205, 1.0792313766780732, 4803.906607001882, 194, 96743, 1220.0, 12152.400000000001, 23636.600000000002, 58912.60000000036, 18.533660131994395, 3168.8603187884673, 25.444911398286354], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["https://vodolei54.ru/dushevye-kabiny", 2000, 12, 0.6, 4486.519999999995, 531, 64348, 1188.0, 10925.300000000003, 21791.749999999993, 51897.00000000001, 2.0807735483743435, 464.18373533607354, 2.589458672781193], "isController": false}, {"data": ["https://vodolei54.ru/enter-0", 997, 0, 0.0, 3220.2236710130414, 194, 59311, 496.0, 9311.000000000007, 16684.99999999994, 39660.05999999999, 1.1069143845578227, 0.5924241938510184, 1.4214769684507196], "isController": false}, {"data": ["https://vodolei54.ru/aktsii", 1000, 6, 0.6, 3681.4390000000008, 355, 64442, 785.5, 7645.799999999998, 16500.349999999933, 48940.710000000014, 1.1088625842042523, 132.0166409520278, 1.4377020642170044], "isController": false}, {"data": ["https://vodolei54.ru/enter-1", 997, 2, 0.20060180541624875, 3850.7683049147436, 356, 64622, 796.0, 9461.400000000005, 18534.899999999983, 45915.79999999984, 1.106501612584597, 127.70528268508099, 1.4393685740778968], "isController": false}, {"data": ["https://vodolei54.ru/enter-2", 995, 5, 0.5025125628140703, 4264.917587939695, 293, 65022, 725.0, 10766.799999999997, 20473.799999999992, 58708.199999999924, 1.104636252718571, 140.46095466453474, 1.4876530011412723], "isController": false}, {"data": ["https://vodolei54.ru/vanna-chugunnaya-roca-continental-150h70-s-nojkami", 1000, 8, 0.8, 3712.426000000001, 374, 64163, 818.5, 9556.999999999998, 18794.899999999994, 38709.90000000003, 1.1066745757009677, 142.3623807367935, 1.4824176125737045], "isController": false}, {"data": ["https://vodolei54.ru/order-0", 3, 0, 0.0, 955.3333333333333, 238, 2231, 397.0, 2231.0, 2231.0, 2231.0, 0.008817979271870058, 0.005390678734561188, 0.010350792074988097], "isController": false}, {"data": ["https://vodolei54.ru/order-1", 3, 0, 0.0, 522.6666666666666, 405, 663, 500.0, 663.0, 663.0, 663.0, 0.008865562608603142, 0.9609236706458267, 0.010397988957941771], "isController": false}, {"data": ["https://vodolei54.ru/enter", 1000, 10, 1.0, 11487.311999999994, 1003, 96743, 5437.0, 28786.399999999998, 44548.24999999999, 66405.02, 1.1089794062524259, 268.5087861492631, 4.348427380562918], "isController": false}, {"data": ["https://vodolei54.ru/polotentsesushiteli-vodyanye-elektricheskie", 1000, 5, 0.5, 4032.2210000000014, 543, 64223, 1029.0, 8775.399999999996, 16934.949999999997, 49733.990000000056, 1.1077693402679694, 236.28227265284445, 1.3414394354807442], "isController": false}, {"data": ["https://vodolei54.ru/zerkalo-shkaf-uglovoe-altair-62-akvaton-1a042702ar010-utsenka-potertosti", 1000, 3, 0.3, 4163.344000000003, 373, 64387, 788.0, 10602.0, 20581.649999999998, 55732.73000000001, 1.1103141522862479, 148.3179200332317, 1.5111473198820624], "isController": false}, {"data": ["https://vodolei54.ru/rakoviny", 1000, 5, 0.5, 4372.9630000000025, 577, 64247, 1221.5, 10910.499999999998, 20701.099999999933, 50725.600000000006, 1.1090027736159367, 244.83850614969762, 1.3050276779367225], "isController": false}, {"data": ["https://vodolei54.ru/order", 1000, 7, 0.7, 4038.803999999994, 456, 64780, 895.0, 8782.699999999999, 18730.6, 58663.38000000002, 1.1027595454866257, 150.7275137334917, 1.4325923409489907], "isController": false}, {"data": ["https://vodolei54.ru/installyatsii-dlya-unitazov", 1000, 2, 0.2, 3794.3300000000054, 534, 64169, 1014.0, 8585.499999999987, 17872.7, 45022.57, 1.1072051374318377, 240.78685306349823, 1.3234561408364935], "isController": false}, {"data": ["Test", 1000, 184, 18.4, 79952.40099999997, 11066, 298781, 72588.5, 137182.4, 163725.54999999987, 221895.95, 1.0694432264674365, 3213.988762516162, 23.69243583975623], "isController": true}, {"data": ["https://vodolei54.ru/rasprodaja", 1000, 10, 1.0, 4505.953999999992, 444, 64375, 832.0, 9805.0, 21816.89999999999, 64121.69, 1.1081302407634575, 164.73850597967854, 1.4410811739337848], "isController": false}, {"data": ["https://vodolei54.ru/dobornyy-profil-dlya-dveri-v-nishu-glyantsevyy-al-zodiac-iddis-zod4cs0i23", 1000, 5, 0.5, 4309.493999999993, 353, 64733, 784.5, 9592.2, 25622.7, 53916.75, 1.1090581212999049, 144.85508955609671, 1.5105209152418966], "isController": false}, {"data": ["https://vodolei54.ru/vanny-chugunnye", 1000, 5, 0.5, 4782.350000000001, 527, 64188, 1308.0, 11901.599999999999, 23610.499999999938, 55928.40000000004, 1.1095909714801833, 226.15000630559746, 1.4483987232630187], "isController": false}, {"data": ["https://vodolei54.ru/catalog", 2000, 117, 5.85, 6401.2060000000065, 606, 67632, 1835.5, 15093.2, 34859.49999999998, 67504.79, 2.115631981585539, 578.8395887915536, 1.887938122590824], "isController": false}, {"data": ["https://vodolei54.ru/vodonagrevateli-zanussi", 1000, 3, 0.3, 5296.311000000003, 405, 64336, 1526.0, 16782.699999999997, 29686.149999999994, 49672.680000000066, 1.1062987117151504, 129.67179034221968, 1.2304342862022426], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["503/Service Temporarily Unavailable", 61, 29.75609756097561, 0.32113714135298765], "isController": false}, {"data": ["503/Service Unavailable", 136, 66.34146341463415, 0.7159778889181364], "isController": false}, {"data": ["500/Internal Server Error", 8, 3.902439024390244, 0.042116346406949196], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 18995, 205, "503/Service Unavailable", 136, "503/Service Temporarily Unavailable", 61, "500/Internal Server Error", 8, "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["https://vodolei54.ru/dushevye-kabiny", 2000, 12, "503/Service Unavailable", 12, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": ["https://vodolei54.ru/aktsii", 1000, 6, "503/Service Unavailable", 5, "500/Internal Server Error", 1, "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/enter-1", 997, 2, "503/Service Unavailable", 2, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/enter-2", 995, 5, "503/Service Unavailable", 5, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/vanna-chugunnaya-roca-continental-150h70-s-nojkami", 1000, 8, "503/Service Unavailable", 6, "500/Internal Server Error", 2, "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["https://vodolei54.ru/enter", 1000, 10, "503/Service Unavailable", 10, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/polotentsesushiteli-vodyanye-elektricheskie", 1000, 5, "503/Service Unavailable", 5, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/zerkalo-shkaf-uglovoe-altair-62-akvaton-1a042702ar010-utsenka-potertosti", 1000, 3, "503/Service Unavailable", 2, "500/Internal Server Error", 1, "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/rakoviny", 1000, 5, "503/Service Unavailable", 4, "500/Internal Server Error", 1, "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/order", 1000, 7, "503/Service Unavailable", 7, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/installyatsii-dlya-unitazov", 1000, 2, "503/Service Unavailable", 1, "500/Internal Server Error", 1, "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": ["https://vodolei54.ru/rasprodaja", 1000, 10, "503/Service Unavailable", 10, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/dobornyy-profil-dlya-dveri-v-nishu-glyantsevyy-al-zodiac-iddis-zod4cs0i23", 1000, 5, "503/Service Unavailable", 5, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/vanny-chugunnye", 1000, 5, "503/Service Unavailable", 5, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/catalog", 2000, 117, "503/Service Temporarily Unavailable", 61, "503/Service Unavailable", 54, "500/Internal Server Error", 2, "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/vodonagrevateli-zanussi", 1000, 3, "503/Service Unavailable", 3, "", "", "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
