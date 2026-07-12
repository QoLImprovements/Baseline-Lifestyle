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
  "id": "usda-sr-legacy-171650",
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
  "name": "Cereals ready-to-eat, POST Raisin Bran Cereal",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 78.9,
    "energy_kcal": 324.0,
    "fat_g": 1.6,
    "fibre_g": 13.7,
    "folate_ug": 339.0,
    "iron_mg": 18.3,
    "magnesium_mg": 168.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 339.0,
    "potassium_mg": 525.0,
    "protein_g": 7.6,
    "salt_g": 0.955,
    "sat_fat_g": 0.296,
    "sodium_mg": 382.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 380.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171650",
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
