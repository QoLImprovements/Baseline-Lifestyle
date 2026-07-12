/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-tomato-with-filling",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "1-tomato-with-filling",
      "kind": "unit",
      "label": "1 tomato with filling"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stuffed tomato, with rice, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 13.0,
    "energy_kcal": 77.0,
    "fat_g": 2.15,
    "fibre_g": 1.1,
    "folate_ug": 27.0,
    "iron_mg": 0.6,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 182.0,
    "protein_g": 1.59,
    "salt_g": 0.3075,
    "sat_fat_g": 0.309,
    "sodium_mg": 123.0,
    "sugar_g": 2.27,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 14.1,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709076",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
