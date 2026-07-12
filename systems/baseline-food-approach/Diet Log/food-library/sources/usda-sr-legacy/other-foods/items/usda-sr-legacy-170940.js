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
  "id": "usda-sr-legacy-170940",
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
    }
  ],
  "name": "Babyfood, peas, dices, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 10.3,
    "energy_kcal": 268.0,
    "fat_g": 0.8,
    "fibre_g": 3.9,
    "folate_ug": 35.0,
    "iron_mg": 1.0,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 81.0,
    "protein_g": 3.9,
    "salt_g": 0.12,
    "sat_fat_g": 0.14,
    "sodium_mg": 48.0,
    "sugar_g": 4.13,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 18.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170940",
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
