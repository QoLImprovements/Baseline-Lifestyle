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
  "id": "usda-sr-legacy-169709",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rice, white, long-grain, precooked or instant, enriched, dry",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 82.3,
    "energy_kcal": 380.0,
    "fat_g": 0.94,
    "fibre_g": 1.9,
    "folate_ug": 275.0,
    "iron_mg": 6.3,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 27.0,
    "protein_g": 7.82,
    "salt_g": 0.025,
    "sat_fat_g": 0.152,
    "sodium_mg": 10.0,
    "sugar_g": 0.05,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169709",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
