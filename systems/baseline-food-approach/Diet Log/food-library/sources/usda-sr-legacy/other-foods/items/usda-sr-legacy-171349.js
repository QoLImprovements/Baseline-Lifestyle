/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171349",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "jar-gerber",
      "kind": "unit",
      "label": "jar Gerber"
    }
  ],
  "name": "Babyfood, peaches, dices, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 11.8,
    "energy_kcal": 213.0,
    "fat_g": 0.2,
    "fibre_g": 0.8,
    "folate_ug": 5.0,
    "iron_mg": 0.2,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 83.0,
    "protein_g": 0.5,
    "salt_g": 0.0225,
    "sat_fat_g": 0.016,
    "sodium_mg": 9.0,
    "sugar_g": 9.49,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 31.3,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171349",
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
