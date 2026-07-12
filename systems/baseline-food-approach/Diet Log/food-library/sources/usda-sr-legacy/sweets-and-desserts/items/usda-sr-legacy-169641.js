/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-169641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "packet-0-5-oz",
      "kind": "unit",
      "label": "packet (0.5 oz)"
    }
  ],
  "name": "Jams and preserves",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 68.9,
    "energy_kcal": 1160.0,
    "fat_g": 0.07,
    "fibre_g": 1.1,
    "folate_ug": 11.0,
    "iron_mg": 0.49,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 77.0,
    "protein_g": 0.37,
    "salt_g": 0.08,
    "sat_fat_g": 0.01,
    "sodium_mg": 32.0,
    "sugar_g": 48.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169641",
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
