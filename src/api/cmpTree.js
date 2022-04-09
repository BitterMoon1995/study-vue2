import axiosIns from "@/common/myAxios";

export function getCmpTree() {
    return axiosIns.get('http://localhost:8840/ms/ayaka/cmpTree')
}
