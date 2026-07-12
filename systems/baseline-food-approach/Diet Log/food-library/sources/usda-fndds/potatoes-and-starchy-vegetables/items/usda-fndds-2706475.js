/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-package-prepared",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706475",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1341.0,
      "key": "1-package-prepared",
      "kind": "unit",
      "label": "1 package, prepared"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef and potatoes with cream sauce, white sauce or mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 8.66,
    "energy_kcal": 100.0,
    "fat_g": 3.79,
    "fibre_g": 0.7,
    "folate_ug": 4.0,
    "iron_mg": 0.77,
    "magnesium_mg": 11.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 97.0,
    "potassium_mg": 217.0,
    "protein_g": 8.04,
    "salt_g": 0.8425,
    "sat_fat_g": 1.03,
    "sodium_mg": 337.0,
    "sugar_g": 1.28,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 9.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706475",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
