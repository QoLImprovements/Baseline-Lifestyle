/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "10-pieces",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "6-pieces",
      "kind": "unit",
      "label": "6 pieces"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "4-pieces",
      "kind": "unit",
      "label": "4 pieces"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "20-pieces",
      "kind": "unit",
      "label": "20 pieces"
    }
  ],
  "name": "Fast foods, chicken, breaded and fried, boneless pieces, plain",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 14.9,
    "energy_kcal": 307.0,
    "fat_g": 20.4,
    "fibre_g": 0.9,
    "folate_ug": 11.0,
    "iron_mg": 0.83,
    "magnesium_mg": 24.0,
    "omega3_g": 0.399,
    "phosphorus_mg": 272.0,
    "potassium_mg": 251.0,
    "protein_g": 15.9,
    "salt_g": 1.485,
    "sat_fat_g": 3.57,
    "sodium_mg": 594.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170718",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
