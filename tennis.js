class Tennis{
    constructor(firstPlayerName,secondPlayerName){
        this.firstPlayerName=firstPlayerName;
        this.secondPlayerName=secondPlayerName;
    }
   firstPlayerScoreTimes=0;
   secondPlayerScoreTimes=0;
   firstPlayerScore(times){
      this.firstPlayerScoreTimes = times
   }
   secondPlayerScore(times){
       this.secondPlayerScoreTimes = times
   }
    scoreLookup={
       0:"love", 
       1:"fifteen",
       2:"thirty",
       3:"forty",

   };
   score(){

       if(this.isScoreDifference()){

           if(this.isReadyForGamePoint()){
               if(this.isAdv()){
                   
                return this.advScore();
               }
               return this.winScore();

           }
         return this.lookupScore();
       }

       if(this.isDeuce()){
         return this.Deuce();
       }
       return this.sameScore();
       
   }
   winScore(){
       return `${this.advPlayer()} Win`;
   }
   isScoreDifference(){
       return this.secondPlayerScoreTimes !==this.firstPlayerScoreTimes;
   }
   isReadyForGamePoint(){
       return this.firstPlayerScoreTimes>3 ||this.secondPlayerScoreTimes>3;

   }

   isAdv(){
       return Math.abs(this.firstPlayerScoreTimes-this.secondPlayerScoreTimes)===1;
   }
   sameScore(){
       return `${this.scoreLookup[this.firstPlayerScoreTimes]} all`;
   }
   Deuce(){
       return "deuce";
   }
   
   isDeuce(){
       return this.firstPlayerScoreTimes>=3; 
   }

   lookupScore(){
       return `${this.scoreLookup[this.firstPlayerScoreTimes]} ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
   }

   advScore(){
       return `${this.advPlayer()} Adv`;
   }

   
   advPlayer(){
       return this.firstPlayerScoreTimes > this.secondPlayerScoreTimes ? this.firstPlayerName : this.secondPlayerName;
   }
}
module.exports=Tennis;