import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Book from "../components/Book";

test("renders Book content", () => {
  const book = {
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
  };

  render(<Book book={book} />);

  screen.debug();

  const element = screen.getByText("Queenie");
  expect(element).toBeDefined();
});
