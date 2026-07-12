/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Macaroni and cheese",
  "id": "usda-fndds-2708820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or noodles with cheese and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 18.7,
    "energy_kcal": 148.0,
    "fat_g": 6.53,
    "fibre_g": 1.1,
    "folate_ug": 36.0,
    "iron_mg": 0.58,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 84.0,
    "potassium_mg": 90.0,
    "protein_g": 3.94,
    "salt_g": 0.3275,
    "sat_fat_g": 2.6,
    "sodium_mg": 131.0,
    "sugar_g": 3.35,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708820",
  "state": "Unspecified",
  "subcategory": "Macaroni and cheese",
  "tags": [
    "macaroni-and-cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
