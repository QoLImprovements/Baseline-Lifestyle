/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 14.8,
    "energy_kcal": 132.0,
    "fat_g": 5.7,
    "fibre_g": 1.7,
    "folate_ug": 14.0,
    "iron_mg": 0.45,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 289.0,
    "protein_g": 6.21,
    "salt_g": 0.89,
    "sat_fat_g": 0.902,
    "sodium_mg": 356.0,
    "sugar_g": 1.11,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706668",
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
