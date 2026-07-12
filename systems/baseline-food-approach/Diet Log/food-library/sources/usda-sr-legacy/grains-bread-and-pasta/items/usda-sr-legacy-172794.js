/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "roll-large-submarine-hoagie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "roll-large-submarine-hoagie",
      "kind": "unit",
      "label": "roll, large submarine, hoagie"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "roll-small-submarine-hoagie-roll",
      "kind": "unit",
      "label": "roll (small submarine, hoagie roll)"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "roll-hamburger-frankfurter-roll",
      "kind": "unit",
      "label": "roll (hamburger, frankfurter roll)"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "roll-medium-submarine-hoagie",
      "kind": "unit",
      "label": "roll medium submarine, hoagie"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "medium-2-1-2-dia",
      "kind": "unit",
      "label": "medium (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "roll-1-oz",
      "kind": "unit",
      "label": "roll (1 oz)"
    }
  ],
  "name": "Rolls, dinner, whole-wheat",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 51.1,
    "energy_kcal": 1110.0,
    "fat_g": 4.7,
    "fibre_g": 7.5,
    "folate_ug": 30.0,
    "iron_mg": 2.42,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 224.0,
    "potassium_mg": 272.0,
    "protein_g": 8.7,
    "salt_g": 1.3025,
    "sat_fat_g": 0.836,
    "sodium_mg": 521.0,
    "sugar_g": 8.46,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172794",
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
