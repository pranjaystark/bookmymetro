
function Graph() {
  this.adjList = {}
}

Graph.prototype.addVertex = function(vertex) {
  this.adjList[vertex] = []
}

Graph.prototype.addEdge = function(vertex1,vertex2) {
  this.adjList[vertex1].push(vertex2)
}

Graph.prototype.dfs = function() {
  const nodes = Object.keys(this.adjList)
  const visited = {}
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    this._dfsUtil(node, visited)
  }
}
  
Graph.prototype._dfsUtil = function(vertex, visited) {
  if (!visited[vertex]){  
    visited[vertex] = true
    console.log(vertex)
    const neighbors = this.adjList[vertex]
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i] 
        this._dfsUtil(neighbor, visited)
    }
  }
}

Graph.prototype.detectCycle = function() {
  const graphNodes = Object.keys(this.adjList);
  const visited = {};
  const recStack = {};
  
  for (let i = 0; i < graphNodes.length; i++) {
    const node = graphNodes[i]
    if (this._detectCycleUtil(node, visited , recStack)) 
      return 'there is a cycle'
  }
  return 'no cycle!'
}

Graph.prototype._detectCycleUtil = function(vertex, visited, recStack) {
  if(!visited[vertex]){
    visited[vertex] = true;
    recStack[vertex] = true;
    const nodeNeighbors = this.adjList[vertex];
    for(let i = 0; i < nodeNeighbors.length; i++){
      const currentNode = nodeNeighbors[i];
	  console.log('parent', vertex, 'Child', currentNode);
      if(!visited[currentNode] && this._detectCycleUtil(currentNode,visited, recStack)){
        return true;
      } else if (recStack[currentNode]){
        return true;
      }
    }
  }
  recStack[vertex] = false;
  return false;
}
Graph.prototype._getPath=function(fromVertex,toVertex)
{
	const visited = {}
	this._getfullpath(fromVertex, visited,toVertex);

}
Graph.prototype._getfullpath=function(fromVertex,visited,toVertex)
{ 
	if(fromVertex===toVertex)
	{
		console.log(toVertex);
		return;
	} 
	if (!visited[fromVertex]){
	
    visited[fromVertex] = true
    console.log(fromVertex)
    const neighbors = this.adjList[fromVertex]
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i] 
     
        this._getfullpath(neighbor, visited,toVertex)

  }
}
}

Graph.prototype._find=function(list, from, to) {
   
    let current = list.find(v => v.source === from);

    if (!current) 
        throw new Error("No from in list");

   
    if (current.target === to)
        return current;

   
    return [current].concat(find(list, current.target, to));
}


Graph.prototype._shortestPath=function(source, target) {
  if (source == target) {  
   console.log(source);    
    return;                
  }                        
  var queue = [ source ],
      visited = { source: true },
      predecessor = {},
      tail = 0;
  while (tail < queue.length) {
    var u = queue[tail++], 
    neighbors = this.adjList[u];
    for (var i = 0; i < neighbors.length; ++i) {
      var v = neighbors[i];
      if (visited[v]) {
        continue;
      }
      visited[v] = true;
      if (v === target) {  
        var path = [ v ];  
        while (u !== source) {
          path.push(u);
          u = predecessor[u];          
        }
        path.push(u);
        path.reverse();
        console.log(path.join(' , '));
        return;
      }
      predecessor[v] = u;
      queue.push(v);
    }
  }
  console.log('there is no path from ' + source + ' to ' + target);
}











const g = new Graph()


