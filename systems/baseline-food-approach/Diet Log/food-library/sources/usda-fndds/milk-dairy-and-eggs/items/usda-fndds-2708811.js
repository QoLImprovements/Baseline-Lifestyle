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
  "id": "usda-fndds-2708811",
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
  "name": "Macaroni or noodles with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 23.1,
    "energy_kcal": 223.0,
    "fat_g": 10.5,
    "fibre_g": 1.2,
    "folate_ug": 35.0,
    "iron_mg": 1.06,
    "magnesium_mg": 20.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 148.0,
    "potassium_mg": 103.0,
    "protein_g": 8.68,
    "salt_g": 0.895,
    "sat_fat_g": 5.15,
    "sodium_mg": 358.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708811",
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
