/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving-3-pancakes",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174086",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "serving-3-pancakes",
      "kind": "unit",
      "label": "serving 3 pancakes"
    }
  ],
  "name": "Pancakes, plain, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 57.3,
    "energy_kcal": 1130.0,
    "fat_g": 1.9,
    "fibre_g": 1.0,
    "folate_ug": 112.0,
    "iron_mg": 1.71,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 190.0,
    "potassium_mg": 97.0,
    "protein_g": 5.71,
    "salt_g": 1.0725,
    "sat_fat_g": 0.0,
    "sodium_mg": 429.0,
    "sugar_g": 8.57,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174086",
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
