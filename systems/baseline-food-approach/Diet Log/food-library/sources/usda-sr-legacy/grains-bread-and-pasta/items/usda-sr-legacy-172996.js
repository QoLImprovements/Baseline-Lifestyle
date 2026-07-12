/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172996",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, Raisin Bran Cereal",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 80.4,
    "energy_kcal": 1430.0,
    "fat_g": 1.87,
    "fibre_g": 10.2,
    "folate_ug": 339.0,
    "iron_mg": 15.2,
    "magnesium_mg": 136.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 339.0,
    "potassium_mg": 546.0,
    "protein_g": 7.63,
    "salt_g": 1.165,
    "sat_fat_g": 0.424,
    "sodium_mg": 466.0,
    "sugar_g": 33.0,
    "vitamin_a_ug": 253.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172996",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
