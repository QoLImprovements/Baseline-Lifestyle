/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-174783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bag",
      "kind": "unit",
      "label": "Bag"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Snacks, sweet potato chips, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 56.8,
    "energy_kcal": 2220.0,
    "fat_g": 32.4,
    "fibre_g": 8.8,
    "folate_ug": 37.0,
    "iron_mg": 2.12,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 925.0,
    "protein_g": 2.94,
    "salt_g": 0.0875,
    "sat_fat_g": 2.94,
    "sodium_mg": 35.0,
    "sugar_g": 8.82,
    "vitamin_a_ug": 1180.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.82,
    "vitamin_k_ug": 24.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174783",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
