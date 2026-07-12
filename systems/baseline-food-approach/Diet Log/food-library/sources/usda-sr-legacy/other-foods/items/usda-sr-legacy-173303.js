/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "large-16-fl-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173303",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 504.0,
      "key": "large-16-fl-oz",
      "kind": "unit",
      "label": "large (16 fl oz)"
    },
    {
      "gramsPerUnit": 348.0,
      "key": "regular-12-fl-oz",
      "kind": "unit",
      "label": "regular (12 fl oz)"
    }
  ],
  "name": "McDONALD'S, McFLURRY with M&M'S CANDIES",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 26.8,
    "energy_kcal": 741.0,
    "fat_g": 6.46,
    "fibre_g": 0.2,
    "folate_ug": 3.0,
    "iron_mg": 0.27,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 208.0,
    "protein_g": 4.02,
    "salt_g": 0.135,
    "sat_fat_g": 3.4,
    "sodium_mg": 54.0,
    "sugar_g": 24.4,
    "vitamin_a_ug": 312.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173303",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
