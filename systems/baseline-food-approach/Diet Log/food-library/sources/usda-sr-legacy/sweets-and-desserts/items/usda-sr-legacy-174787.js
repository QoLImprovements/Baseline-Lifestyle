/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174787",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, LUNA BAR, NUTZ OVER CHOCOLATE",
  "nutritionPerBasis": {
    "calcium_mg": 886.0,
    "carbs_g": 52.5,
    "energy_kcal": 403.0,
    "fat_g": 12.2,
    "fibre_g": 4.3,
    "folate_ug": 1060.0,
    "iron_mg": 14.2,
    "magnesium_mg": 329.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 785.0,
    "potassium_mg": 412.0,
    "protein_g": 20.8,
    "salt_g": 0.965,
    "sat_fat_g": 5.52,
    "sodium_mg": 386.0,
    "sugar_g": 16.9,
    "vitamin_a_ug": 374.0,
    "vitamin_c_mg": 68.0,
    "vitamin_e_mg": 8.4,
    "vitamin_k_ug": 40.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174787",
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
