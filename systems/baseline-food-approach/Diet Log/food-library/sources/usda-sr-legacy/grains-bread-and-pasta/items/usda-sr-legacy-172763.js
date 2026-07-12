/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "French toast, frozen, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 32.1,
    "energy_kcal": 891.0,
    "fat_g": 6.1,
    "fibre_g": 1.1,
    "folate_ug": 52.0,
    "iron_mg": 2.21,
    "magnesium_mg": 17.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 139.0,
    "potassium_mg": 134.0,
    "protein_g": 7.4,
    "salt_g": 1.2375,
    "sat_fat_g": 1.53,
    "sodium_mg": 495.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172763",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
