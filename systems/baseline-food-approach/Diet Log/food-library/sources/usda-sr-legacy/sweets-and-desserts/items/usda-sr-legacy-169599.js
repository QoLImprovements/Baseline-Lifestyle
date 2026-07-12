/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-1-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169599",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "package-1-oz",
      "kind": "unit",
      "label": "package (1 oz)"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "envelope-1-tbsp",
      "kind": "unit",
      "label": "envelope (1 tbsp)"
    }
  ],
  "name": "Gelatins, dry powder, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 0.0,
    "energy_kcal": 335.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 1.11,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 16.0,
    "protein_g": 85.6,
    "salt_g": 0.49,
    "sat_fat_g": 0.07,
    "sodium_mg": 196.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169599",
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
