function pagePath(propsPage: string | undefined | null){
    if(typeof propsPage == "string"){
        return propsPage;
    }else{
        return "";
    }
}

function navLinkStyle(isHighlighted: boolean, styles: CSSModuleClasses){
        if(isHighlighted){
            return styles.navlink + ' ' + styles.current;
        }else{
            return styles.navlink;
        }
    }

export { pagePath, navLinkStyle }
