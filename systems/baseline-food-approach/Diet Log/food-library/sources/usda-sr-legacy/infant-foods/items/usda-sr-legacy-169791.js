/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.7,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant Formula, MEAD JOHNSON, ENFAMIL, Premium, Infant, powder",
  "nutritionPerBasis": {
    "calcium_mg": 390.0,
    "carbs_g": 57.0,
    "energy_kcal": 2130.0,
    "fat_g": 27.0,
    "fibre_g": 0.0,
    "folate_ug": 81.0,
    "iron_mg": 9.2,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 550.0,
    "protein_g": 10.8,
    "salt_g": 0.345,
    "sat_fat_g": 11.2,
    "sodium_mg": 138.0,
    "sugar_g": 57.0,
    "vitamin_a_ug": 458.0,
    "vitamin_c_mg": 62.0,
    "vitamin_e_mg": 6.9,
    "vitamin_k_ug": 46.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169791",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
