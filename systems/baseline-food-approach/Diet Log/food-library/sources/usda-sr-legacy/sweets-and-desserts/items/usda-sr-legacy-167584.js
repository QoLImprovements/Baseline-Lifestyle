/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-4-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-167584",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "serving-1-4-cup",
      "kind": "unit",
      "label": "serving 1/4 cup"
    }
  ],
  "name": "Syrups, table blends, pancake, with butter",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 72.4,
    "energy_kcal": 1220.0,
    "fat_g": 0.09,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.09,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 3.0,
    "protein_g": 0.0,
    "salt_g": 0.7175,
    "sat_fat_g": 0.0,
    "sodium_mg": 287.0,
    "sugar_g": 72.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167584",
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
