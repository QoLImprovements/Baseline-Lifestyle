/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Macaroni and cheese",
  "id": "usda-fndds-2708813",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Macaroni or noodles with cheese, made from packaged mix",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 22.2,
    "energy_kcal": 179.0,
    "fat_g": 8.04,
    "fibre_g": 1.0,
    "folate_ug": 45.0,
    "iron_mg": 0.64,
    "magnesium_mg": 15.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 98.0,
    "potassium_mg": 49.0,
    "protein_g": 4.64,
    "salt_g": 0.4025,
    "sat_fat_g": 3.21,
    "sodium_mg": 161.0,
    "sugar_g": 3.45,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708813",
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
