/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "each-taco",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "each-taco",
      "kind": "unit",
      "label": "each taco"
    }
  ],
  "name": "TACO BELL, Original Taco with beef, cheese and lettuce",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 19.8,
    "energy_kcal": 959.0,
    "fat_g": 12.7,
    "fibre_g": 3.9,
    "folate_ug": 19.0,
    "iron_mg": 1.19,
    "magnesium_mg": 32.0,
    "omega3_g": 0.177,
    "phosphorus_mg": 178.0,
    "potassium_mg": 209.0,
    "protein_g": 8.86,
    "salt_g": 0.9925,
    "sat_fat_g": 4.38,
    "sodium_mg": 397.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 15.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170332",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
