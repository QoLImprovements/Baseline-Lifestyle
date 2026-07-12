/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-thick-slice",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2705880",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-thick-slice",
      "kind": "unit",
      "label": "1 thick slice"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-regular-thin-slice",
      "kind": "unit",
      "label": "1 regular/thin slice"
    }
  ],
  "name": "Ham, canned",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.49,
    "energy_kcal": 167.0,
    "fat_g": 8.43,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.07,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 221.0,
    "potassium_mg": 351.0,
    "protein_g": 20.9,
    "salt_g": 2.675,
    "sat_fat_g": 2.81,
    "sodium_mg": 1070.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705880",
  "state": "Canned",
  "subcategory": "Cold cuts and cured meats",
  "tags": [
    "canned",
    "cold-cuts-and-cured-meats",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
