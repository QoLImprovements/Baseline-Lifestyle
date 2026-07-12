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
  "id": "usda-sr-legacy-171387",
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
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant Formula, MEAD JOHNSON, ENFAMIL GENTLEASE, with iron, prepared from powder",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 7.6,
    "energy_kcal": 284.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.18,
    "magnesium_mg": 5.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 30.0,
    "potassium_mg": 71.0,
    "protein_g": 1.51,
    "salt_g": 0.06,
    "sat_fat_g": 1.5,
    "sodium_mg": 24.0,
    "sugar_g": 1.53,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171387",
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
