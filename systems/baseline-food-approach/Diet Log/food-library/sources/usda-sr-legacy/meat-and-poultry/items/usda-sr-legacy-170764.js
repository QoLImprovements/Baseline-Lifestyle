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
  "id": "usda-sr-legacy-170764",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "each-taco",
      "kind": "unit",
      "label": "each taco"
    }
  ],
  "name": "Fast foods, taco with chicken, lettuce and cheese, soft",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 19.7,
    "energy_kcal": 791.0,
    "fat_g": 6.35,
    "fibre_g": 1.2,
    "folate_ug": 53.0,
    "iron_mg": 1.59,
    "magnesium_mg": 24.0,
    "omega3_g": 0.167,
    "phosphorus_mg": 244.0,
    "potassium_mg": 217.0,
    "protein_g": 13.3,
    "salt_g": 1.5325,
    "sat_fat_g": 2.56,
    "sodium_mg": 613.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170764",
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
