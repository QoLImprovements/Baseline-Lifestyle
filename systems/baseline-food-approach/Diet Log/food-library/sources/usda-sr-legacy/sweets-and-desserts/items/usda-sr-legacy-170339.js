/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "biscuit",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170339",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "KFC, biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 43.6,
    "energy_kcal": 358.0,
    "fat_g": 17.0,
    "fibre_g": 2.0,
    "folate_ug": 81.0,
    "iron_mg": 2.86,
    "magnesium_mg": 16.0,
    "omega3_g": 0.118,
    "phosphorus_mg": 538.0,
    "potassium_mg": 115.0,
    "protein_g": 7.5,
    "salt_g": 2.675,
    "sat_fat_g": 11.9,
    "sodium_mg": 1070.0,
    "sugar_g": 4.04,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170339",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
