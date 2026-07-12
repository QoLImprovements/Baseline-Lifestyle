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
  "id": "usda-sr-legacy-169740",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Barley malt flour",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 78.3,
    "energy_kcal": 1510.0,
    "fat_g": 1.84,
    "fibre_g": 7.1,
    "folate_ug": 38.0,
    "iron_mg": 4.71,
    "magnesium_mg": 97.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 303.0,
    "potassium_mg": 224.0,
    "protein_g": 10.3,
    "salt_g": 0.0275,
    "sat_fat_g": 0.386,
    "sodium_mg": 11.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169740",
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