var vertices = [ 'Noida Electronic City','Noida Sector 62','Noida Sector 59','Noida Sector 61','Noida Sector 52','Noida Sector 34'
,'Noida City Centre','Golf Course','Botanical Garden','Noida Sector 18','Noida Sector 16','Noida Sector 15','New Ashok Nagar',
'Mayur Vihar Extension','Mayur Vihar Phase-1','Akshardham','Yamuna Bank','Indraprastha','Pargati Maidan','Mandi House','Barakhamba Road',
'Rajiv Chowk','R K Ashram Marg','Jhandenwalan','Karol Bagh','Rajendra Place','Patel Nagar','Shadipur','Kirti Nagar','Moti Nagar',
'Ramesh Nagar','Rajouri Garden','Tagore Garden','Subash Nagar','Tilak Nagar','Janakpuri East','Janakpuri West','Uttam Nagar East',
'Uttam Nagar West','Nawada','Dwaraka Mor','Dwaraka','Dwaraka Sector 14','Dwaraka Sector 13','Dwaraka Sector 12','Dwarka Sector 11',
'Dwarka Sector 10','Dwarka Sector 9','Dwarka Sector 8','Dwarka Sector 21',


'Samaypur Badli','Rohini Sector 18, 19','Haiderpur Badi Mor','Jahangirpuri','Adarsh Nagar','Azadpur','Model Town','Guru Tegh Bahadur Nagar',
'Vishwavidyalaya','Vidhan Sabha','Civil Lines','Chandni Chowk Metro','Chawri Bazar','New Delhi',
'Patel Chowk','Central Secretariat','Udyog Bhawan','LOK Kalyan Marg','APJ Abdul Kalam Road','Jorbhagh',
'Dilli Haat - Ina','Aiims','Green Park','Hauz Khas','Malviya Nagar','Saket','Qutab Minar','Chhattarpur','Sultanpur','Ghitorni',
'Arjangarh','Guru Dronacharya','Sikanderpur','M G Road','Iffco Chowk','Huda City Center',


'Lal Quila','739 S1, Delhi','Jama Masjid','Delhi Gate','Ito','Janpath','Khan Market',
'Jawahar Lal Nehru Stadium','Jangpura','Lajpat Nagar Metro','Moolchand','Kailash Colony','Nehru Place','Kalkaji Mandir','Nehru Place Road, New Delhi',
'Govind Puri','Harkesh Nagar Okhla','Jasola Apollo','Sarita Vihar','Mohan Estate','Tughlakabad','Badarpur','Sarai','N.H.P.C Chowk','Mewala Maharajpur',
'Sector 28','Badkal Mor','Old Faridabad','Neelam Chowk Ajronda','Bata Chowk','Escorts Mujesar','Sant Surdas','Raja Nahar Singh',


'Dabri Mor','Dashrath Puri','Palam','Sadar Bazar','Indra Gandhi Domestic Airport Terminal 1','Shankar Vihar','Vasant Vihar','Munirka',
'R.K Puram','Iit','Panchsheel Park','Chirag Delhi','Greater Kailash','Nehru Enclave','Nehru Place Road, New Delhi',
'Okhla Nsic','Sukhdev Vihar','Jamia Millia Islamia','Okhla Vihar','Jasola Vihar Shaheen Bagh','Kalindi Kunj','Okhla Bird Sanctuary',


'Shiv Vihar','Johri Enclave','Gokulpuri','Maujpur- Babarpur','Jafrabad','Welcome','East Azad Nagar','Krishna Nagar',
'Karkarduma Court','Karkarduma','Anand Vihar','Ip Extension','Mandawali- West Vinod Nagar','East Vinod Nagar- Mayur Vihar-Ii','Trilokpuri- Sanjay Lake',


'Upcoming Arrivals','Ashok Park Main','Punjabi Bagh','Shivaji Park','Madipur','Paschim Vihar East','Paschim Vihar West','Peera Garhi',
'Udyog Nagar','Maharaja Surajmal Stadium','Nangloi','Nangloi Railway Station','Rajdhani Park','Mundka',


'Shaheed Sthal','Hindon','Arthala','Mohan Nagar','Shyam Park','Major Mohit Sharma','Raj Bagh','Shaheed Nagar','Dilshad Garden',
'Jhilmil','Mansarovar Park','Shahdara','Seelampur','Shastri Park','Kashmere Gate','Tis Hazari','Pul Bangash','Pratap Nagar',
'Shastri Naga','Inderlok','Kanhiya Nagar','Keshav Puram','Netaji Subhash Place','Kohat Enclave','Pitampura','Rohini East','Rohini West','Rithala'];
















 
for (var i = 0; i < vertices.length; i++)
{ 
    g.addVertex(vertices[i]); 
}



  

