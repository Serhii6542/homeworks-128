const btn = document.getElementById('btn');
btn.onclick = markerWrite

const btnRef = document.getElementById('btn-refueled')
btnRef.onclick = refueled

const btnInfo = document.getElementById('showInfo')
btnInfo.onclick = ShowInfo


let mark;

function ShowInfo(){
    const color = document.getElementById('color').value;
    const elVidsotcu = document.getElementById('number').valueAsNumber;
    if(isNaN(elVidsotcu)){
        toast.error('Введіть кількість чорнил');
        return
    }
    if(elVidsotcu<=0 || elVidsotcu>100){
        toast.error('Введіть число від 1 до 100');
        return
    }
    document.getElementById('elColor').value = color
    document.getElementById('elVidsotcu').valueAsNumber = elVidsotcu
}

function markerWrite(){
    const elColor = document.getElementById('elColor').value
    const vid = document.getElementById('elVidsotcu').valueAsNumber
    const textarea = document.getElementById('textTarea').value
    if(isNaN(vid)){
        toast.error('Введіть кількість чорнил');
        return
    }
    if(vid<=0 || vid>100){
        toast.error('Введіть число від 1 до 100');
        return
    }
    if(textarea === ''){
        toast.error('Введіть текст');
        return
    }
    mark = new Marker(elColor, vid);
    mark.writeMarker(textarea)
    
    document.getElementById('elColor').value = elColor;
    
};

function refueled(){
    const refVid = document.getElementById('vidsotcu').valueAsNumber
    if(refVid<=0 || refVid>100){
        toast.error('Введіть число від 1 до 100');
        return
    }
    mark.refill(refVid)
}