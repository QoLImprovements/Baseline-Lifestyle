/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "bag-8-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-169677",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "bag-8-oz",
      "kind": "unit",
      "label": "bag (8 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "22-chips",
      "kind": "unit",
      "label": "22 chips"
    }
  ],
  "name": "Snacks, potato chips, plain, salted",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 53.8,
    "energy_kcal": 532.0,
    "fat_g": 34.0,
    "fibre_g": 3.1,
    "folate_ug": 29.0,
    "iron_mg": 1.28,
    "magnesium_mg": 63.0,
    "omega3_g": 0.341,
    "phosphorus_mg": 153.0,
    "potassium_mg": 1200.0,
    "protein_g": 6.39,
    "salt_g": 1.3175,
    "sat_fat_g": 3.4,
    "sodium_mg": 527.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.6,
    "vitamin_e_mg": 10.4,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169677",
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