g.addEdge('Noida Electronic City', 'Noida Sector 62'); 
g.addEdge('Noida Sector 62','Noida Sector 59'); 
g.addEdge('Noida Sector 59','Noida Sector 61'); 
g.addEdge('Noida Sector 61','Noida Sector 52'); 
g.addEdge('Noida Sector 52','Noida Sector 34'); 
g.addEdge('Noida Sector 34','Noida City Centre'); 
g.addEdge('Noida City Centre','Golf Course'); 
g.addEdge('Golf Course','Botanical Garden'); 
g.addEdge('Botanical Garden','Noida Sector 18');
g.addEdge('Noida Sector 18','Noida Sector 16');
g.addEdge('Noida Sector 16','Noida Sector 15');
g.addEdge('Noida Sector 15','New Ashok Nagar');
g.addEdge('New Ashok Nagar','Mayur Vihar Extension');
g.addEdge('Mayur Vihar Extension','Mayur Vihar Phase-1');
g.addEdge('Mayur Vihar Phase-1','Akshardham');
g.addEdge('Akshardham','Yamuna Bank');
g.addEdge('Yamuna Bank','Indraprastha');
g.addEdge('Indraprastha','Pargati Maidan');
g.addEdge('Pargati Maidan','Mandi House');
g.addEdge('Mandi House','Barakhamba Road');
g.addEdge('Barakhamba Road','Rajiv Chowk');
g.addEdge('Rajiv Chowk','R K Ashram Marg');
g.addEdge('R K Ashram Marg','Jhandenwalan');
g.addEdge('Jhandenwalan','Karol Bagh');
g.addEdge('Karol Bagh','Rajendra Place');
g.addEdge('Rajendra Place','Patel Nagar');
g.addEdge('Patel Nagar','Shadipur');
g.addEdge('Shadipur','Kirti Nagar');
g.addEdge('Kirti Nagar','Moti Nagar');
g.addEdge('Moti Nagar','Ramesh Nagar');
g.addEdge('Ramesh Nagar','Rajouri Garden');
g.addEdge('Rajouri Garden','Tagore Garden');
g.addEdge('Tagore Garden','Subash Nagar');
g.addEdge('Subash Nagar','Tilak Nagar');
g.addEdge('Tilak Nagar','Janakpuri East');
g.addEdge('Janakpuri East','Janakpuri West');
g.addEdge('Janakpuri West','Uttam Nagar East');
g.addEdge('Uttam Nagar East','Uttam Nagar West');
g.addEdge('Uttam Nagar West','Nawada');
g.addEdge('Nawada','Dwaraka Mor');
g.addEdge('Dwaraka Mor','Dwaraka');
g.addEdge('Dwaraka','Dwaraka Sector 14');
g.addEdge('Dwaraka Sector 14','Dwaraka Sector 13');
g.addEdge('Dwaraka Sector 13','Dwaraka Sector 12');
g.addEdge('Dwaraka Sector 12','Dwarka Sector 11');
g.addEdge('Dwarka Sector 11','Dwarka Sector 10');
g.addEdge('Dwarka Sector 10','Dwarka Sector 9');
g.addEdge('Dwarka Sector 9','Dwarka Sector 8');
g.addEdge('Dwarka Sector 8','Dwarka Sector 21');




g.addEdge('Samaypur Badli','Rohini Sector 18, 19');
g.addEdge('Rohini Sector 18, 19','Haiderpur Badi Mor');
g.addEdge('Haiderpur Badi Mor','Jahangirpuri');
g.addEdge('Jahangirpuri','Adarsh Nagar');
g.addEdge('Adarsh Nagar','Azadpur');
g.addEdge('Azadpur','Model Town');
g.addEdge('Model Town','Guru Tegh Bahadur Nagar');
g.addEdge('Guru Tegh Bahadur Nagar','Vishwavidyalaya');
g.addEdge('Vishwavidyalaya','Vidhan Sabha');
g.addEdge('Vidhan Sabha','Civil Lines');
g.addEdge('Civil Lines','Kashmere Gate');
g.addEdge('Kashmere Gate','Chandni Chowk Metro');
g.addEdge('Chandni Chowk Metro','Chawri Bazar');
g.addEdge('Chawri Bazar','New Delhi');
g.addEdge('New Delhi','Rajiv Chowk');
g.addEdge('Rajiv Chowk','Patel Chowk');
g.addEdge('Patel Chowk','Central Secretariat');
g.addEdge('Central Secretariat','Udyog Bhawan');
g.addEdge('Udyog Bhawan','LOK Kalyan Marg');
g.addEdge('LOK Kalyan Marg','APJ Abdul Kalam Road');
g.addEdge('APJ Abdul Kalam Road','Jorbhagh');
g.addEdge('Jorbhagh','Dilli Haat - Ina');
g.addEdge('Aiims','Green Park');
g.addEdge('Green Park','Hauz Khas');
g.addEdge('Hauz Khas','Malviya Nagar');
g.addEdge('Malviya Nagar','Saket');
g.addEdge('Saket','Qutab Minar');
g.addEdge('Qutab Minar','Chhattarpur');
g.addEdge('Chhattarpur','Sultanpur');
g.addEdge('Sultanpur','Ghitorni');
g.addEdge('Ghitorni','Arjangarh');
g.addEdge('Arjangarh','Guru Dronacharya');
g.addEdge('Guru Dronacharya','Sikanderpur');
g.addEdge('Sikanderpur','M G Road');
g.addEdge('M G Road','Iffco Chowk');
g.addEdge('Iffco Chowk','Huda City Center');




