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
  "id": "usda-sr-legacy-172023",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Millet flour",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 75.1,
    "energy_kcal": 382.0,
    "fat_g": 4.25,
    "fibre_g": 3.5,
    "folate_ug": 42.0,
    "iron_mg": 3.94,
    "magnesium_mg": 119.0,
    "omega3_g": 0.044,
    "phosphorus_mg": 285.0,
    "potassium_mg": 224.0,
    "protein_g": 10.8,
    "salt_g": 0.01,
    "sat_fat_g": 0.536,
    "sodium_mg": 4.0,
    "sugar_g": 1.66,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172023",
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
