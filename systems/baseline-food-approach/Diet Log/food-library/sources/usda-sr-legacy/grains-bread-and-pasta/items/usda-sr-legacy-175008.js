/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "pancake-4-dia",
      "kind": "unit",
      "label": "pancake (4\" dia)"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "pancake-6-dia",
      "kind": "unit",
      "label": "pancake (6\" dia)"
    }
  ],
  "name": "Pancakes, plain, dry mix, incomplete, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 215.0,
    "carbs_g": 28.9,
    "energy_kcal": 912.0,
    "fat_g": 7.7,
    "fibre_g": 1.9,
    "folate_ug": 36.0,
    "iron_mg": 1.3,
    "magnesium_mg": 22.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 313.0,
    "potassium_mg": 199.0,
    "protein_g": 7.8,
    "salt_g": 1.2625,
    "sat_fat_g": 2.04,
    "sodium_mg": 505.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175008",
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
