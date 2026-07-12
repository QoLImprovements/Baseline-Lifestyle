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
  "id": "usda-fndds-2708824",
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
  "name": "Macaroni or noodles with cheese, whole grain",
  "nutritionPerBasis": {
    "calcium_mg": 173.0,
    "carbs_g": 22.7,
    "energy_kcal": 219.0,
    "fat_g": 10.9,
    "fibre_g": 2.2,
    "folate_ug": 17.0,
    "iron_mg": 1.28,
    "magnesium_mg": 38.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 181.0,
    "potassium_mg": 128.0,
    "protein_g": 8.77,
    "salt_g": 0.9,
    "sat_fat_g": 5.18,
    "sodium_mg": 360.0,
    "sugar_g": 2.53,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708824",
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
