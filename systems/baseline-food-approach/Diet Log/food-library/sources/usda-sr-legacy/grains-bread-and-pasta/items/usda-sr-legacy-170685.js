/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-170685",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Buckwheat groats, roasted, dry",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 75.0,
    "energy_kcal": 346.0,
    "fat_g": 2.71,
    "fibre_g": 10.3,
    "folate_ug": 42.0,
    "iron_mg": 2.47,
    "magnesium_mg": 221.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 319.0,
    "potassium_mg": 320.0,
    "protein_g": 11.7,
    "salt_g": 0.0275,
    "sat_fat_g": 0.591,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170685",
  "state": "Roasted",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
