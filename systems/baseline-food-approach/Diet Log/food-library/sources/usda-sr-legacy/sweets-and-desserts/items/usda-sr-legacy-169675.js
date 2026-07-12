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
  "id": "usda-sr-legacy-169675",
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
    }
  ],
  "name": "Snacks, granola bars, soft, uncoated, chocolate chip, graham and marshmallow",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 70.8,
    "energy_kcal": 1790.0,
    "fat_g": 15.5,
    "fibre_g": 4.0,
    "folate_ug": 21.0,
    "iron_mg": 2.57,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 202.0,
    "potassium_mg": 275.0,
    "protein_g": 6.1,
    "salt_g": 0.79,
    "sat_fat_g": 9.18,
    "sodium_mg": 316.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169675",
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
