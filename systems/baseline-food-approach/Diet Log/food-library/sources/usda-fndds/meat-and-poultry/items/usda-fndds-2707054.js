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
  "id": "usda-fndds-2707054",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Italian sausage sandwich on wheat",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 21.4,
    "energy_kcal": 293.0,
    "fat_g": 16.3,
    "fibre_g": 2.4,
    "folate_ug": 32.0,
    "iron_mg": 2.12,
    "magnesium_mg": 36.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 155.0,
    "potassium_mg": 256.0,
    "protein_g": 15.2,
    "salt_g": 1.5525,
    "sat_fat_g": 5.4,
    "sodium_mg": 621.0,
    "sugar_g": 3.12,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707054",
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
