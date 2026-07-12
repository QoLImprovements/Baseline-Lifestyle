/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172317",
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
    }
  ],
  "name": "Babyfood, corn and sweet potatoes, strained",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 15.2,
    "energy_kcal": 68.0,
    "fat_g": 0.28,
    "fibre_g": 1.8,
    "folate_ug": 14.0,
    "iron_mg": 0.31,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 154.0,
    "protein_g": 1.26,
    "salt_g": 0.035,
    "sat_fat_g": 0.053,
    "sodium_mg": 14.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 126.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172317",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
