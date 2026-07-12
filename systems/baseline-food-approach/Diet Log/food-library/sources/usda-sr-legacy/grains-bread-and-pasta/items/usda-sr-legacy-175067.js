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
  "id": "usda-sr-legacy-175067",
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
      "gramsPerUnit": 5.0,
      "key": "miniature-3-dia",
      "kind": "unit",
      "label": "miniature (3\" dia)"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "medium-approx-5-dia",
      "kind": "unit",
      "label": "medium (approx 5\" dia)"
    }
  ],
  "name": "Taco shells, baked, without added salt",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 62.4,
    "energy_kcal": 1960.0,
    "fat_g": 22.6,
    "fibre_g": 7.5,
    "folate_ug": 105.0,
    "iron_mg": 2.5,
    "magnesium_mg": 105.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 248.0,
    "potassium_mg": 179.0,
    "protein_g": 7.2,
    "salt_g": 0.0375,
    "sat_fat_g": 3.24,
    "sodium_mg": 15.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175067",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
