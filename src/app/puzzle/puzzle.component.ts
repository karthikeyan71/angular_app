import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
import * as $ from 'jquery';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  ini:number[] = [1,2,3,4,5,6,7,8,0];
  arr:number[] = [1,2,3,4,5,6,7,0,8];

  constructor() { }

  ngOnInit() {
    let arrer = this.arr;

    for(let i=8;i>=0;i--)
    {
      let ran = Math.floor(Math.random()*(i+1));
      let index = arrer[ran];
      arrer[ran] = arrer[i];
      arrer[i] = index;
      $('.spot'+i).attr("data",i);
      $('.spot'+i).html(index);

      if(index == 0)
      {
        $('.spot'+i).attr("data",i);
        $('.spot'+i).html(index);
        $('.spot'+i).addClass("nothing");
      }
    }

    // for(let i=0;i<9;i++)
    // {
    //   $('.spot'+i).html(arrer[i]);
    //   $('.spot'+i).attr("data",i);
    // }

    this.arr = arrer;
  }


  check(cool)
  {

    let initer = this.ini;

    for(let i=0;i<9;i++)
    {
      if(initer[i] != cool[i])
      {
        $(".success_msg1").css("display","none");
        break;
      }

      if(i==8)
      {
        $(".success_msg1").css("display","block");
      }

    }

  }

  assign(event)
  {
    let cool = this.arr;
    let store = parseInt($(event).attr("data"));
    // console.log(this.arr);

    let storer = 0;

    if(store%3 == 0)
    {

      storer = store+1;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("first_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        console.log(cool[store]);
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        console.log(temp);
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }
      storer = store-3;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("second_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }

      storer = store+3;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("third_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }

    }
    else if(store%3 == 1)
    {
      storer = store+1;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("first_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        console.log(cool[store]);
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }
      storer = store-1;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("first_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        console.log(cool[store]);
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }
      storer = store-3;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("second_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }

      storer = store+3;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("third_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }
    }
    else if(store%3 == 2)
    {
      storer = store-1;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("first_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        console.log(cool[store]);
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        console.log(temp);
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }
      storer = store-3;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("second_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }

      storer = store+3;
      if((storer<9 && storer>-1) && cool[storer] == 0)
      {
        console.log("third_case");
        let temp = cool[storer];
        cool[storer] = cool[store];
        $('.spot'+storer).html(cool[store]);
        $('.puzzle_container li span').removeClass("nothing");
        $('.spot'+store).addClass("nothing");
        cool[store] = temp;
        $('.spot'+store).html(temp);
        this.check(cool);
        return;
      }
    }
    else
    {
      console.log(store%3);
      console.log("either_case");
    }

    this.arr = cool;

    // console.log(event.attr("data"));
  }



}
