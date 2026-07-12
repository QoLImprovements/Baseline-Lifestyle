/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 187.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sausage and vegetables, excluding carrots, broccoli, and dark-green leafy; no potatoes, tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 6.94,
    "energy_kcal": 120.0,
    "fat_g": 8.34,
    "fibre_g": 1.6,
    "folate_ug": 14.0,
    "iron_mg": 0.92,
    "magnesium_mg": 18.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 65.0,
    "potassium_mg": 285.0,
    "protein_g": 5.62,
    "salt_g": 1.6625,
    "sat_fat_g": 2.35,
    "sodium_mg": 665.0,
    "sugar_g": 2.74,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706775",
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
