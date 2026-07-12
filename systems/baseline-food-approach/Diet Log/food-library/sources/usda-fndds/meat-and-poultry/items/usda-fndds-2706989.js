/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706989",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    }
  ],
  "name": "Chicken deli sandwich or sub, with cheese, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 245.0,
    "carbs_g": 20.9,
    "energy_kcal": 208.0,
    "fat_g": 7.23,
    "fibre_g": 0.9,
    "folate_ug": 48.0,
    "iron_mg": 1.53,
    "magnesium_mg": 27.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 259.0,
    "potassium_mg": 231.0,
    "protein_g": 14.9,
    "salt_g": 2.0175,
    "sat_fat_g": 3.46,
    "sodium_mg": 807.0,
    "sugar_g": 2.86,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706989",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
