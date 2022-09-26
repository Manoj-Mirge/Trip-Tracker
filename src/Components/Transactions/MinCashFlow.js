




function getMin(arr,N)
{
	let minInd = 0;
	for (let i = 1; i < N; i++){
	 if (arr[i] < arr[minInd]){
		 minInd = i;
	 }
	}
	return minInd;
}


function getMax(arr,N)
{
	let maxInd = 0;
	for (let i = 1; i < N; i++){
	 if (arr[i] > arr[maxInd]){
		maxInd = i;
	}
  }
	return maxInd;
}


function minOf2(x , y)
{
   return (x < y) ? x: y;
}


function minCashFlowRec(amount,transactions,N)
{

	let mxCredit = getMax(amount,N), mxDebit = getMin(amount,N);


	if (amount[mxCredit] == 0 && amount[mxDebit] == 0){
	  return;
  }


	let min = minOf2(-amount[mxDebit], amount[mxCredit]);
	amount[mxCredit] -= min;
	amount[mxDebit] += min;

    transactions.push({
      from:mxDebit,
      to:mxCredit,
      amount:min
    });
	


	minCashFlowRec(amount,transactions,N);
}


function minCashFlow(graph,N)
{

	let amount=Array.from({length: N}, (_, i) => 0);
    let transactions=[];

	for (let p = 0; p < N; p++)
	for (let i = 0; i < N; i++)
	amount[p] += (graph[i][p] - graph[p][i]);
    
	minCashFlowRec(amount,transactions,N);
	return transactions;
}



export default minCashFlow;
