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

    var data = {"OkPercent": 99.92630027374184, "KoPercent": 0.07369972625815961};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.4536907381476295, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.369, 500, 1500, "https://vodolei54.ru/dushevye-kabiny"], "isController": false}, {"data": [0.7299196787148594, 500, 1500, "https://vodolei54.ru/enter-0"], "isController": false}, {"data": [0.847, 500, 1500, "https://vodolei54.ru/aktsii"], "isController": false}, {"data": [0.49497991967871485, 500, 1500, "https://vodolei54.ru/enter-1"], "isController": false}, {"data": [0.5933734939759037, 500, 1500, "https://vodolei54.ru/enter-2"], "isController": false}, {"data": [0.624, 500, 1500, "https://vodolei54.ru/vanna-chugunnaya-roca-continental-150h70-s-nojkami"], "isController": false}, {"data": [0.75, 500, 1500, "https://vodolei54.ru/order-0"], "isController": false}, {"data": [0.5, 500, 1500, "https://vodolei54.ru/order-1"], "isController": false}, {"data": [0.1, 500, 1500, "https://vodolei54.ru/enter"], "isController": false}, {"data": [0.276, 500, 1500, "https://vodolei54.ru/polotentsesushiteli-vodyanye-elektricheskie"], "isController": false}, {"data": [0.766, 500, 1500, "https://vodolei54.ru/zerkalo-shkaf-uglovoe-altair-62-akvaton-1a042702ar010-utsenka-potertosti"], "isController": false}, {"data": [0.325, 500, 1500, "https://vodolei54.ru/rakoviny"], "isController": false}, {"data": [0.472, 500, 1500, "https://vodolei54.ru/order"], "isController": false}, {"data": [0.296, 500, 1500, "https://vodolei54.ru/installyatsii-dlya-unitazov"], "isController": false}, {"data": [0.0, 500, 1500, "Test"], "isController": true}, {"data": [0.628, 500, 1500, "https://vodolei54.ru/rasprodaja"], "isController": false}, {"data": [0.807, 500, 1500, "https://vodolei54.ru/dobornyy-profil-dlya-dveri-v-nishu-glyantsevyy-al-zodiac-iddis-zod4cs0i23"], "isController": false}, {"data": [0.371, 500, 1500, "https://vodolei54.ru/vanny-chugunnye"], "isController": false}, {"data": [0.285, 500, 1500, "https://vodolei54.ru/catalog"], "isController": false}, {"data": [0.436, 500, 1500, "https://vodolei54.ru/vodonagrevateli-zanussi"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 9498, 7, 0.07369972625815961, 1443.4772583701845, 195, 21645, 755.0, 3075.1000000000004, 4764.049999999999, 10541.46000000001, 15.987072992147851, 2772.8623882641746, 22.014290074460742], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["https://vodolei54.ru/dushevye-kabiny", 1000, 2, 0.2, 1344.1869999999994, 558, 13028, 821.0, 2736.3999999999996, 3740.6499999999983, 6871.81, 1.85028596169538, 415.55481164262375, 2.302436945145497], "isController": false}, {"data": ["https://vodolei54.ru/enter-0", 498, 0, 0.0, 1048.455823293172, 195, 15273, 337.5, 2279.1000000000004, 4261.849999999999, 8362.289999999974, 1.018902899372086, 0.5452382881152547, 1.308454406908489], "isController": false}, {"data": ["https://vodolei54.ru/aktsii", 500, 0, 0.0, 519.2319999999994, 329, 4741, 437.0, 676.0, 1166.0999999999963, 1668.2600000000007, 1.0225576211219503, 122.15131224499969, 1.325596167070577], "isController": false}, {"data": ["https://vodolei54.ru/enter-1", 498, 0, 0.0, 1265.8514056224901, 350, 11611, 670.5, 2695.5000000000005, 4417.949999999993, 8761.479999999996, 1.0141223666928003, 117.27768186238075, 1.3191175525388696], "isController": false}, {"data": ["https://vodolei54.ru/enter-2", 498, 0, 0.0, 1183.152610441767, 312, 11960, 557.5, 2471.0000000000005, 4378.699999999999, 9033.849999999997, 1.0145603673604928, 129.6564726194757, 1.3662540166047676], "isController": false}, {"data": ["https://vodolei54.ru/vanna-chugunnaya-roca-continental-150h70-s-nojkami", 500, 0, 0.0, 1046.408, 363, 11545, 541.0, 2405.6000000000004, 3423.65, 5824.960000000003, 1.021093754786377, 131.77057952239872, 1.3675736010760287], "isController": false}, {"data": ["https://vodolei54.ru/order-0", 2, 0, 0.0, 438.0, 357, 519, 438.0, 519.0, 519.0, 519.0, 0.007929553843652987, 0.004847559283326924, 0.009307933320381729], "isController": false}, {"data": ["https://vodolei54.ru/order-1", 2, 0, 0.0, 560.0, 539, 581, 560.0, 581.0, 581.0, 581.0, 0.007927636533720202, 0.8593047041604236, 0.009297940895505822], "isController": false}, {"data": ["https://vodolei54.ru/enter", 500, 2, 0.4, 3489.661999999999, 390, 17231, 2711.0, 6487.700000000003, 9374.45, 12938.020000000002, 1.0169650103018557, 248.37095711916186, 3.9875039153152896], "isController": false}, {"data": ["https://vodolei54.ru/polotentsesushiteli-vodyanye-elektricheskie", 500, 1, 0.2, 1956.5319999999995, 521, 14668, 1144.0, 3909.5000000000005, 5834.85, 12771.270000000008, 1.02868593601162, 220.7046760655129, 1.2456743756390711], "isController": false}, {"data": ["https://vodolei54.ru/zerkalo-shkaf-uglovoe-altair-62-akvaton-1a042702ar010-utsenka-potertosti", 500, 0, 0.0, 635.9699999999996, 351, 9040, 475.0, 923.0000000000007, 1540.3999999999994, 2823.6000000000013, 1.0222461200648514, 136.6423171367806, 1.3910793085373907], "isController": false}, {"data": ["https://vodolei54.ru/rakoviny", 500, 0, 0.0, 1621.9660000000008, 555, 11775, 989.5, 3341.5000000000014, 4789.749999999999, 7951.99, 1.025148954143037, 227.14476858800086, 1.2063520407640231], "isController": false}, {"data": ["https://vodolei54.ru/order", 500, 0, 0.0, 1089.4400000000016, 426, 8971, 639.5, 2483.9, 3139.5999999999995, 5256.300000000003, 1.0220559677847958, 140.64986071293515, 1.3287426252274075], "isController": false}, {"data": ["https://vodolei54.ru/installyatsii-dlya-unitazov", 500, 0, 0.0, 1788.8560000000007, 560, 15852, 982.0, 3785.9, 5445.949999999996, 10594.870000000004, 1.0295904289273727, 224.03948262115705, 1.23068230957725], "isController": false}, {"data": ["Test", 500, 7, 1.4, 23932.835999999996, 11970, 48369, 22678.0, 34737.3, 37632.8, 45983.26, 0.9916109711837853, 3025.709844326374, 22.045857281771216], "isController": true}, {"data": ["https://vodolei54.ru/rasprodaja", 500, 0, 0.0, 595.5699999999997, 422, 1873, 539.0, 742.7, 824.9, 1709.3300000000006, 1.0222043222887562, 153.4883213635337, 1.3291311525200402], "isController": false}, {"data": ["https://vodolei54.ru/dobornyy-profil-dlya-dveri-v-nishu-glyantsevyy-al-zodiac-iddis-zod4cs0i23", 500, 1, 0.2, 565.9019999999999, 351, 8988, 461.5, 678.0, 1440.6499999999999, 2139.130000000001, 1.0226517359513219, 134.5909792529529, 1.3926299566651326], "isController": false}, {"data": ["https://vodolei54.ru/vanny-chugunnye", 500, 1, 0.2, 1319.7320000000002, 525, 12605, 818.0, 2578.3, 3684.3999999999996, 6701.82, 1.018402533785504, 208.8061485893852, 1.3291605085138452], "isController": false}, {"data": ["https://vodolei54.ru/catalog", 1000, 0, 0.0, 2491.629999999999, 613, 17253, 1175.5, 6071.0, 10105.049999999987, 15728.8, 1.8774582969575788, 544.5032128005107, 1.6752886738808002], "isController": false}, {"data": ["https://vodolei54.ru/vodonagrevateli-zanussi", 500, 0, 0.0, 1631.9279999999999, 391, 21645, 702.5, 3484.6000000000004, 5434.399999999994, 12570.260000000007, 1.0329234004664682, 121.41921569028722, 1.2304861402338125], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["500/Internal Server Error", 7, 100.0, 0.07369972625815961], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 9498, 7, "500/Internal Server Error", 7, "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["https://vodolei54.ru/dushevye-kabiny", 1000, 2, "500/Internal Server Error", 2, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["https://vodolei54.ru/enter", 500, 2, "500/Internal Server Error", 2, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/polotentsesushiteli-vodyanye-elektricheskie", 500, 1, "500/Internal Server Error", 1, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["https://vodolei54.ru/dobornyy-profil-dlya-dveri-v-nishu-glyantsevyy-al-zodiac-iddis-zod4cs0i23", 500, 1, "500/Internal Server Error", 1, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["https://vodolei54.ru/vanny-chugunnye", 500, 1, "500/Internal Server Error", 1, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
