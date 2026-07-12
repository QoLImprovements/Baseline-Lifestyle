/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-bar",
  "description": "Nutrition bars",
  "id": "usda-fndds-2708127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Nutrition bar or meal replacement bar, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 284.0,
    "carbs_g": 55.2,
    "energy_kcal": 386.0,
    "fat_g": 9.94,
    "fibre_g": 4.7,
    "folate_ug": 139.0,
    "iron_mg": 5.11,
    "magnesium_mg": 114.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 297.0,
    "potassium_mg": 331.0,
    "protein_g": 22.4,
    "salt_g": 0.8,
    "sat_fat_g": 2.98,
    "sodium_mg": 320.0,
    "sugar_g": 29.3,
    "vitamin_a_ug": 526.0,
    "vitamin_c_mg": 104.0,
    "vitamin_e_mg": 12.1,
    "vitamin_k_ug": 19.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708127",
  "state": "Unspecified",
  "subcategory": "Nutrition bars",
  "tags": [
    "nutrition-bars",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
