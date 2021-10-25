import { Component, Input, OnInit, Output,EventEmitter, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CompetitionInterface } from 'src/app/core/models/competition-interface';
import { CompetitorsInterface } from 'src/app/core/models/competitors-interface';
import { PlayerInterface } from 'src/app/core/models/player-interface';
import { SportsInterface } from 'src/app/core/models/sports-interface';
import { DataServiceService } from 'src/app/core/services/data-service.service';

import { MessageService } from 'primeng/api';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-dropdown-fields',
  templateUrl: './dropdown-fields.component.html',
  styleUrls: ['./dropdown-fields.component.scss'],
  providers: [MessageService]
})



export class DropdownFieldsComponent implements OnInit {


  @Output() id = new EventEmitter<any>()
  @Output() catId = new EventEmitter<any>()
  @Output() competId = new EventEmitter<any>()
  @Output() competitorId = new EventEmitter<any>()

  @Output() newValue = new EventEmitter<any>()

  @Input() sports!:SportsInterface[]
  @Input() categories!:any[]
  @Input() competitions!:CompetitionInterface[]
  @Input() competitors!:CompetitorsInterface[]
  @Input() players!:PlayerInterface[]
  @Input() spinnerStatus!:boolean;
  @Input() errorStatus!:boolean;
  @Input() errorMsg!:string;
 
 
  selectedSport!:any;
  selectedCategory!:any
  selectedCompetition!:any
  selectedCompetitors!:any
  selectedPlayer!:any
  selectedId:any

  sportDataKeeper:any
  categoryDataKeeper:any
  competitionsDataKeeper:any
  competitorsDataKeeper:any
  playerDataKeeper:any
  // after we delete, we show previous data

  categoryFetched = false
  competitionFetched = false
  competitorsFetched = false
  playerFetched = false
  // used to enable or disable dropdown

 
  // Using theese to show popups
  data!:any
  dataHolder:any
  dataName!:any

  toShowName!:any
  nameValue:any

  toShowCountryName!:any
  show = false
  showCountry = false
  showSearch = false
  showPlayerSearch = false
  // 

  // Form init
  namesForm!:FormGroup

  // Side nav
  navOpen = false

  
  selectedForBigSearch!: string
  modalRef?: BsModalRef;

  constructor(
    private  dataService: DataServiceService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private messageService: MessageService){

      this.namesForm = this.fb.group({
        id: this.fb.control(''),
        arrayId: this.fb.control(''),
        name: this.fb.control(''),
        value: this.fb.control('', Validators.required)
      })
  }



  ngOnInit(): void {

  }

  // Theese 5 methods are used for values and dropdown changes

  emitSportId(id:any){
    this.spinnerStatus = true

    this.categoryFetched = false  //disable dropdowns
    this.competitionFetched = false
    this.playerFetched = false
    this.competitorsFetched = false

    this.showSearch = false       //theese two we show on competitions and competitios
    this.showPlayerSearch = false

    this.show = false        // corner info and input
    this.showCountry = false

    if(this.errorStatus){
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Successfuly deleted'});
    }

    if(id){
      this.id.emit(id)
      this.categoryFetched = true

      let text = 'Sport name: '
      this.toShowName = text
      this.value.patchValue(this.dataService.extractData(this.sports, this.selectedSport).name)
      this.show = true

      // We change this data if dropdowns change
      this.dataName = 'sourceSports'
      this.data = {
        data: this.dataService.extractData(this.sports, this.selectedSport).sourceSports,
        id: this.dataService.extractData(this.sports, this.selectedSport).id,
        name: this.dataService.extractData(this.sports, this.selectedSport).name
      } 

      this.sportDataKeeper = this.data

      // console.log(this.data)

      this.selectedId = this.selectedSport

      
      this.name.patchValue('sports')
      this.formId.patchValue(this.selectedSport)
      this.arrayId.patchValue(this.dataService.findIndexById(this.sports, this.selectedSport))
    
    }
  }

