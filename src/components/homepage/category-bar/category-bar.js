import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {NavLink} from "react-router-dom";
import style from '../../../assets/style/scss/homepage/category-bar/categorybar.module.css'


const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function CategoryBar() {
    const classes = useStyles();

    return (
        <div className={style.main}>
            <span className={style.category}>Категорії</span>
            <div className={style.trees}>
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    multiSelect
                >
                    <div className={`${style.tree_item}`}>

                        <TreeItem nodeId="1" label="BMW">
                            <NavLink to={'/catalog/bmw'}><TreeItem nodeId="2" label="BMW"/></NavLink>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                        <TreeItem nodeId="5" label="Volvo">
                            <NavLink to={'/catalog/volvo'}><TreeItem nodeId="2" label="Volvo"/></NavLink>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                        <TreeItem nodeId="10" label="Mercedes Benz">
                            <NavLink to={'/catalog/mers'}><TreeItem nodeId="2" label="Mercedes Benz"/></NavLink>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                        <TreeItem nodeId="11" label="Ford">
                            <NavLink to={'/catalog/ford'}><TreeItem nodeId="2" label="Ford"/></NavLink>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                        <TreeItem nodeId="12" label="Volkswagen">
                            <NavLink to={'/catalog/volk'}><TreeItem nodeId="2" label="Volkswagen"/></NavLink>
                        </TreeItem>
                    </div>

                </TreeView>
            </div>
        </div>
    );
}
