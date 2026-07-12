/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-dry-yields",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-169700",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 528.0,
      "key": "cup-dry-yields",
      "kind": "unit",
      "label": "cup, dry, yields"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "cup-cooked",
      "kind": "unit",
      "label": "cup, cooked"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "oz-dry-yields",
      "kind": "unit",
      "label": "oz, dry, yields"
    }
  ],
  "name": "Couscous, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 23.2,
    "energy_kcal": 469.0,
    "fat_g": 0.16,
    "fibre_g": 1.4,
    "folate_ug": 15.0,
    "iron_mg": 0.38,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 58.0,
    "protein_g": 3.79,
    "salt_g": 0.0125,
    "sat_fat_g": 0.029,
    "sodium_mg": 5.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169700",
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
