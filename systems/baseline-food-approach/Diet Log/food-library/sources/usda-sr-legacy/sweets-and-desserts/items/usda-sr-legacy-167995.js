/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "10-miniatures",
  "description": "Sweets",
  "id": "usda-sr-legacy-167995",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "10-miniatures",
      "kind": "unit",
      "label": "10 miniatures"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "cup-of-miniature",
      "kind": "unit",
      "label": "cup of miniature"
    },
    {
      "gramsPerUnit": 7.2,
      "key": "regular",
      "kind": "unit",
      "label": "regular"
    }
  ],
  "name": "Candies, marshmallows",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 81.3,
    "energy_kcal": 1330.0,
    "fat_g": 0.2,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.23,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 5.0,
    "protein_g": 1.8,
    "salt_g": 0.2,
    "sat_fat_g": 0.056,
    "sodium_mg": 80.0,
    "sugar_g": 57.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167995",
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
