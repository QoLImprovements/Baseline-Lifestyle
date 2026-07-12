/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "3-crackers",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174104",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.1,
      "key": "3-crackers",
      "kind": "unit",
      "label": "3 crackers"
    }
  ],
  "name": "Crackers, gluten-free, multi-seeded and multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 238.0,
    "carbs_g": 66.3,
    "energy_kcal": 453.0,
    "fat_g": 15.8,
    "fibre_g": 10.2,
    "folate_ug": 35.0,
    "iron_mg": 2.83,
    "magnesium_mg": 164.0,
    "omega3_g": 0.93,
    "phosphorus_mg": 374.0,
    "potassium_mg": 381.0,
    "protein_g": 11.2,
    "salt_g": 1.095,
    "sat_fat_g": 2.07,
    "sodium_mg": 438.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174104",
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
