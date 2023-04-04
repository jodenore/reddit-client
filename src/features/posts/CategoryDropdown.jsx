import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import "animate.css";

const CategoryDropdown = ({ categories, categorySelector, categoryAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const category = useSelector(categorySelector);
  const dispatch = useDispatch();
  const setFirstLetterCapitalized = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <Menu as={"div"} className="transition dropdown dropdown-container">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn dropdown-btn-content"
      >
        <div>
          <div className="dropdown-btn-content_unique1">
            {setFirstLetterCapitalized(category)}
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="dropdown-menu ">
          {categories.map(({ categoryName }, index) => {
            return (
              <Menu.Item
                as="li"
                onClick={() => {
                  dispatch(categoryAction(categoryName));
                  setIsOpen(false);
                }}
                key={index}
                className="dropdown-item"
              >
                {setFirstLetterCapitalized(categoryName)}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CategoryDropdown;
