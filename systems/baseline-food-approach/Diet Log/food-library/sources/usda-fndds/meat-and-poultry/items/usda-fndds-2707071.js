/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    }
  ],
  "name": "Hot dog sandwich, turkey, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 18.2,
    "energy_kcal": 237.0,
    "fat_g": 12.7,
    "fibre_g": 1.9,
    "folate_ug": 30.0,
    "iron_mg": 2.05,
    "magnesium_mg": 28.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 164.0,
    "potassium_mg": 309.0,
    "protein_g": 11.9,
    "salt_g": 1.7975,
    "sat_fat_g": 2.89,
    "sodium_mg": 719.0,
    "sugar_g": 2.59,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707071",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
