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
  "id": "usda-sr-legacy-170284",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Barley, pearled, raw",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 77.7,
    "energy_kcal": 1470.0,
    "fat_g": 1.16,
    "fibre_g": 15.6,
    "folate_ug": 23.0,
    "iron_mg": 2.5,
    "magnesium_mg": 79.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 221.0,
    "potassium_mg": 280.0,
    "protein_g": 9.91,
    "salt_g": 0.0225,
    "sat_fat_g": 0.244,
    "sodium_mg": 9.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170284",
  "state": "Raw",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
