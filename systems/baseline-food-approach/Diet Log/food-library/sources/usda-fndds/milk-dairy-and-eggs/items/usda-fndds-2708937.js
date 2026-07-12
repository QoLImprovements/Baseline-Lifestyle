/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or pasta salad, made with light Italian dressing",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 20.6,
    "energy_kcal": 116.0,
    "fat_g": 2.0,
    "fibre_g": 1.6,
    "folate_ug": 49.0,
    "iron_mg": 1.17,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 102.0,
    "protein_g": 3.68,
    "salt_g": 0.54,
    "sat_fat_g": 0.332,
    "sodium_mg": 216.0,
    "sugar_g": 2.19,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708937",
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
