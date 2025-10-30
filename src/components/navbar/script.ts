function isCurrentPage(currentPage: string, navlinkPage: string){
    if(navlinkPage == currentPage){
        return true;
    }else{
        return false;
    }
}

export { isCurrentPage }