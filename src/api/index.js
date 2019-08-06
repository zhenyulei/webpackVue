import axios from "axios";
import qs from "qs";

let isLoc = (() => /localhost|page.jd.com/.test(location.hostname))();


const handleResponse = (respone) => {
    let {data} = respone;
    return new Promise((resolve,reject)=>{
        if(data.code==='1000'){
            resolve(data)
        }else{
            reject(data.msg);
        }
    })
}


export function getData(transData) {
    const url = isLoc ? "//json.diao.li/getjson/5d3e66ee584a004b0598ecd9" : "/stryview/v1/timeLine";
    return axios.get(url, { params: transData }).then(handleResponse);
}

export function getPostData(transData) {
    const url = isLoc ? "//json.diao.li/getjson/5d3e66ee584a004b0598ecd9" : "/stryview/v1/timeLine";
    return axios.post(url, qs.stringify(transData)).then(handleResponse);
}