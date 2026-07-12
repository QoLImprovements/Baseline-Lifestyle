/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-169674",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bar-1-oz",
      "kind": "unit",
      "label": "bar (1 oz)"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "bar-1-5-oz",
      "kind": "unit",
      "label": "bar (1.5 oz)"
    }
  ],
  "name": "Snacks, granola bars, soft, uncoated, chocolate chip",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 70.2,
    "energy_kcal": 1750.0,
    "fat_g": 16.6,
    "fibre_g": 3.8,
    "folate_ug": 16.0,
    "iron_mg": 2.19,
    "magnesium_mg": 64.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 176.0,
    "potassium_mg": 237.0,
    "protein_g": 5.65,
    "salt_g": 0.7275,
    "sat_fat_g": 6.06,
    "sodium_mg": 291.0,
    "sugar_g": 28.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169674",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
