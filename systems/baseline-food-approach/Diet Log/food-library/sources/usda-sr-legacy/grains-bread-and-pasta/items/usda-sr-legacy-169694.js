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
  "id": "usda-sr-legacy-169694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Corn flour, masa, enriched, white",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 76.6,
    "energy_kcal": 363.0,
    "fat_g": 3.69,
    "fibre_g": 6.4,
    "folate_ug": 162.0,
    "iron_mg": 8.5,
    "magnesium_mg": 93.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 231.0,
    "potassium_mg": 262.0,
    "protein_g": 8.46,
    "salt_g": 0.0125,
    "sat_fat_g": 0.532,
    "sodium_mg": 5.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169694",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
