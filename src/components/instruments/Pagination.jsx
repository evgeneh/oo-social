import React from "react";

import s from "./Instruments.module.css";

import {withRouter} from "react-router-dom";

import Link from "./link/Link";

const Pages = (props) => {
    let pages = [];

    if (props.pagesCount > 5) {
        pages.push('1');
        let startValue = 2;
        if (props.page > 3) {
            pages.push('…')
            startValue = Number(props.page) - 1;
        }

        for (let i = startValue; (i <= startValue + 2) && (i < Number(props.pagesCount)); i++)
            pages.push(i.toString());
        if (props.page < props.pagesCount - 2)
            pages.push('…')
        pages.push(props.pagesCount.toString())

    } else {
        for (let i = 1; i <= props.pagesCount; i++)
            pages.push(i.toString());
    }
    const navigationPages = <div className={s.usersPage}>
        &#9642;
        {pages.map((p) => {
            if (p === '…') return <span key={'…'}> {p} &#9642;</span>
            if (p == props.page) return <span key={p}> <b>{p}</b> &#9642;</span>
            return <span key={p}> <Link to={ "/" + props.pageName + "/" + p} linkName={p}/> &#9642;</span>
        })}
    </div>

    return (<> {navigationPages}
               {props.children}
               {navigationPages}
    </>)

}

export default withRouter(Pages)