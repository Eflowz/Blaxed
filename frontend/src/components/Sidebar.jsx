import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = ({ handleFilterChange }) => {
  const [isOpen, setIsOpen] = useState({
    featured: true,
    subCategories: false,
    brands: false,
    potencyCBD: false,
    potencyTHC: false,
    effects: false,
    strainType: false,
    weight: false,
  });

  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="h-full overflow-y-auto p-4 lg:p-0">
      {/* Featured Section */}
      <div className="border rounded-md p-4">
        <div
          className="font-semibold flex justify-between cursor-pointer"
          onClick={() => toggleDropdown("featured")}
        >
          Featured{" "}
          <span
            className={`transition-transform duration-200 ease-in-out ${
              isOpen.featured ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen.featured && (
          <ul className="pl-4 space-y-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("featured", "Staff Picks")}
                />{" "}
                Staff Picks
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("featured", "Specials")}
                />{" "}
                Specials
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Sub Categories Section */}
      <div className="border rounded-md p-4">
        <div
          className="font-semibold flex justify-between cursor-pointer"
          onClick={() => toggleDropdown("subCategories")}
        >
          Sub Categories{" "}
          <span
            className={`transition-transform duration-200 ease-in-out ${
              isOpen.subCategories ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen.subCategories && (
          <ul className="pl-4 space-y-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("subCategories", "Default")}
                />{" "}
                Default
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("subCategories", "Small Buds")}
                />{" "}
                Small Buds
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("subCategories", "Pre Ground")}
                />{" "}
                Pre Ground
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("subCategories", "Infused Bud")}
                />{" "}
                Infused Bud
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Brands Section */}
      <div className="border rounded-md p-4">
        <div
          className="font-semibold flex justify-between cursor-pointer"
          onClick={() => toggleDropdown("brands")}
        >
          Brands{" "}
          <span
            className={`transition-transform duration-200 ease-in-out ${
              isOpen.brands ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen.brands && (
          <ul className="pl-4 space-y-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("brands", "Brand A")}
                />{" "}
                Brand A
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("brands", "Brand B")}
                />{" "}
                Brand B
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Potency: CBD Section */}
      <div className="border rounded-md p-4">
        <div
          className="font-semibold flex justify-between cursor-pointer"
          onClick={() => toggleDropdown("potencyCBD")}
        >
          Potency : CBD{" "}
          <span
            className={`transition-transform duration-200 ease-in-out ${
              isOpen.potencyCBD ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen.potencyCBD && (
          <ul className="pl-4 space-y-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("potencyCBD", "Low")}
                />{" "}
                Low
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("potencyCBD", "Medium")}
                />{" "}
                Medium
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("potencyCBD", "High")}
                />{" "}
                High
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Potency: THC Section */}
      <div className="border rounded-md p-4">
        <div
          className="font-semibold flex justify-between cursor-pointer"
          onClick={() => toggleDropdown("potencyTHC")}
        >
          Potency : THC{" "}
          <span
            className={`transition-transform duration-200 ease-in-out ${
              isOpen.potencyTHC ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen.potencyTHC && (
          <ul className="pl-4 space-y-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("potencyTHC", "Low")}
                />{" "}
                Low
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("potencyTHC", "Medium")}
                />{" "}
                Medium
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("potencyTHC", "High")}
                />{" "}
                High
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Effects Section */}
      <div className="border rounded-md p-4">
        <div
          className="font-semibold flex justify-between cursor-pointer"
          onClick={() => toggleDropdown("effects")}
        >
          Effects{" "}
          <span
            className={`transition-transform duration-200 ease-in-out ${
              isOpen.effects ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen.effects && (
          <ul className="pl-4 space-y-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("effects", "Relaxed")}
                />{" "}
                Relaxed
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("effects", "Euphoric")}
                />{" "}
                Euphoric
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("effects", "Calming")}
                />{" "}
                Calming
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("effects", "Sleepy")}
                />{" "}
                Sleepy
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Strain Type Section */}
      <div className="border rounded-md p-4">
        <div
          className="font-semibold flex justify-between cursor-pointer"
          onClick={() => toggleDropdown("strainType")}
        >
          Strain Type{" "}
          <span
            className={`transition-transform duration-200 ease-in-out ${
              isOpen.strainType ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen.strainType && (
          <ul className="pl-4 space-y-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("strainType", "Sativa")}
                />{" "}
                Sativa
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("strainType", "Indica")}
                />{" "}
                Indica
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("strainType", "Hybrid")}
                />{" "}
                Hybrid
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Weight Section */}
      <div className="border rounded-md p-4">
        <div
          className="font-semibold flex justify-between cursor-pointer"
          onClick={() => toggleDropdown("weight")}
        >
          Weight{" "}
          <span
            className={`transition-transform duration-200 ease-in-out ${
              isOpen.weight ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen.weight && (
          <ul className="pl-4 space-y-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("weight", "1g")}
                />{" "}
                1g
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("weight", "3.5g")}
                />{" "}
                3.5g
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("weight", "7g")}
                />{" "}
                7g
              </label>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;