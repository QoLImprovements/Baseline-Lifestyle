/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-168835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 304.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Syrups, chocolate, fudge-type",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 62.9,
    "energy_kcal": 1460.0,
    "fat_g": 8.9,
    "fibre_g": 2.8,
    "folate_ug": 4.0,
    "iron_mg": 1.3,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 284.0,
    "protein_g": 4.6,
    "salt_g": 0.865,
    "sat_fat_g": 3.98,
    "sodium_mg": 346.0,
    "sugar_g": 34.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.63,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168835",
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
