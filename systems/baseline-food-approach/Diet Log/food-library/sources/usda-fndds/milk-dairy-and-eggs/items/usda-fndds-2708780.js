/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-shell-jumbo",
      "kind": "unit",
      "label": "1 shell (jumbo)"
    }
  ],
  "name": "Stuffed shells, cheese-filled, with tomato sauce, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 16.9,
    "energy_kcal": 146.0,
    "fat_g": 5.76,
    "fibre_g": 0.9,
    "folate_ug": 27.0,
    "iron_mg": 1.43,
    "magnesium_mg": 17.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 123.0,
    "potassium_mg": 192.0,
    "protein_g": 7.0,
    "salt_g": 1.055,
    "sat_fat_g": 2.99,
    "sodium_mg": 422.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708780",
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
