/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168063",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 283.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, Latino, arroz con leche (rice pudding)",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 24.9,
    "energy_kcal": 610.0,
    "fat_g": 3.69,
    "fibre_g": 0.5,
    "folate_ug": 0.0,
    "iron_mg": 0.23,
    "magnesium_mg": 11.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 83.0,
    "potassium_mg": 142.0,
    "protein_g": 3.2,
    "salt_g": 0.265,
    "sat_fat_g": 1.9,
    "sodium_mg": 106.0,
    "sugar_g": 15.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168063",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "restaurant-foods",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
