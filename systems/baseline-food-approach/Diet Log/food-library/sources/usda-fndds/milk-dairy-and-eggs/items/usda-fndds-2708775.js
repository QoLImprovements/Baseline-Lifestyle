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
  "id": "usda-fndds-2708775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "1-manicotti",
      "kind": "unit",
      "label": "1 manicotti"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Manicotti, cheese-filled, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 203.0,
    "carbs_g": 20.4,
    "energy_kcal": 207.0,
    "fat_g": 9.3,
    "fibre_g": 0.6,
    "folate_ug": 33.0,
    "iron_mg": 1.48,
    "magnesium_mg": 19.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 187.0,
    "potassium_mg": 156.0,
    "protein_g": 10.4,
    "salt_g": 1.1075,
    "sat_fat_g": 5.01,
    "sodium_mg": 443.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 104.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708775",
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
