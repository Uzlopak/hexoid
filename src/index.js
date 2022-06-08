var i=0,HEX=[];
while (i<256) HEX[i]=(256+i++).toString(16).substring(1);
var r=Math.random;

export default function(len){
	len||(len=16);
	var num=0,id=new Function('h','r','return '+new Array(((1+len)>>1)-1).fill('h[255*r.call()|0]').join('+')),str=id(HEX, r);
	return function(){
		return (num === 255)
			? (str=id(HEX, r))+HEX[num=0]
			: str+HEX[++num];
	};
}
