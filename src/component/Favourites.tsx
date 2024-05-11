import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { FavouritesItems } from "./FavouritesItems";
import "../App.css"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const sportName = [
  { id: 1, name: "Cricket" },
  { id: 2, name: "football" },
  { id: 3, name: "hocky" },
  { id: 4, name: "vollybal" },
];

const teamName = [
  { id: 1, name: "CSK" },
  { id: 2, name: "MI" },
  { id: 3, name: "RR" },
  { id: 4, name: "KKR" },
];

export const Favourites = () => {
  const [sport, setSport] = useState(sportName[1]);
  const [team, setTeam] = useState(teamName[1]);

  return (
    <div className="md:h-full md:w-1/3 flex flex-col flex-row h-full w-full">
      <div className="mx-auto md:h-40 md:w-[80%] h-fit py-4 w-52 flex md:flex-col w-full md:justify-evenly ">
        <p className="md:w-[70%] md:mx-0 w-[33%] mx-2 h-7 font-bold text-xl flex items-center">
          Favourites
        </p>
        <div className="h-10 md:w-[70%] w-[33%] rounded-md">
          <Listbox value={sport} onChange={setSport}>
            <ListboxButton
              className={clsx(
                "relative block w-full rounded-lg bg-violet-500 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            >
              {sport.name}
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </ListboxButton>
            <Transition
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions
                anchor="bottom"
                className="w-[var(--button-width)] rounded-xl border border-white/5 bg-violet-500 mt-0.5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
              >
                {sportName.map((sport) => (
                  <ListboxOption
                    key={sport.name}
                    value={sport}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                  >
                    <CheckIcon className="invisible size-4 fill-white group-data-[sport]:visible" />
                    <div className="text-sm/6 text-white">{sport.name}</div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </Listbox>
        </div>
        <div className="h-10 md:w-[70%] md:mx-0 mx-2 w-[33%] rounded-md">
          <Listbox value={team} onChange={setTeam}>
            <ListboxButton
              className={clsx(
                "relative block w-full rounded-lg  bg-violet-500 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            >
              {team.name}
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </ListboxButton>
            <Transition
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions
                anchor="bottom"
                className="w-[var(--button-width)] rounded-xl border border-white/5 bg-violet-500 mt-0.5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
              >
                {teamName.map((teamName) => (
                  <ListboxOption
                    key={teamName.name}
                    value={teamName}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                  >
                    <CheckIcon className="invisible size-4 fill-white group-data-[team]:visible" />
                    <div className="text-sm/6 text-white">{teamName.name}</div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </Listbox>
        </div>
      </div>
      <div className="h-96 w-full flex max-[769px]:flex-wrap min-[769px]:flex-col gap-5 overflow-y-scroll scrollbar">
        <FavouritesItems />
        <FavouritesItems />
        <FavouritesItems />
        <FavouritesItems />
        <FavouritesItems />
        <FavouritesItems />
        <FavouritesItems />
        <FavouritesItems />
        <FavouritesItems />
        <FavouritesItems />

      </div>
    </div>
  );
};
