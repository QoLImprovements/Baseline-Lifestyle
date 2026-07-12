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
  "id": "usda-sr-legacy-171851",
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
  "name": "Bread, wheat, sprouted, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 36.8,
    "energy_kcal": 205.0,
    "fat_g": 0.0,
    "fibre_g": 5.7,
    "folate_ug": 0.0,
    "iron_mg": 2.06,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 192.0,
    "potassium_mg": 215.0,
    "protein_g": 14.3,
    "salt_g": 1.2875,
    "sat_fat_g": 0.0,
    "sodium_mg": 515.0,
    "sugar_g": 2.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171851",
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
