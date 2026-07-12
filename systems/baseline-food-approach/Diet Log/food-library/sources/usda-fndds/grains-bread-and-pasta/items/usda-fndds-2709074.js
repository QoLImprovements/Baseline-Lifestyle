/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 149.0,
      "key": "1-2-pepper-with-filling",
      "kind": "unit",
      "label": "1/2 pepper with filling"
    }
  ],
  "name": "Stuffed pepper, with rice, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 12.0,
    "energy_kcal": 166.0,
    "fat_g": 11.3,
    "fibre_g": 0.7,
    "folate_ug": 31.0,
    "iron_mg": 0.54,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 72.0,
    "potassium_mg": 122.0,
    "protein_g": 3.75,
    "salt_g": 0.465,
    "sat_fat_g": 3.05,
    "sodium_mg": 186.0,
    "sugar_g": 1.51,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 45.4,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709074",
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
