import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";

test("renders a list of books", () => {
  const books = [
    {
      id: "NhBmDwAAQBAJ",
      volumeInfo: {
        title: "Queenie",
        authors: ["Candice Carty-Williams"],
        description:
          "THE SUNDAY TIMES BESTSELLER SHORTLISTED FOR THE COSTA FIRST NOVEL AWARD LONGLISTED FOR THE WOMEN'S PRIZE FOR FICTION 'Hilarious, compelling, painful, enlightening, honest. I loved it' - Dolly Alderton 'Brilliant, timely, funny, heartbreaking' - Jojo Moyes 'A deliciously funny, characterful, topical and thrilling novel for our times' - Bernardine Evaristo, WINNER OF THE MAN BOOKER PRIZE Meet Queenie. She just can't cut a break. Well, apart from one from her long term boyfriend, Tom. That's just a break though. Definitely not a break up. Stuck between a boss who doesn't seem to see her, a family who don't seem to listen (if it's not Jesus or water rates, they're not interested), and trying to fit in two worlds that don't really understand her, it's no wonder she's struggling. She was named to be queen of everything. So why is she finding it so hard to rule her own life? A darkly comic and bitingly subversive take on life, love, race and family, Queenie will have you nodding in recognition, crying in solidarity and rooting for this unforgettable character every step of the way. Perfect for fans of Dolly Alderton, Sally Rooney, Diana Evans and Phoebe Waller-Bridge. 'This is an important, timely and disarming novel, thirst-quenching and long overdue: one that will be treasured by \"any type of black girl\" and hordes of other readers besides.' - Guardian ****** LONGLISTED FOR THE JHALAK PRIZE SHORTLISTED FOR WATERSTONES BOOK OF THE YEAR SHORTLISTED FOR FOYLES BOOK OF THE YEAR BLACKWELL'S DEBUT NOVEL OF THE YEAR NAMED ONE OF THE TIMES, GUARDIAN, SUNDAY TIMES, DAILY MAIL AND EVENING STANDARD'S BEST BOOKS OF 2019",
        imageLinks: {
          thumbnail:
            "http://books.google.com/books/content?id=NhBmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
      },
      saleInfo: {
        retailPrice: {
          amount: 0.99,
        },
      },
    },
    {
      id: "9j4JGEkCA5cC",
      volumeInfo: {
        title: "Ghana Must Go",
        authors: ["Taiye Selasi"],
        description:
          "A stunning novel, spanning generations and continents, Ghana Must Go by rising star Taiye Selasi is a tale of family drama and forgiveness, for fans of Zadie Smith and Chimamanda Ngozi Adichie. This is the story of a family -- of the simple, devastating ways in which families tear themselves apart, and of the incredible lengths to which a family will go to put itself back together. It is the story of one family, the Sais, whose good life crumbles in an evening; a Ghanaian father, Kweku Sai, who becomes a highly respected surgeon in the US only to be disillusioned by a grotesque injustice; his Nigerian wife, Fola, the beautiful homemaker abandoned in his wake; their eldest son, Olu, determined to reconstruct the life his father should have had; their twins, seductive Taiwo and acclaimed artist Kehinde, both brilliant but scarred and flailing; their youngest, Sadie, jealously in love with her celebrity best friend. All of them sent reeling on their disparate paths into the world. Until, one day, tragedy spins the Sais in a new direction. This is the story of a family: torn apart by lies, reunited by grief. A family absolved, ultimately, by that bitter but most tenuous bond: familial love. Ghana Must Go interweaves the stories of the Sais in a rich and moving drama of separation and reunion, spanning generations and cultures from West Africa to New England, London, New York and back again. It is a debut novel of blazing originality and startling power by a writer of extraordinary gifts. 'Ghana Must Go is both a fast moving story of one family's fortunes and an ecstatic exploration of the inner lives of its members. With her perfectly-pitched prose and flawless technique, Selasi does more than merely renew our sense of the African novel: she renews our sense of the novel, period. An astonishing debut' Teju Cole, author of Open City Taiye Selasi was born in London and raised in Massachusetts. She holds a B.A. in American Studies from Yale and an M.Phil. in International Relations from Oxford. \"The Sex Lives of African Girls\" (Granta, 2011), Selasi's fiction debut, appears in Best American Short Stories 2012. She lives in Rome.",
        imageLinks: {
          thumbnail:
            "http://books.google.com/books/content?id=9j4JGEkCA5cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        retailPrice: {
          amount: 2.99,
        },
      },
    },
  ];

  render(<BookList books={books} />);

  screen.debug();

  const element = screen.getByText("Ghana Must Go");
  expect(element).toBeDefined();
});
