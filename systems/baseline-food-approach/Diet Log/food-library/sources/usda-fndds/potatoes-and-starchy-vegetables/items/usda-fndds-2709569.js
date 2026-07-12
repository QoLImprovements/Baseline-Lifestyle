/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2709569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "10-chips",
      "kind": "unit",
      "label": "10 chips"
    }
  ],
  "name": "Taro chips",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 68.1,
    "energy_kcal": 498.0,
    "fat_g": 24.9,
    "fibre_g": 7.2,
    "folate_ug": 20.0,
    "iron_mg": 1.2,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 755.0,
    "protein_g": 2.3,
    "salt_g": 0.855,
    "sat_fat_g": 6.43,
    "sodium_mg": 342.0,
    "sugar_g": 3.82,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 11.3,
    "vitamin_k_ug": 18.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709569",
  "state": "Unspecified",
  "subcategory": "Tortilla, corn, other chips",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "tortilla-corn-other-chips",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
