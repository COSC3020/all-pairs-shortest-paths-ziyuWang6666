function allPairsShortestPaths(graph) {
    
    var V = graph.length;
    var dist = [];
    var i,j,k;
    //create dist
    for(i = 0; i < V; i++) {
        dist[i] = [];
        for(k = 0; k < V; k++) {
            dist[i][k] = 0;
        }
    }
    //copy graph to dist
    for(i = 0; i < V; i++) {
        for(k = 0; k < V; k++) {
            dist[i][k] = graph[i][k];
        }
    }
    for(k = 0; k < V; k++) {
        for(i = 0; i <V; i++) {
            for(j = 0; j <V; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}

