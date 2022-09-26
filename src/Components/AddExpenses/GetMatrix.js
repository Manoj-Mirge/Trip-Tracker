
function getMatrix(expenses,length) {
	let matrix=[];
	for(let i=0;i<length;i++){
		matrix.push(new Array(length).fill(0)); 
	}
	for(let i=0;i<expenses.length;i++){
		let expense=expenses[i];
		for(let j=0;j<length;j++){
			let amount=parseInt((expense.payee[j]=="")?('0'):(expense.payee[j]));
			if(amount===0){
				continue;
			}
			let list=expense.participants;
			let contri=parseInt(amount/list.length);
			for(let k=0;k<list.length;k++){
				if(list[k]===j){
					continue;
				}
				matrix[list[k]][j]=matrix[list[k]][j]+contri;
			}
		}
	}
	return matrix;
}

export default getMatrix;