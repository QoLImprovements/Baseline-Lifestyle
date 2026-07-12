/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Cereals, QUAKER, Whole Wheat Natural Cereal, dry",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 74.8,
    "energy_kcal": 333.0,
    "fat_g": 2.0,
    "fibre_g": 9.9,
    "folate_ug": 49.0,
    "iron_mg": 3.3,
    "magnesium_mg": 147.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 406.0,
    "potassium_mg": 502.0,
    "protein_g": 11.8,
    "salt_g": 0.02,
    "sat_fat_g": 0.419,
    "sodium_mg": 8.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174641",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
