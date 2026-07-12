/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-manicotti",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-manicotti",
      "kind": "unit",
      "label": "1 manicotti"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Manicotti, cheese-filled, with tomato sauce, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 16.2,
    "energy_kcal": 153.0,
    "fat_g": 6.59,
    "fibre_g": 0.9,
    "folate_ug": 26.0,
    "iron_mg": 1.33,
    "magnesium_mg": 18.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 139.0,
    "potassium_mg": 193.0,
    "protein_g": 7.63,
    "salt_g": 1.09,
    "sat_fat_g": 3.52,
    "sodium_mg": 436.0,
    "sugar_g": 1.65,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708776",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
