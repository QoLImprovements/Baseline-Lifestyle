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
  "id": "usda-fndds-2708778",
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
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Manicotti, vegetable- and cheese-filled, with tomato sauce, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 15.9,
    "energy_kcal": 135.0,
    "fat_g": 5.18,
    "fibre_g": 1.0,
    "folate_ug": 33.0,
    "iron_mg": 1.42,
    "magnesium_mg": 25.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 110.0,
    "potassium_mg": 223.0,
    "protein_g": 6.43,
    "salt_g": 0.985,
    "sat_fat_g": 2.66,
    "sodium_mg": 394.0,
    "sugar_g": 1.62,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 49.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708778",
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
