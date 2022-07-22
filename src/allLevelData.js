import yodaBoard from "./componenets/images/wheresYoda.jpg";
import yodaIcon from "./componenets/images/yodaImage.jpg";
import waldoImage from "./componenets/images/waldoImage.png";
import waldoBoardFirst from "./componenets/images/wheresWaldoFirst.jpg";

export const levelData = {
  0: {
    level: 0,
    name: "Find Yoda",
    board: yodaBoard,
    characters: ["yoda"],
    charactersImage: {
      yoda: yodaIcon,
    },
    charactersPositions: {
      yoda: [79, 50],
    },
  },
  1: {
    level: 1,
    name: "Find Waldo 1",
    board: waldoBoardFirst,
    characters: ["waldo"],
    charactersImage: {
      waldo: waldoImage,
    },
    charactersPositions: {
      waldo: [50, 37],
    },
  },
};
