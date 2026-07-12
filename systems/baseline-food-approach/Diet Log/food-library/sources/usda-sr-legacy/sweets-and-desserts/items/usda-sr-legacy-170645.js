/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "packet-0-5-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-170645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "packet-0-5-oz",
      "kind": "unit",
      "label": "packet (0.5 oz)"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Jams and preserves, apricot",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 64.4,
    "energy_kcal": 242.0,
    "fat_g": 0.2,
    "fibre_g": 0.3,
    "folate_ug": 1.0,
    "iron_mg": 0.49,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 77.0,
    "protein_g": 0.7,
    "salt_g": 0.1,
    "sat_fat_g": 0.01,
    "sodium_mg": 40.0,
    "sugar_g": 43.4,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170645",
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
