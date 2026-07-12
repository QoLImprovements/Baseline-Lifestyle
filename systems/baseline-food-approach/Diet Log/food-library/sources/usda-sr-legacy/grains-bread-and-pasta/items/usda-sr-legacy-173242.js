/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tortilla-approx-12-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-173242",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "tortilla-approx-12-dia",
      "kind": "unit",
      "label": "tortilla (approx 12\" dia)"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "tortilla-approx-7-8-dia",
      "kind": "unit",
      "label": "tortilla (approx 7-8\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "tortilla-medium-approx-6-dia",
      "kind": "unit",
      "label": "tortilla, medium (approx 6\" dia)"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "tortilla-approx-10-dia",
      "kind": "unit",
      "label": "tortilla (approx 10\" dia)"
    }
  ],
  "name": "Tortillas, ready-to-bake or -fry, flour, without added calcium",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 55.6,
    "energy_kcal": 1360.0,
    "fat_g": 7.1,
    "fibre_g": 3.3,
    "folate_ug": 123.0,
    "iron_mg": 3.3,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 131.0,
    "protein_g": 8.7,
    "salt_g": 1.195,
    "sat_fat_g": 1.74,
    "sodium_mg": 478.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173242",
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
