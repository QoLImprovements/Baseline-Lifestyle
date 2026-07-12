/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cake-0-6-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175042",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cake-0-6-oz",
      "kind": "unit",
      "label": "cake (0.6 oz)"
    }
  ],
  "name": "Leavening agents, yeast, baker's, compressed",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 18.1,
    "energy_kcal": 439.0,
    "fat_g": 1.9,
    "fibre_g": 8.1,
    "folate_ug": 785.0,
    "iron_mg": 3.25,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 336.0,
    "potassium_mg": 601.0,
    "protein_g": 8.4,
    "salt_g": 0.075,
    "sat_fat_g": 0.243,
    "sodium_mg": 30.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175042",
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
