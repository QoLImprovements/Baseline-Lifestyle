/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "jar-gerber",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "jar-gerber",
      "kind": "unit",
      "label": "jar Gerber"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, pears, dices, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 13.6,
    "energy_kcal": 57.0,
    "fat_g": 0.1,
    "fibre_g": 1.2,
    "folate_ug": 1.0,
    "iron_mg": 0.2,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 51.0,
    "protein_g": 0.3,
    "salt_g": 0.015,
    "sat_fat_g": 0.01,
    "sodium_mg": 6.0,
    "sugar_g": 8.66,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 31.3,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171342",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
