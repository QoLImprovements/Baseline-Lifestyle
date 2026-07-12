/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706972",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Ham salad sandwich on wheat",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 17.0,
    "energy_kcal": 241.0,
    "fat_g": 13.4,
    "fibre_g": 2.1,
    "folate_ug": 32.0,
    "iron_mg": 1.44,
    "magnesium_mg": 28.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 140.0,
    "potassium_mg": 214.0,
    "protein_g": 12.6,
    "salt_g": 2.015,
    "sat_fat_g": 2.46,
    "sodium_mg": 806.0,
    "sugar_g": 3.11,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 31.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706972",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