  emitCategoryId(id:any){
    // this.players = []
    // this.competitors = []
    // this.competitions = []
    this.competitionFetched = false
    this.playerFetched = false
    this.competitorsFetched = false
    this.showSearch = false
    this.showPlayerSearch = false

    if(id){
      console.log(id)
      this.catId.emit(id)
      this.competitionFetched = true
     
      let text = 'Category name: '
      this.toShowName = text
      this.value.patchValue(this.dataService.extractData(this.categories, this.selectedCategory).name) 
      // console.log(this.extractData(this.categories, this.selectedCategory))

      this.toShowCountryName = this.dataService.extractData(this.categories, this.selectedCategory).name
      // console.log(this.toShowCountryName)
      this.showCountry = true

      this.data = {}
      this.data = {
        data: this.dataService.extractData(this.categories, this.selectedCategory).sourceCategories,
        id: this.dataService.extractData(this.categories, this.selectedCategory).id,
        name: this.dataService.extractData(this.categories, this.selectedCategory).name
      }

      this.categoryDataKeeper = this.data

      this.selectedId = this.selectedCategory

      this.name.patchValue('categories')
      this.formId.patchValue(this.selectedCategory)
      this.arrayId.patchValue(this.dataService.findIndexById(this.categories, this.selectedCategory))

     
    }
  }

  emitCompetitionId(id:any){
    // this.players = []
    // this.competitors = []
    this.playerFetched = false
    this.competitorsFetched = false
    this.showSearch = true
    this.showPlayerSearch = false

    if(id){
      this.competId.emit(id)
      this.competitorsFetched = true

      let text = 'Competition name: '
      this.toShowName = text
      this.value.patchValue(this.dataService.extractData(this.competitions, this.selectedCompetition).name)
      // console.log(this.extractData(this.competitions, this.selectedCompetition))

      this.data = {}
      this.data = {
        data: this.dataService.extractData(this.competitions, this.selectedCompetition).sourceCompetitions,
        id: this.dataService.extractData(this.competitions, this.selectedCompetition).id,
        name: this.dataService.extractData(this.competitions, this.selectedCompetition).name
      }

      this.competitionsDataKeeper = this.data

      this.selectedId = this.selectedCompetition

      this.name.patchValue('competitions')
      this.formId.patchValue(this.selectedCompetition)
      this.arrayId.patchValue(this.dataService.findIndexById(this.competitions, this.selectedCompetition))
   }
  }

  emitCompetitorId(id:any){
    // this.players = []
    this.playerFetched = false
    this.showSearch = false
    this.showPlayerSearch = true

    if(id){
      this.competitorId.emit(id)
      this.playerFetched = true

      let text = 'Competitor name: '
      this.toShowName = text
      this.value.patchValue(this.dataService.extractData(this.competitors, this.selectedCompetitors).name)
      // console.log(this.extractData(this.competitors, this.selectedCompetitors))

      this.data = {}
      this.data = {
        data: this.dataService.extractData(this.competitors, this.selectedCompetitors).sourceCompetitors,
        id: this.dataService.extractData(this.competitors, this.selectedCompetitors).id,
        name:this.dataService.extractData(this.competitors, this.selectedCompetitors).name
      }

      this.competitorsDataKeeper = this.data

      this.selectedId = this.selectedCompetitors

      this.name.patchValue('competitors')
      this.formId.patchValue(this.selectedCompetitors)
      this.arrayId.patchValue(this.dataService.findIndexById(this.competitors, this.selectedCompetitors))
    }
  }

  selectPlayer(){

    this.showSearch = true
    this.showPlayerSearch = false

    let text = 'Player name: '
    this.toShowName = text 
    this.value.patchValue(this.dataService.extractData(this.players, this.selectedPlayer).name)

    this.data = {}
    this.data = {
      data: this.dataService.extractData(this.players, this.selectedPlayer).sourcePlayers,
      id: this.dataService.extractData(this.players, this.selectedPlayer).id,
      name: this.dataService.extractData(this.players, this.selectedPlayer).name
    }

    this.playerDataKeeper = this.data

    this.selectedId = this.selectedPlayer

    this.name.patchValue('players')
    this.formId.patchValue(this.selectedPlayer)
    this.arrayId.patchValue(this.dataService.findIndexById(this.players, this.selectedPlayer))
  }

  // Change name and delete

  getNewValue(){

    if(this.value.value !== ''){

      // let holder = this.sports.findIndex(t => t.id === this.selectedSport)
      // this.sports[holder].name = value

      console.log(this.namesForm.value)
      this.newValue.emit(this.namesForm.value)

      this.modalRef?.hide()
    

      
      if(this.name.value === 'sports'){
        this.sports = [...this.sports]
      }

      if(this.name.value === 'categories'){
        this.categories = [...this.categories]
        this.toShowCountryName = this.value.value
      }

      if(this.name.value === 'competitions'){
         this.competitions = [...this.competitions]
      }
      
      if(this.name.value === 'competitors'){
         this.competitors = [...this.competitors]
      }

      if(this.name.value === 'players'){
        this.players = [...this.players]
      }

    }

    // console.log(val)
  }

