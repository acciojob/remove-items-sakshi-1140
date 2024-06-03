//your JS code here. If required.

const btn=document.querySelector('input[type="button"][value="Select and Remove"]')
btn.addEventListener("click", function(){
  const colorSelect=document.getElementById('colorSelect')
  const selectedColorIndex=colorSelect.selectedIndex
  colorSelect.remove(selectedColorIndex)
})