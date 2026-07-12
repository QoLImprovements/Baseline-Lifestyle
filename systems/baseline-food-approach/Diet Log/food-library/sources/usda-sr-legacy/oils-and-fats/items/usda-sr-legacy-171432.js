/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tablespoon-1-nlea-serving",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171432",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon-1-nlea-serving",
      "kind": "unit",
      "label": "tablespoon (1 NLEA serving)"
    }
  ],
  "name": "Margarine, 80% fat, tub, CANOLA HARVEST Soft Spread (canola, palm and palm kernel oils)",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 1.39,
    "energy_kcal": 730.0,
    "fat_g": 80.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 6.188,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.41,
    "salt_g": 1.785,
    "sat_fat_g": 11.6,
    "sodium_mg": 714.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 26.6,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171432",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
