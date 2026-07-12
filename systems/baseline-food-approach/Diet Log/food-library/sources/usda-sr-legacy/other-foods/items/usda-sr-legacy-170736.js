/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170736",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 533.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "TACO BELL, Taco Salad",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 15.1,
    "energy_kcal": 170.0,
    "fat_g": 9.17,
    "fibre_g": 3.0,
    "folate_ug": 43.0,
    "iron_mg": 1.77,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 229.0,
    "protein_g": 6.69,
    "salt_g": 0.9075,
    "sat_fat_g": 2.98,
    "sodium_mg": 363.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 10.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170736",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
