/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "each-burrito",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170734",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "each-burrito",
      "kind": "unit",
      "label": "each burrito"
    }
  ],
  "name": "TACO BELL, Bean Burrito",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 31.2,
    "energy_kcal": 209.0,
    "fat_g": 6.05,
    "fibre_g": 4.2,
    "folate_ug": 50.0,
    "iron_mg": 2.37,
    "magnesium_mg": 34.0,
    "omega3_g": 0.342,
    "phosphorus_mg": 163.0,
    "potassium_mg": 261.0,
    "protein_g": 7.35,
    "salt_g": 1.4075,
    "sat_fat_g": 2.31,
    "sodium_mg": 563.0,
    "sugar_g": 1.73,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170734",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
