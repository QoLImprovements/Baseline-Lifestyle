/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "shell",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.9,
      "key": "shell",
      "kind": "unit",
      "label": "shell"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "miniature-3-dia",
      "kind": "unit",
      "label": "miniature (3\" dia)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "large-6-1-2-dia",
      "kind": "unit",
      "label": "large (6-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 13.3,
      "key": "medium-approx-5-dia",
      "kind": "unit",
      "label": "medium (approx 5\" dia)"
    },
    {
      "gramsPerUnit": 12.7,
      "key": "taco",
      "kind": "unit",
      "label": "taco"
    }
  ],
  "name": "Taco shells, baked",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 63.5,
    "energy_kcal": 476.0,
    "fat_g": 21.8,
    "fibre_g": 6.7,
    "folate_ug": 69.0,
    "iron_mg": 1.64,
    "magnesium_mg": 83.0,
    "omega3_g": 0.27,
    "phosphorus_mg": 233.0,
    "potassium_mg": 231.0,
    "protein_g": 6.41,
    "salt_g": 0.81,
    "sat_fat_g": 7.1,
    "sodium_mg": 324.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172800",
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
