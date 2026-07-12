/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "slice-1-serving",
      "kind": "unit",
      "label": "slice 1 serving"
    }
  ],
  "name": "Bread, wheat, sprouted",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 33.9,
    "energy_kcal": 787.0,
    "fat_g": 0.0,
    "fibre_g": 5.3,
    "folate_ug": 0.0,
    "iron_mg": 1.89,
    "magnesium_mg": 66.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 176.0,
    "potassium_mg": 198.0,
    "protein_g": 13.2,
    "salt_g": 1.185,
    "sat_fat_g": 0.0,
    "sodium_mg": 474.0,
    "sugar_g": 2.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171850",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
