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
  "id": "usda-sr-legacy-169593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cocoa, dry powder, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 57.9,
    "energy_kcal": 228.0,
    "fat_g": 13.7,
    "fibre_g": 37.0,
    "folate_ug": 32.0,
    "iron_mg": 13.9,
    "magnesium_mg": 499.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 734.0,
    "potassium_mg": 1520.0,
    "protein_g": 19.6,
    "salt_g": 0.0525,
    "sat_fat_g": 8.07,
    "sodium_mg": 21.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169593",
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
