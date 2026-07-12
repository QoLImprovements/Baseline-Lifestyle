/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-2-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-167576",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    }
  ],
  "name": "Ice creams, vanilla, light, soft-serve",
  "nutritionPerBasis": {
    "calcium_mg": 157.0,
    "carbs_g": 21.8,
    "energy_kcal": 527.0,
    "fat_g": 2.6,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.06,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 221.0,
    "protein_g": 4.9,
    "salt_g": 0.175,
    "sat_fat_g": 1.63,
    "sodium_mg": 70.0,
    "sugar_g": 18.7,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167576",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
