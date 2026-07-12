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
  "id": "usda-sr-legacy-168900",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pasta, gluten-free, corn, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 27.9,
    "energy_kcal": 527.0,
    "fat_g": 0.73,
    "fibre_g": 4.8,
    "folate_ug": 6.0,
    "iron_mg": 0.25,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 31.0,
    "protein_g": 2.63,
    "salt_g": 0.0,
    "sat_fat_g": 0.102,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168900",
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