g.addEdge('Kashmere Gate','Lal Quila');
g.addEdge('Lal Quila','739 S1, Delhi');
g.addEdge('739 S1, Delhi','Jama Masjid');
g.addEdge('Jama Masjid','Delhi Gate');
g.addEdge('Delhi Gate','Ito');
g.addEdge('Ito','Mandi House');
g.addEdge('Mandi House','Janpath');
g.addEdge('Janpath','Central Secretariat');
g.addEdge('Central Secretariat','Khan Market');
g.addEdge('Khan Market','Jawahar Lal Nehru Stadium');
g.addEdge('Jawahar Lal Nehru Stadium','Jangpura');
g.addEdge('Jangpura','Lajpat Nagar Metro');
g.addEdge('Lajpat Nagar Metro','Moolchand');
g.addEdge('Moolchand','Kailash Colony');
g.addEdge('Kailash Colony','Nehru Place');
g.addEdge('Nehru Place','Kalkaji Mandir');
g.addEdge('Kalkaji Mandir','Nehru Place Road, New Delhi');
g.addEdge('Nehru Place Road, New Delhi','Govind Puri');
g.addEdge('Govind Puri','Harkesh Nagar Okhla');
g.addEdge('Harkesh Nagar Okhla','Jasola Apollo');
g.addEdge('Jasola Apollo','Sarita Vihar');
g.addEdge('Sarita Vihar','Mohan Estate');
g.addEdge('Mohan Estate','Tughlakabad');
g.addEdge('Tughlakabad','Badarpur');
g.addEdge('Badarpur','Sarai');
g.addEdge('Sarai','N.H.P.C Chowk');
g.addEdge('N.H.P.C Chowk','Mewala Maharajpur');
g.addEdge('Mewala Maharajpur','Sector 28');
g.addEdge('Sector 28','Badkal Mor');
g.addEdge('Badkal Mor','Old Faridabad');
g.addEdge('Old Faridabad','Neelam Chowk Ajronda');
g.addEdge('Neelam Chowk Ajronda','Bata Chowk');
g.addEdge('Bata Chowk','Escorts Mujesar');
g.addEdge('Escorts Mujesar','Sant Surdas');
g.addEdge('Sant Surdas','Raja Nahar Singh');




g.addEdge('Janakpuri West','Dabri Mor');
g.addEdge('Dabri Mor','Dashrath Puri');
g.addEdge('Dashrath Puri','Palam');
g.addEdge('Palam','Sadar Bazar');
g.addEdge('Sadar Bazar','Indra Gandhi Domestic Airport Terminal 1');
g.addEdge('Indra Gandhi Domestic Airport Terminal 1','Shankar Vihar');
g.addEdge('Shankar Vihar','Vasant Vihar');
g.addEdge('Vasant Vihar','Munirka');
g.addEdge('Munirka','R.K Puram');
g.addEdge('R.K Puram','Iit');
g.addEdge('Iit','Hauz Khas');
g.addEdge('Hauz Khas','Panchsheel Park');
g.addEdge('Panchsheel Park','Chirag Delhi');
g.addEdge('Chirag Delhi','Greater Kailash');
g.addEdge('Greater Kailash','Nehru Enclave');
g.addEdge('Nehru Enclave','Kalkaji Mandir');
g.addEdge('Kalkaji Mandir','Nehru Place Road, New Delhi');
g.addEdge('Nehru Place Road, New Delhi','Okhla Nsic');
g.addEdge('Okhla Nsic','Sukhdev Vihar');
g.addEdge('Sukhdev Vihar','Jamia Millia Islamia');
g.addEdge('Jamia Millia Islamia','Okhla Vihar');
g.addEdge('Okhla Vihar','Jasola Vihar Shaheen Bagh');
g.addEdge('Jasola Vihar Shaheen Bagh','Kalindi Kunj');
g.addEdge('Kalindi Kunj','Okhla Bird Sanctuary');
g.addEdge('Okhla Bird Sanctuary','Botanical Garden');




