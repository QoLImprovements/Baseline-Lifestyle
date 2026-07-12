/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "pita-large-6-1-2-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172816",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "pita-large-6-1-2-dia",
      "kind": "unit",
      "label": "pita, large (6-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, pita, white, unenriched",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 55.7,
    "energy_kcal": 1150.0,
    "fat_g": 1.2,
    "fibre_g": 2.2,
    "folate_ug": 24.0,
    "iron_mg": 1.4,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 120.0,
    "protein_g": 9.1,
    "salt_g": 1.34,
    "sat_fat_g": 0.166,
    "sodium_mg": 536.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172816",
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
