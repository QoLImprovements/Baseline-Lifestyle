/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 6.35,
    "energy_kcal": 120.0,
    "fat_g": 7.81,
    "fibre_g": 1.5,
    "folate_ug": 15.0,
    "iron_mg": 0.79,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 259.0,
    "protein_g": 7.28,
    "salt_g": 0.915,
    "sat_fat_g": 1.22,
    "sodium_mg": 366.0,
    "sugar_g": 2.38,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706793",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
