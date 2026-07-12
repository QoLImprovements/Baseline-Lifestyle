/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-25-cup",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168876",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Rice, brown, parboiled, dry, UNCLE BEN'S",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 78.7,
    "energy_kcal": 1550.0,
    "fat_g": 2.75,
    "fibre_g": 3.5,
    "folate_ug": 14.0,
    "iron_mg": 1.16,
    "magnesium_mg": 98.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 275.0,
    "potassium_mg": 219.0,
    "protein_g": 7.6,
    "salt_g": 0.015,
    "sat_fat_g": 0.481,
    "sodium_mg": 6.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168876",
  "state": "Boiled",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "boiled",
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
