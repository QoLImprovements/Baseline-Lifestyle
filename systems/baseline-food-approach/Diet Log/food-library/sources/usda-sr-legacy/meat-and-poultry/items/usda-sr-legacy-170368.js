/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170368",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast Foods, grilled chicken filet sandwich, with lettuce, tomato and spread",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 16.8,
    "energy_kcal": 762.0,
    "fat_g": 4.57,
    "fibre_g": 0.9,
    "folate_ug": 39.0,
    "iron_mg": 1.58,
    "magnesium_mg": 23.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 142.0,
    "potassium_mg": 197.0,
    "protein_g": 17.3,
    "salt_g": 1.0675,
    "sat_fat_g": 0.949,
    "sodium_mg": 427.0,
    "sugar_g": 3.08,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170368",
  "state": "Grilled",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
