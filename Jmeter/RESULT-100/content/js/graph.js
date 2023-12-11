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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 742.0, "minX": 0.0, "maxY": 948.0, "series": [{"data": [[0.0, 742.0], [0.1, 742.0], [0.2, 742.0], [0.3, 742.0], [0.4, 742.0], [0.5, 742.0], [0.6, 742.0], [0.7, 742.0], [0.8, 742.0], [0.9, 742.0], [1.0, 748.0], [1.1, 748.0], [1.2, 748.0], [1.3, 748.0], [1.4, 748.0], [1.5, 748.0], [1.6, 748.0], [1.7, 748.0], [1.8, 748.0], [1.9, 748.0], [2.0, 749.0], [2.1, 749.0], [2.2, 749.0], [2.3, 749.0], [2.4, 749.0], [2.5, 749.0], [2.6, 749.0], [2.7, 749.0], [2.8, 749.0], [2.9, 749.0], [3.0, 754.0], [3.1, 754.0], [3.2, 754.0], [3.3, 754.0], [3.4, 754.0], [3.5, 754.0], [3.6, 754.0], [3.7, 754.0], [3.8, 754.0], [3.9, 754.0], [4.0, 755.0], [4.1, 755.0], [4.2, 755.0], [4.3, 755.0], [4.4, 755.0], [4.5, 755.0], [4.6, 755.0], [4.7, 755.0], [4.8, 755.0], [4.9, 755.0], [5.0, 760.0], [5.1, 760.0], [5.2, 760.0], [5.3, 760.0], [5.4, 760.0], [5.5, 760.0], [5.6, 760.0], [5.7, 760.0], [5.8, 760.0], [5.9, 760.0], [6.0, 766.0], [6.1, 766.0], [6.2, 766.0], [6.3, 766.0], [6.4, 766.0], [6.5, 766.0], [6.6, 766.0], [6.7, 766.0], [6.8, 766.0], [6.9, 766.0], [7.0, 768.0], [7.1, 768.0], [7.2, 768.0], [7.3, 768.0], [7.4, 768.0], [7.5, 768.0], [7.6, 768.0], [7.7, 768.0], [7.8, 768.0], [7.9, 768.0], [8.0, 769.0], [8.1, 769.0], [8.2, 769.0], [8.3, 769.0], [8.4, 769.0], [8.5, 769.0], [8.6, 769.0], [8.7, 769.0], [8.8, 769.0], [8.9, 769.0], [9.0, 770.0], [9.1, 770.0], [9.2, 770.0], [9.3, 770.0], [9.4, 770.0], [9.5, 770.0], [9.6, 770.0], [9.7, 770.0], [9.8, 770.0], [9.9, 770.0], [10.0, 772.0], [10.1, 772.0], [10.2, 772.0], [10.3, 772.0], [10.4, 772.0], [10.5, 772.0], [10.6, 772.0], [10.7, 772.0], [10.8, 772.0], [10.9, 772.0], [11.0, 772.0], [11.1, 772.0], [11.2, 772.0], [11.3, 772.0], [11.4, 772.0], [11.5, 772.0], [11.6, 772.0], [11.7, 772.0], [11.8, 772.0], [11.9, 772.0], [12.0, 772.0], [12.1, 772.0], [12.2, 772.0], [12.3, 772.0], [12.4, 772.0], [12.5, 772.0], [12.6, 772.0], [12.7, 772.0], [12.8, 772.0], [12.9, 772.0], [13.0, 773.0], [13.1, 773.0], [13.2, 773.0], [13.3, 773.0], [13.4, 773.0], [13.5, 773.0], [13.6, 773.0], [13.7, 773.0], [13.8, 773.0], [13.9, 773.0], [14.0, 774.0], [14.1, 774.0], [14.2, 774.0], [14.3, 774.0], [14.4, 774.0], [14.5, 774.0], [14.6, 774.0], [14.7, 774.0], [14.8, 774.0], [14.9, 774.0], [15.0, 779.0], [15.1, 779.0], [15.2, 779.0], [15.3, 779.0], [15.4, 779.0], [15.5, 779.0], [15.6, 779.0], [15.7, 779.0], [15.8, 779.0], [15.9, 779.0], [16.0, 781.0], [16.1, 781.0], [16.2, 781.0], [16.3, 781.0], [16.4, 781.0], [16.5, 781.0], [16.6, 781.0], [16.7, 781.0], [16.8, 781.0], [16.9, 781.0], [17.0, 782.0], [17.1, 782.0], [17.2, 782.0], [17.3, 782.0], [17.4, 782.0], [17.5, 782.0], [17.6, 782.0], [17.7, 782.0], [17.8, 782.0], [17.9, 782.0], [18.0, 782.0], [18.1, 782.0], [18.2, 782.0], [18.3, 782.0], [18.4, 782.0], [18.5, 782.0], [18.6, 782.0], [18.7, 782.0], [18.8, 782.0], [18.9, 782.0], [19.0, 783.0], [19.1, 783.0], [19.2, 783.0], [19.3, 783.0], [19.4, 783.0], [19.5, 783.0], [19.6, 783.0], [19.7, 783.0], [19.8, 783.0], [19.9, 783.0], [20.0, 783.0], [20.1, 783.0], [20.2, 783.0], [20.3, 783.0], [20.4, 783.0], [20.5, 783.0], [20.6, 783.0], [20.7, 783.0], [20.8, 783.0], [20.9, 783.0], [21.0, 784.0], [21.1, 784.0], [21.2, 784.0], [21.3, 784.0], [21.4, 784.0], [21.5, 784.0], [21.6, 784.0], [21.7, 784.0], [21.8, 784.0], [21.9, 784.0], [22.0, 784.0], [22.1, 784.0], [22.2, 784.0], [22.3, 784.0], [22.4, 784.0], [22.5, 784.0], [22.6, 784.0], [22.7, 784.0], [22.8, 784.0], [22.9, 784.0], [23.0, 785.0], [23.1, 785.0], [23.2, 785.0], [23.3, 785.0], [23.4, 785.0], [23.5, 785.0], [23.6, 785.0], [23.7, 785.0], [23.8, 785.0], [23.9, 785.0], [24.0, 788.0], [24.1, 788.0], [24.2, 788.0], [24.3, 788.0], [24.4, 788.0], [24.5, 788.0], [24.6, 788.0], [24.7, 788.0], [24.8, 788.0], [24.9, 788.0], [25.0, 788.0], [25.1, 788.0], [25.2, 788.0], [25.3, 788.0], [25.4, 788.0], [25.5, 788.0], [25.6, 788.0], [25.7, 788.0], [25.8, 788.0], [25.9, 788.0], [26.0, 788.0], [26.1, 788.0], [26.2, 788.0], [26.3, 788.0], [26.4, 788.0], [26.5, 788.0], [26.6, 788.0], [26.7, 788.0], [26.8, 788.0], [26.9, 788.0], [27.0, 789.0], [27.1, 789.0], [27.2, 789.0], [27.3, 789.0], [27.4, 789.0], [27.5, 789.0], [27.6, 789.0], [27.7, 789.0], [27.8, 789.0], [27.9, 789.0], [28.0, 789.0], [28.1, 789.0], [28.2, 789.0], [28.3, 789.0], [28.4, 789.0], [28.5, 789.0], [28.6, 789.0], [28.7, 789.0], [28.8, 789.0], [28.9, 789.0], [29.0, 789.0], [29.1, 789.0], [29.2, 789.0], [29.3, 789.0], [29.4, 789.0], [29.5, 789.0], [29.6, 789.0], [29.7, 789.0], [29.8, 789.0], [29.9, 789.0], [30.0, 789.0], [30.1, 789.0], [30.2, 789.0], [30.3, 789.0], [30.4, 789.0], [30.5, 789.0], [30.6, 789.0], [30.7, 789.0], [30.8, 789.0], [30.9, 789.0], [31.0, 789.0], [31.1, 789.0], [31.2, 789.0], [31.3, 789.0], [31.4, 789.0], [31.5, 789.0], [31.6, 789.0], [31.7, 789.0], [31.8, 789.0], [31.9, 789.0], [32.0, 791.0], [32.1, 791.0], [32.2, 791.0], [32.3, 791.0], [32.4, 791.0], [32.5, 791.0], [32.6, 791.0], [32.7, 791.0], [32.8, 791.0], [32.9, 791.0], [33.0, 792.0], [33.1, 792.0], [33.2, 792.0], [33.3, 792.0], [33.4, 792.0], [33.5, 792.0], [33.6, 792.0], [33.7, 792.0], [33.8, 792.0], [33.9, 792.0], [34.0, 793.0], [34.1, 793.0], [34.2, 793.0], [34.3, 793.0], [34.4, 793.0], [34.5, 793.0], [34.6, 793.0], [34.7, 793.0], [34.8, 793.0], [34.9, 793.0], [35.0, 793.0], [35.1, 793.0], [35.2, 793.0], [35.3, 793.0], [35.4, 793.0], [35.5, 793.0], [35.6, 793.0], [35.7, 793.0], [35.8, 793.0], [35.9, 793.0], [36.0, 794.0], [36.1, 794.0], [36.2, 794.0], [36.3, 794.0], [36.4, 794.0], [36.5, 794.0], [36.6, 794.0], [36.7, 794.0], [36.8, 794.0], [36.9, 794.0], [37.0, 795.0], [37.1, 795.0], [37.2, 795.0], [37.3, 795.0], [37.4, 795.0], [37.5, 795.0], [37.6, 795.0], [37.7, 795.0], [37.8, 795.0], [37.9, 795.0], [38.0, 796.0], [38.1, 796.0], [38.2, 796.0], [38.3, 796.0], [38.4, 796.0], [38.5, 796.0], [38.6, 796.0], [38.7, 796.0], [38.8, 796.0], [38.9, 796.0], [39.0, 796.0], [39.1, 796.0], [39.2, 796.0], [39.3, 796.0], [39.4, 796.0], [39.5, 796.0], [39.6, 796.0], [39.7, 796.0], [39.8, 796.0], [39.9, 796.0], [40.0, 797.0], [40.1, 797.0], [40.2, 797.0], [40.3, 797.0], [40.4, 797.0], [40.5, 797.0], [40.6, 797.0], [40.7, 797.0], [40.8, 797.0], [40.9, 797.0], [41.0, 797.0], [41.1, 797.0], [41.2, 797.0], [41.3, 797.0], [41.4, 797.0], [41.5, 797.0], [41.6, 797.0], [41.7, 797.0], [41.8, 797.0], [41.9, 797.0], [42.0, 797.0], [42.1, 797.0], [42.2, 797.0], [42.3, 797.0], [42.4, 797.0], [42.5, 797.0], [42.6, 797.0], [42.7, 797.0], [42.8, 797.0], [42.9, 797.0], [43.0, 799.0], [43.1, 799.0], [43.2, 799.0], [43.3, 799.0], [43.4, 799.0], [43.5, 799.0], [43.6, 799.0], [43.7, 799.0], [43.8, 799.0], [43.9, 799.0], [44.0, 802.0], [44.1, 802.0], [44.2, 802.0], [44.3, 802.0], [44.4, 802.0], [44.5, 802.0], [44.6, 802.0], [44.7, 802.0], [44.8, 802.0], [44.9, 802.0], [45.0, 805.0], [45.1, 805.0], [45.2, 805.0], [45.3, 805.0], [45.4, 805.0], [45.5, 805.0], [45.6, 805.0], [45.7, 805.0], [45.8, 805.0], [45.9, 805.0], [46.0, 806.0], [46.1, 806.0], [46.2, 806.0], [46.3, 806.0], [46.4, 806.0], [46.5, 806.0], [46.6, 806.0], [46.7, 806.0], [46.8, 806.0], [46.9, 806.0], [47.0, 807.0], [47.1, 807.0], [47.2, 807.0], [47.3, 807.0], [47.4, 807.0], [47.5, 807.0], [47.6, 807.0], [47.7, 807.0], [47.8, 807.0], [47.9, 807.0], [48.0, 808.0], [48.1, 808.0], [48.2, 808.0], [48.3, 808.0], [48.4, 808.0], [48.5, 808.0], [48.6, 808.0], [48.7, 808.0], [48.8, 808.0], [48.9, 808.0], [49.0, 809.0], [49.1, 809.0], [49.2, 809.0], [49.3, 809.0], [49.4, 809.0], [49.5, 809.0], [49.6, 809.0], [49.7, 809.0], [49.8, 809.0], [49.9, 809.0], [50.0, 810.0], [50.1, 810.0], [50.2, 810.0], [50.3, 810.0], [50.4, 810.0], [50.5, 810.0], [50.6, 810.0], [50.7, 810.0], [50.8, 810.0], [50.9, 810.0], [51.0, 810.0], [51.1, 810.0], [51.2, 810.0], [51.3, 810.0], [51.4, 810.0], [51.5, 810.0], [51.6, 810.0], [51.7, 810.0], [51.8, 810.0], [51.9, 810.0], [52.0, 810.0], [52.1, 810.0], [52.2, 810.0], [52.3, 810.0], [52.4, 810.0], [52.5, 810.0], [52.6, 810.0], [52.7, 810.0], [52.8, 810.0], [52.9, 810.0], [53.0, 810.0], [53.1, 810.0], [53.2, 810.0], [53.3, 810.0], [53.4, 810.0], [53.5, 810.0], [53.6, 810.0], [53.7, 810.0], [53.8, 810.0], [53.9, 810.0], [54.0, 811.0], [54.1, 811.0], [54.2, 811.0], [54.3, 811.0], [54.4, 811.0], [54.5, 811.0], [54.6, 811.0], [54.7, 811.0], [54.8, 811.0], [54.9, 811.0], [55.0, 812.0], [55.1, 812.0], [55.2, 812.0], [55.3, 812.0], [55.4, 812.0], [55.5, 812.0], [55.6, 812.0], [55.7, 812.0], [55.8, 812.0], [55.9, 812.0], [56.0, 813.0], [56.1, 813.0], [56.2, 813.0], [56.3, 813.0], [56.4, 813.0], [56.5, 813.0], [56.6, 813.0], [56.7, 813.0], [56.8, 813.0], [56.9, 813.0], [57.0, 815.0], [57.1, 815.0], [57.2, 815.0], [57.3, 815.0], [57.4, 815.0], [57.5, 815.0], [57.6, 815.0], [57.7, 815.0], [57.8, 815.0], [57.9, 815.0], [58.0, 816.0], [58.1, 816.0], [58.2, 816.0], [58.3, 816.0], [58.4, 816.0], [58.5, 816.0], [58.6, 816.0], [58.7, 816.0], [58.8, 816.0], [58.9, 816.0], [59.0, 817.0], [59.1, 817.0], [59.2, 817.0], [59.3, 817.0], [59.4, 817.0], [59.5, 817.0], [59.6, 817.0], [59.7, 817.0], [59.8, 817.0], [59.9, 817.0], [60.0, 817.0], [60.1, 817.0], [60.2, 817.0], [60.3, 817.0], [60.4, 817.0], [60.5, 817.0], [60.6, 817.0], [60.7, 817.0], [60.8, 817.0], [60.9, 817.0], [61.0, 817.0], [61.1, 817.0], [61.2, 817.0], [61.3, 817.0], [61.4, 817.0], [61.5, 817.0], [61.6, 817.0], [61.7, 817.0], [61.8, 817.0], [61.9, 817.0], [62.0, 818.0], [62.1, 818.0], [62.2, 818.0], [62.3, 818.0], [62.4, 818.0], [62.5, 818.0], [62.6, 818.0], [62.7, 818.0], [62.8, 818.0], [62.9, 818.0], [63.0, 819.0], [63.1, 819.0], [63.2, 819.0], [63.3, 819.0], [63.4, 819.0], [63.5, 819.0], [63.6, 819.0], [63.7, 819.0], [63.8, 819.0], [63.9, 819.0], [64.0, 819.0], [64.1, 819.0], [64.2, 819.0], [64.3, 819.0], [64.4, 819.0], [64.5, 819.0], [64.6, 819.0], [64.7, 819.0], [64.8, 819.0], [64.9, 819.0], [65.0, 819.0], [65.1, 819.0], [65.2, 819.0], [65.3, 819.0], [65.4, 819.0], [65.5, 819.0], [65.6, 819.0], [65.7, 819.0], [65.8, 819.0], [65.9, 819.0], [66.0, 819.0], [66.1, 819.0], [66.2, 819.0], [66.3, 819.0], [66.4, 819.0], [66.5, 819.0], [66.6, 819.0], [66.7, 819.0], [66.8, 819.0], [66.9, 819.0], [67.0, 819.0], [67.1, 819.0], [67.2, 819.0], [67.3, 819.0], [67.4, 819.0], [67.5, 819.0], [67.6, 819.0], [67.7, 819.0], [67.8, 819.0], [67.9, 819.0], [68.0, 822.0], [68.1, 822.0], [68.2, 822.0], [68.3, 822.0], [68.4, 822.0], [68.5, 822.0], [68.6, 822.0], [68.7, 822.0], [68.8, 822.0], [68.9, 822.0], [69.0, 822.0], [69.1, 822.0], [69.2, 822.0], [69.3, 822.0], [69.4, 822.0], [69.5, 822.0], [69.6, 822.0], [69.7, 822.0], [69.8, 822.0], [69.9, 822.0], [70.0, 824.0], [70.1, 824.0], [70.2, 824.0], [70.3, 824.0], [70.4, 824.0], [70.5, 824.0], [70.6, 824.0], [70.7, 824.0], [70.8, 824.0], [70.9, 824.0], [71.0, 824.0], [71.1, 824.0], [71.2, 824.0], [71.3, 824.0], [71.4, 824.0], [71.5, 824.0], [71.6, 824.0], [71.7, 824.0], [71.8, 824.0], [71.9, 824.0], [72.0, 824.0], [72.1, 824.0], [72.2, 824.0], [72.3, 824.0], [72.4, 824.0], [72.5, 824.0], [72.6, 824.0], [72.7, 824.0], [72.8, 824.0], [72.9, 824.0], [73.0, 825.0], [73.1, 825.0], [73.2, 825.0], [73.3, 825.0], [73.4, 825.0], [73.5, 825.0], [73.6, 825.0], [73.7, 825.0], [73.8, 825.0], [73.9, 825.0], [74.0, 826.0], [74.1, 826.0], [74.2, 826.0], [74.3, 826.0], [74.4, 826.0], [74.5, 826.0], [74.6, 826.0], [74.7, 826.0], [74.8, 826.0], [74.9, 826.0], [75.0, 831.0], [75.1, 831.0], [75.2, 831.0], [75.3, 831.0], [75.4, 831.0], [75.5, 831.0], [75.6, 831.0], [75.7, 831.0], [75.8, 831.0], [75.9, 831.0], [76.0, 834.0], [76.1, 834.0], [76.2, 834.0], [76.3, 834.0], [76.4, 834.0], [76.5, 834.0], [76.6, 834.0], [76.7, 834.0], [76.8, 834.0], [76.9, 834.0], [77.0, 840.0], [77.1, 840.0], [77.2, 840.0], [77.3, 840.0], [77.4, 840.0], [77.5, 840.0], [77.6, 840.0], [77.7, 840.0], [77.8, 840.0], [77.9, 840.0], [78.0, 840.0], [78.1, 840.0], [78.2, 840.0], [78.3, 840.0], [78.4, 840.0], [78.5, 840.0], [78.6, 840.0], [78.7, 840.0], [78.8, 840.0], [78.9, 840.0], [79.0, 842.0], [79.1, 842.0], [79.2, 842.0], [79.3, 842.0], [79.4, 842.0], [79.5, 842.0], [79.6, 842.0], [79.7, 842.0], [79.8, 842.0], [79.9, 842.0], [80.0, 842.0], [80.1, 842.0], [80.2, 842.0], [80.3, 842.0], [80.4, 842.0], [80.5, 842.0], [80.6, 842.0], [80.7, 842.0], [80.8, 842.0], [80.9, 842.0], [81.0, 842.0], [81.1, 842.0], [81.2, 842.0], [81.3, 842.0], [81.4, 842.0], [81.5, 842.0], [81.6, 842.0], [81.7, 842.0], [81.8, 842.0], [81.9, 842.0], [82.0, 845.0], [82.1, 845.0], [82.2, 845.0], [82.3, 845.0], [82.4, 845.0], [82.5, 845.0], [82.6, 845.0], [82.7, 845.0], [82.8, 845.0], [82.9, 845.0], [83.0, 847.0], [83.1, 847.0], [83.2, 847.0], [83.3, 847.0], [83.4, 847.0], [83.5, 847.0], [83.6, 847.0], [83.7, 847.0], [83.8, 847.0], [83.9, 847.0], [84.0, 850.0], [84.1, 850.0], [84.2, 850.0], [84.3, 850.0], [84.4, 850.0], [84.5, 850.0], [84.6, 850.0], [84.7, 850.0], [84.8, 850.0], [84.9, 850.0], [85.0, 854.0], [85.1, 854.0], [85.2, 854.0], [85.3, 854.0], [85.4, 854.0], [85.5, 854.0], [85.6, 854.0], [85.7, 854.0], [85.8, 854.0], [85.9, 854.0], [86.0, 857.0], [86.1, 857.0], [86.2, 857.0], [86.3, 857.0], [86.4, 857.0], [86.5, 857.0], [86.6, 857.0], [86.7, 857.0], [86.8, 857.0], [86.9, 857.0], [87.0, 857.0], [87.1, 857.0], [87.2, 857.0], [87.3, 857.0], [87.4, 857.0], [87.5, 857.0], [87.6, 857.0], [87.7, 857.0], [87.8, 857.0], [87.9, 857.0], [88.0, 860.0], [88.1, 860.0], [88.2, 860.0], [88.3, 860.0], [88.4, 860.0], [88.5, 860.0], [88.6, 860.0], [88.7, 860.0], [88.8, 860.0], [88.9, 860.0], [89.0, 865.0], [89.1, 865.0], [89.2, 865.0], [89.3, 865.0], [89.4, 865.0], [89.5, 865.0], [89.6, 865.0], [89.7, 865.0], [89.8, 865.0], [89.9, 865.0], [90.0, 869.0], [90.1, 869.0], [90.2, 869.0], [90.3, 869.0], [90.4, 869.0], [90.5, 869.0], [90.6, 869.0], [90.7, 869.0], [90.8, 869.0], [90.9, 869.0], [91.0, 870.0], [91.1, 870.0], [91.2, 870.0], [91.3, 870.0], [91.4, 870.0], [91.5, 870.0], [91.6, 870.0], [91.7, 870.0], [91.8, 870.0], [91.9, 870.0], [92.0, 875.0], [92.1, 875.0], [92.2, 875.0], [92.3, 875.0], [92.4, 875.0], [92.5, 875.0], [92.6, 875.0], [92.7, 875.0], [92.8, 875.0], [92.9, 875.0], [93.0, 890.0], [93.1, 890.0], [93.2, 890.0], [93.3, 890.0], [93.4, 890.0], [93.5, 890.0], [93.6, 890.0], [93.7, 890.0], [93.8, 890.0], [93.9, 890.0], [94.0, 891.0], [94.1, 891.0], [94.2, 891.0], [94.3, 891.0], [94.4, 891.0], [94.5, 891.0], [94.6, 891.0], [94.7, 891.0], [94.8, 891.0], [94.9, 891.0], [95.0, 892.0], [95.1, 892.0], [95.2, 892.0], [95.3, 892.0], [95.4, 892.0], [95.5, 892.0], [95.6, 892.0], [95.7, 892.0], [95.8, 892.0], [95.9, 892.0], [96.0, 892.0], [96.1, 892.0], [96.2, 892.0], [96.3, 892.0], [96.4, 892.0], [96.5, 892.0], [96.6, 892.0], [96.7, 892.0], [96.8, 892.0], [96.9, 892.0], [97.0, 912.0], [97.1, 912.0], [97.2, 912.0], [97.3, 912.0], [97.4, 912.0], [97.5, 912.0], [97.6, 912.0], [97.7, 912.0], [97.8, 912.0], [97.9, 912.0], [98.0, 934.0], [98.1, 934.0], [98.2, 934.0], [98.3, 934.0], [98.4, 934.0], [98.5, 934.0], [98.6, 934.0], [98.7, 934.0], [98.8, 934.0], [98.9, 934.0], [99.0, 948.0], [99.1, 948.0], [99.2, 948.0], [99.3, 948.0], [99.4, 948.0], [99.5, 948.0], [99.6, 948.0], [99.7, 948.0], [99.8, 948.0], [99.9, 948.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 700.0, "maxY": 53.0, "series": [{"data": [[700.0, 44.0], [800.0, 53.0], [900.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 100.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.489130434782608, "minX": 1.7023005E12, "maxY": 4.75, "series": [{"data": [[1.70230056E12, 4.489130434782608], [1.7023005E12, 4.75]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70230056E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 754.0, "minX": 1.0, "maxY": 850.0, "series": [{"data": [[4.0, 780.8536585365853], [2.0, 754.0], [1.0, 768.0], [5.0, 837.4727272727271], [6.0, 850.0], [3.0, 842.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.509999999999999, 812.9000000000004]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 15.6, "minX": 1.7023005E12, "maxY": 492799.26666666666, "series": [{"data": [[1.70230056E12, 492799.26666666666], [1.7023005E12, 42830.36666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70230056E12, 179.4], [1.7023005E12, 15.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70230056E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 812.1304347826087, "minX": 1.7023005E12, "maxY": 821.75, "series": [{"data": [[1.70230056E12, 812.1304347826087], [1.7023005E12, 821.75]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70230056E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 610.8804347826086, "minX": 1.7023005E12, "maxY": 624.875, "series": [{"data": [[1.70230056E12, 610.8804347826086], [1.7023005E12, 624.875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70230056E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 40.45652173913044, "minX": 1.7023005E12, "maxY": 56.5, "series": [{"data": [[1.70230056E12, 40.45652173913044], [1.7023005E12, 56.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70230056E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 742.0, "minX": 1.7023005E12, "maxY": 948.0, "series": [{"data": [[1.70230056E12, 948.0], [1.7023005E12, 865.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70230056E12, 869.7], [1.7023005E12, 865.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70230056E12, 948.0], [1.7023005E12, 865.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70230056E12, 892.0], [1.7023005E12, 865.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70230056E12, 742.0], [1.7023005E12, 782.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70230056E12, 808.5], [1.7023005E12, 821.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70230056E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 761.0, "minX": 2.0, "maxY": 850.0, "series": [{"data": [[4.0, 812.0], [2.0, 761.0], [5.0, 808.0], [3.0, 850.0], [6.0, 830.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 574.0, "minX": 2.0, "maxY": 665.0, "series": [{"data": [[4.0, 614.5], [2.0, 574.0], [5.0, 606.0], [3.0, 665.0], [6.0, 630.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.2, "minX": 1.7023005E12, "maxY": 1.4666666666666666, "series": [{"data": [[1.70230056E12, 1.4666666666666666], [1.7023005E12, 0.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70230056E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.7023005E12, "maxY": 1.5333333333333334, "series": [{"data": [[1.70230056E12, 1.5333333333333334], [1.7023005E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70230056E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.7023005E12, "maxY": 1.5333333333333334, "series": [{"data": [[1.70230056E12, 1.5333333333333334], [1.7023005E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70230056E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.7023005E12, "maxY": 1.5333333333333334, "series": [{"data": [[1.70230056E12, 1.5333333333333334], [1.7023005E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70230056E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

