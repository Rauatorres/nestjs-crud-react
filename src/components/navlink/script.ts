function pagePath(propsPage: string | undefined | null){
    if(typeof propsPage == "string"){
        return propsPage;
    }else{
        return "";
    }
}

function highlight(isHighlighted: boolean){
    if(isHighlighted){
        return " *";
    }else{
        return "";
    }
}

export { pagePath, highlight }
