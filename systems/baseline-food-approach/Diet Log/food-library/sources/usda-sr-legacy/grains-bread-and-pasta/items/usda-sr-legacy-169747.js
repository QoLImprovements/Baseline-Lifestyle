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
  "id": "usda-sr-legacy-169747",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 193.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Teff, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 73.1,
    "energy_kcal": 1540.0,
    "fat_g": 2.38,
    "fibre_g": 8.0,
    "folate_ug": 0.0,
    "iron_mg": 7.63,
    "magnesium_mg": 184.0,
    "omega3_g": 0.135,
    "phosphorus_mg": 429.0,
    "potassium_mg": 427.0,
    "protein_g": 13.3,
    "salt_g": 0.03,
    "sat_fat_g": 0.449,
    "sodium_mg": 12.0,
    "sugar_g": 1.84,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169747",
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
