import { Component, OnInit } from '@angular/core';
import { IconService } from '../../../../services/icon.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor(public icoSrv: IconService) { }

    ngOnInit() {
    }

    /*folderClick(e){
        let _td = e.path[1], _tr = e.path[2], _table = e.path[3].children
        let _ch0 = (_tr.dataset.branch == 0? "-end" : "")
        if (_tr.dataset.expand == 0 ){
        var _ch0r = "plus", _ch0a = "minus", _ch1r = "", _ch1a = "-open", _ex = 1
        }else{
        var _ch0r = "minus", _ch0a = "plus", _ch1r = "-open", _ch1a = "", _ex = 0
        }
        _tr.dataset.expand = _ex
        _td.children[0].classList.remove("ui-tree-icon-branch-" + _ch0r + _ch0)
        _td.children[0].classList.add("ui-tree-icon-branch-"+ _ch0a + _ch0)
        _td.children[1].classList.remove("ui-tree-icon-folder" + _ch1r)
        _td.children[1].classList.add("ui-tree-icon-folder" + _ch1a)

        for (let _i=0; _i<_table.length; _i++){
        if ( _table[_i].dataset.parent == _tr.id){
            if (_ex == 1) { _table[_i].classList.add("show") }
            else { _table[_i].classList.remove("show") }
        }
        }
    }*/

    folderClick(e:any){
        let _td = e.path[1], _tr = e.path[2], _table = e.path[3].children;
        let _ch0 = (_tr.dataset.branch == 0? "-end" : "");
        if (_tr.dataset.expand == 0 ){
            var _ch0r = "plus", _ch0a = "minus", _ch1r = "", _ch1a = "-open", _ex = 1;
        }else{
            var _ch0r = "minus", _ch0a = "plus", _ch1r = "-open", _ch1a = "", _ex = 0;
        }
        _tr.dataset.expand = _ex;
        _td.children[0].classList.remove("ui-tree-icon-branch-" + _ch0r + _ch0);
        _td.children[0].classList.add("ui-tree-icon-branch-"+ _ch0a + _ch0);
        _td.children[1].classList.remove("ui-tree-icon-folder" + _ch1r);
        _td.children[1].classList.add("ui-tree-icon-folder" + _ch1a);

        for (let _i=0; _i<_table.length; _i++){
            if ( _table[_i].dataset.parent == _tr.id){
                if (_ex == 1) { _table[_i].classList.add("show"); }
                else { _table[_i].classList.remove("show"); }
            }
        }
    }

    panelExpand(e:any){
        let _pan = e.path[2];
        let _panId = _pan.id;
        let _menuChild = e.path[3].children;
        let _panNro = _menuChild.length

        _pan.classList.add("active")
        _pan.children[1].classList.add("show")
        e.srcElement.classList.remove("expand")

        for (let _i=0; _i<_panNro; _i++){
            let _panChild = _menuChild[_i];
            if ( _panChild.id != _panId ) {
                _panChild.classList.remove("active")
                _panChild.children[0].children[1].classList.add("expand")
                _panChild.children[1].classList.remove("show")
            }
        }
    }
}