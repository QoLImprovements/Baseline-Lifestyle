/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "4-cracker-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171856",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "4-cracker-1-serving",
      "kind": "unit",
      "label": "4 cracker 1 serving"
    }
  ],
  "name": "Crackers, water biscuits",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 72.8,
    "energy_kcal": 384.0,
    "fat_g": 7.14,
    "fibre_g": 7.1,
    "folate_ug": 24.0,
    "iron_mg": 0.0,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 99.0,
    "protein_g": 7.14,
    "salt_g": 1.4275,
    "sat_fat_g": 0.0,
    "sodium_mg": 571.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171856",
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
