const Tennis = require("./tennis");

let tennis;
describe("Tennis Game", () => {
  beforeEach(() => {
    tennis = new Tennis("Harpreet","Miki");
  });
  test("love all", () => {
    scoreShouldBe("love all");
  });
  test("fifteen love", () => {
    tennis.firstPlayerScore(1);
    scoreShouldBe("fifteen love");
  });
  test("thirty love", () => {
    tennis.firstPlayerScore(2);
    scoreShouldBe("thirty love");
  });
  test("forty love", () => {
    tennis.firstPlayerScore(3);
    scoreShouldBe("forty love");
  });
  test("love fifteen", () => {
    tennis.secondPlayerScore(1);
    scoreShouldBe("love fifteen");
  });
  test("love thirty", () => {
    tennis.secondPlayerScore(2);
    scoreShouldBe("love thirty");
  });
  test("fifteen all", () => {
    tennis.secondPlayerScore(1);
    tennis.firstPlayerScore(1);
    scoreShouldBe("fifteen all");
  });
  test("thirty all", () => {
    tennis.secondPlayerScore(2);
    tennis.firstPlayerScore(2);
    scoreShouldBe("thirty all");
  });
  test("forty thirty", () => {
    tennis.secondPlayerScore(2);
    tennis.firstPlayerScore(3);
    scoreShouldBe("forty thirty");
  });
  test("forty fifteen", () => {
    tennis.secondPlayerScore(1);
    tennis.firstPlayerScore(4);
    scoreShouldBe("forty fifteen");
  });
  test("deuce", () => {
    tennis.secondPlayerScore(3)
    tennis.firstPlayerScore(3)
    scoreShouldBe("deuce");
  });
   test("Harpreet Adv", () => {
     tennis.firstPlayerScore(4);
     tennis.secondPlayerScore(3);
     scoreShouldBe("Harpreet Adv");
   });
  test("Miki Adv", () => {
    tennis.firstPlayerScore(3);
    tennis.secondPlayerScore(4);
    scoreShouldBe("Miki Adv");
  });
  test("Miki Win", () => {
    tennis.firstPlayerScore(2)
    tennis.secondPlayerScore(4);
    scoreShouldBe("Miki Win");
  });
});

function scoreShouldBe(expected) {
  expect(tennis.score()).toBe(expected);
}