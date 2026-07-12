/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Reuben sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 16.4,
    "energy_kcal": 282.0,
    "fat_g": 19.4,
    "fibre_g": 2.2,
    "folate_ug": 32.0,
    "iron_mg": 1.69,
    "magnesium_mg": 21.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 131.0,
    "potassium_mg": 134.0,
    "protein_g": 10.0,
    "salt_g": 1.72,
    "sat_fat_g": 5.79,
    "sodium_mg": 688.0,
    "sugar_g": 3.48,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 17.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706952",
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
