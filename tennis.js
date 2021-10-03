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
}
module.exports=Tennis;