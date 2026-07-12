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
  "id": "usda-fndds-2708816",
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
  "name": "Macaroni or noodles with cheese, made from reduced fat packaged mix",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 17.3,
    "energy_kcal": 131.0,
    "fat_g": 4.82,
    "fibre_g": 0.6,
    "folate_ug": 31.0,
    "iron_mg": 0.44,
    "magnesium_mg": 11.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 121.0,
    "potassium_mg": 36.0,
    "protein_g": 4.57,
    "salt_g": 0.43,
    "sat_fat_g": 1.68,
    "sodium_mg": 172.0,
    "sugar_g": 2.11,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708816",
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
