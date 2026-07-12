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
  "id": "usda-fndds-2708821",
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
  "name": "Macaroni or noodles with cheese and frankfurters or hot dogs",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 18.7,
    "energy_kcal": 209.0,
    "fat_g": 12.2,
    "fibre_g": 0.8,
    "folate_ug": 35.0,
    "iron_mg": 0.76,
    "magnesium_mg": 14.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 105.0,
    "potassium_mg": 106.0,
    "protein_g": 6.17,
    "salt_g": 0.7475,
    "sat_fat_g": 4.94,
    "sodium_mg": 299.0,
    "sugar_g": 3.08,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708821",
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
