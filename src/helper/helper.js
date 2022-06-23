import { v4 as uid } from "uuid";

export const data = [
  {
    id: uid(),
    img: "/images/img1.jpg",
    name: "multi-family home",
    price: "348887",
    size: "3693",
    lot: "0.68",
    address: "8726 old country, new york",
  },
  {
    id: uid(),
    img: "/images/img2.jpg",
    name: "single-family home",
    price: "595000",
    size: "2368",
    lot: "1",
    address: "14632 Tierra Port Ct, El Paso",
  },
  {
    id: uid(),
    img: "/images/img3.jpg",
    name: "Single-Family home",
    price: "173500",
    size: "1486",
    lot: "0.72",
    address: "4172 xyz abc, london",
  },
  {
    id: uid(),
    img: "/images/img1.jpg",
    name: "Single-Family house",
    price: "179950",
    size: "1864",
    lot: "0.43",
    address: "5541 abc xyz, paris",
  },
];

export const navlinks = [
  {
    id: uid(),
    text: "buy",
    redirect: "javascript:void(0)",
  },
  {
    id: uid(),
    text: "sell",
    redirect: "javascript:void(0)",
  },
  {
    id: uid(),
    text: "mortgage",
    redirect: "javascript:void(0)",
  },
  {
    id: uid(),
    text: "find realtors",
    redirect: "javascript:void(0)",
  },
  {
    id: uid(),
    text: "my home",
    redirect: "javascript:void(0)",
  },
  {
    id: uid(),
    text: "news & insights",
    redirect: "javascript:void(0)",
  },
];
