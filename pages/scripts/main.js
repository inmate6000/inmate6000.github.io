window.onload = event => {
	const cur2pay = parseFloat(document.querySelector(".paid-cur").innerHTML)
  const total = parseFloat(document.querySelector(".total-cur").innerHTML)
  const interest = parseFloat(document.querySelector(".interest").innerHTML)
  const totalPayment = (total * 0.1) * ((100+interest)/100)
  document.querySelector(".next-pay").innerHTML = parseInt(totalPayment)
  const progress = (cur2pay/total)*100
  console.log(progress)
  document.querySelector("#pbar-status").style.width = progress+"%"
  document.querySelector("#pbar-status #number-prog").innerHTML =  progress.toFixed(2) + "%"
}