g.addEdge('Shiv Vihar','Johri Enclave');
g.addEdge('Johri Enclave','Gokulpuri');
g.addEdge('Gokulpuri','Maujpur- Babarpur');
g.addEdge('Maujpur- Babarpur','Jafrabad');
g.addEdge('Jafrabad','Welcome');
g.addEdge('Welcome','East Azad Nagar');
g.addEdge('East Azad Nagar','Krishna Nagar');
g.addEdge('Krishna Nagar','Karkarduma Court');
g.addEdge('Karkarduma Court','Karkarduma');
g.addEdge('Karkarduma','Anand Vihar');
g.addEdge('Anand Vihar','Ip Extension');
g.addEdge('Ip Extension','Mandawali- West Vinod Nagar');
g.addEdge('Mandawali- West Vinod Nagar','East Vinod Nagar- Mayur Vihar-Ii');
g.addEdge('East Vinod Nagar- Mayur Vihar-Ii','Trilokpuri- Sanjay Lake');





g.addEdge('Kirti Nagar','Upcoming Arrivals');
g.addEdge('Upcoming Arrivals','Ashok Park Main');
g.addEdge('Ashok Park Main','Punjabi Bagh');
g.addEdge('Punjabi Bagh','Shivaji Park');
g.addEdge('Shivaji Park','Madipur');
g.addEdge('Madipur','Paschim Vihar East');
g.addEdge('Paschim Vihar East','Paschim Vihar West');
g.addEdge('Paschim Vihar West','Peera Garhi');
g.addEdge('Peera Garhi','Udyog Nagar');
g.addEdge('Udyog Nagar','Maharaja Surajmal Stadium');
g.addEdge('Maharaja Surajmal Stadium','Nangloi');
g.addEdge('Nangloi','Nangloi Railway Station');
g.addEdge('Nangloi Railway Station','Rajdhani Park');
g.addEdge('Rajdhani Park','Mundka');




g.addEdge('Shaheed Sthal','Hindon');
g.addEdge('Hindon','Arthala');
g.addEdge('Arthala','Mohan Nagar');
g.addEdge('Mohan Nagar','Shyam Park');
g.addEdge('Shyam Park','Major Mohit Sharma');
g.addEdge('Major Mohit Sharma','Raj Bagh');
g.addEdge('Raj Bagh','Shaheed Nagar');
g.addEdge('Shaheed Nagar','Dilshad Garden');
g.addEdge('Dilshad Garden','Jhilmil');
g.addEdge('Jhilmil','Mansarovar Park');
g.addEdge('Mansarovar Park','Shahdara');
g.addEdge('Shahdara','Welcome');
g.addEdge('Welcome','Seelampur');
g.addEdge('Seelampur','Shastri Park');
g.addEdge('Shastri Park','Kashmere Gate');
g.addEdge('Kashmere Gate','Tis Hazari');
g.addEdge('Tis Hazari','Pul Bangash');
g.addEdge('Pul Bangash','Pratap Nagar');
g.addEdge('Pratap Nagar','Shastri Naga');
g.addEdge('Shastri Naga','Inderlok');
g.addEdge('Inderlok','Kanhiya Nagar');
g.addEdge('Kanhiya Nagar','Keshav Puram');
g.addEdge('Keshav Puram','Netaji Subhash Place');
g.addEdge('Netaji Subhash Place','Kohat Enclave');
g.addEdge('Kohat Enclave','Pitampura');
g.addEdge('Pitampura','Rohini East');
g.addEdge('Rohini East','Rohini West');
g.addEdge('Rohini West','Rithala');
g.addEdge('Rithala','Rohini West');








// g._getPath('Noida Sector 61','Noida Sector 16');

// console.log("**********************************************************************************")


// g._getPath('Yamuna Bank','Karol Bagh');

// console.log("**********************************************************************************")


// g._getPath('Okhla Nsic','Okhla Bird Sanctuary');
// g._getPath('Lal Quila','Sukhdev Vihar');


// g._getPath('Noida Sector 61','Okhla Bird Sanctuary');
// g._shortestPath('Lal Quila','Okhla Nsic');
//   console.log("**********************************************************************************")

// g._shortestPath('Inderlok','Rithala');
//   console.log("**********************************************************************************")
// // g.dfs();

// g._shortestPath('Rithala','Inderlok');




// g._shortestPath('Noida Sector 61','Okhla Bird Sanctuary')