  deleteValue(){
    

    let name = this.value.value
    let id = this.formId.value
    let type = this.name.value
    
    console.log(this.dataService.findIndexById(this.sports, this.selectedSport));
    console.log();

    // console.log(this.dataService.findIndexById(this.competitors, this.selectedCompetitors));
    

    console.log(type)
    if(type === 'sports'){
      // console.log(id)
      // console.log(this.sports)
      this.sports = this.sports.filter(t => t.id !== id)
      // console.log(this.sports)
      this.namesForm.reset()
      this.categoryFetched = false
      this.data = []
      this.show = false

      this.addSingle()
    }

    if(type === 'categories'){
      this.categories = this.categories.filter(t => t.id !== id)
      this.namesForm.reset()
      this.competitionFetched = false
      this.data = this.sportDataKeeper
      this.toShowCountryName = ''

      this.showCountry = false

      // After deleting we want previous value shown
      this.value.patchValue(this.data.name)
      this.name.patchValue('sports');
      this.formId.patchValue(this.sportDataKeeper.id)
      this.selectedId = this.sportDataKeeper.id

      
      this.toShowName = "Sport name: " //change name in info 

      // We use this array ID for updating value so after we delete, previous value will be editable
      this.arrayId.patchValue(this.dataService.findIndexById(this.sports, this.selectedSport)) 
      
      // Toast
      this.addSingle()


    }

    if(type === 'competitions'){
      this.competitions = this.competitions.filter(t => t.id !== id)
      this.namesForm.reset()
      this.competitorsFetched = false
      this.data = this.categoryDataKeeper
      this.showSearch = false

      // After deleting we want previous value shown
      this.value.patchValue(this.data.name)
      this.name.patchValue('categories');
      this.formId.patchValue(this.categoryDataKeeper.id)
      this.selectedId = this.categoryDataKeeper.id

      this.toShowName = "Category name: "

          
      // We use this array ID for updating value so after we delete, previous value will be editable
      this.arrayId.patchValue(this.dataService.findIndexById(this.categories, this.selectedCategory)) 
      // Toast
      this.addSingle()
    }

    if(type === 'competitors'){
      this.competitors = this.competitors.filter(t => t.id !== id)
      this.namesForm.reset()
      this.playerFetched = false
      this.data = this.competitionsDataKeeper
      this.showPlayerSearch = false

      // After deleting we want previous value shown
      this.value.patchValue(this.data.name)
      this.name.patchValue('competitions');
      this.formId.patchValue(this.competitionsDataKeeper.id)
      this.selectedId = this.competitionsDataKeeper.id

      this.toShowName = "Competition name: "

      // We use this array ID for updating value so after we delete, previous value will be editable
      this.arrayId.patchValue(this.dataService.findIndexById(this.competitions, this.selectedCompetition)) 

      // Toast
      this.addSingle()
    }

    if(type === 'players'){
      this.players = this.players.filter(t => t.id !== id)
      this.namesForm.reset()
      this.data = this.competitorsDataKeeper

       // After deleting we want previous value shown
       this.value.patchValue(this.data.name)
       this.name.patchValue('competitors');
       this.formId.patchValue(this.competitorsDataKeeper.id)
       this.selectedId = this.competitorsDataKeeper.id

       this.toShowName = "Competitor name: "

      // We use this array ID for updating value so after we delete, previous value will be editable
      this.arrayId.patchValue(this.dataService.findIndexById(this.competitors, this.selectedCompetitors)) 
 
       // Toast
       this.addSingle()
    }

    
  }

  // Modal..
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  // Get form values

  get value(){
    return this.namesForm.get('value') as FormControl
  }
  
  get name(){
    return this.namesForm.get('name') as FormControl
  }

  get formId(){
    return this.namesForm.get('id') as FormControl
  }

  get arrayId(){
    return this.namesForm.get('arrayId') as FormControl;
  }

 

  // Alert on delete
  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Successfuly deleted'});
  }


  // Method for copy to clipboard 
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.messageService.add({severity:'info', summary:'Service Message', detail:'Successfuly copied ID'});
  }

  // Mobile

  open(){
    this.navOpen = !this.navOpen
    console.log(this.navOpen)
  }

}
