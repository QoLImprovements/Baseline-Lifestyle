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
  "id": "usda-sr-legacy-167575",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    }
  ],
  "name": "Ice creams, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 23.6,
    "energy_kcal": 207.0,
    "fat_g": 11.0,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.09,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 105.0,
    "potassium_mg": 199.0,
    "protein_g": 3.5,
    "salt_g": 0.2,
    "sat_fat_g": 6.79,
    "sodium_mg": 80.0,
    "sugar_g": 21.2,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167575",
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
