/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-168862",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, KELLOGG, KELLOGG'S, NUTRI-GRAIN Cereal Bars, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 576.0,
    "carbs_g": 67.6,
    "energy_kcal": 365.0,
    "fat_g": 8.67,
    "fibre_g": 3.0,
    "folate_ug": 14.0,
    "iron_mg": 6.14,
    "magnesium_mg": 37.0,
    "omega3_g": 0.496,
    "phosphorus_mg": 134.0,
    "potassium_mg": 247.0,
    "protein_g": 4.22,
    "salt_g": 0.885,
    "sat_fat_g": 1.44,
    "sodium_mg": 354.0,
    "sugar_g": 29.0,
    "vitamin_a_ug": 604.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 15.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168862",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
