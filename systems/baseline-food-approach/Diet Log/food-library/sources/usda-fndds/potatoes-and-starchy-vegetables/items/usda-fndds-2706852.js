/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706852",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 6.78,
    "energy_kcal": 124.0,
    "fat_g": 6.87,
    "fibre_g": 1.3,
    "folate_ug": 23.0,
    "iron_mg": 0.4,
    "magnesium_mg": 25.0,
    "omega3_g": 0.104,
    "phosphorus_mg": 137.0,
    "potassium_mg": 157.0,
    "protein_g": 9.25,
    "salt_g": 0.1025,
    "sat_fat_g": 1.03,
    "sodium_mg": 41.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706852",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
