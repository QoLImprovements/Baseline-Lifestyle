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
  "id": "usda-sr-legacy-167962",
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
      "gramsPerUnit": 198.0,
      "key": "bag-7-oz",
      "kind": "unit",
      "label": "bag (7 oz)"
    }
  ],
  "name": "Snacks, potato chips, barbecue-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 55.9,
    "energy_kcal": 2040.0,
    "fat_g": 31.1,
    "fibre_g": 3.8,
    "folate_ug": 64.0,
    "iron_mg": 1.36,
    "magnesium_mg": 58.0,
    "omega3_g": 0.282,
    "phosphorus_mg": 145.0,
    "potassium_mg": 1190.0,
    "protein_g": 6.51,
    "salt_g": 1.3625,
    "sat_fat_g": 4.0,
    "sodium_mg": 545.0,
    "sugar_g": 5.47,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 62.4,
    "vitamin_e_mg": 4.42,
    "vitamin_k_ug": 16.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167962",
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
