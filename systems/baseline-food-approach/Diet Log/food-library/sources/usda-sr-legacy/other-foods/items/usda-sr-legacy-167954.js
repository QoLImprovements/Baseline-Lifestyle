/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bar-1-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bar-1-oz",
      "kind": "unit",
      "label": "bar (1 oz)"
    }
  ],
  "name": "Snacks, granola bars, soft, uncoated, plain",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 67.3,
    "energy_kcal": 1850.0,
    "fat_g": 17.2,
    "fibre_g": 4.6,
    "folate_ug": 24.0,
    "iron_mg": 2.56,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 325.0,
    "protein_g": 7.4,
    "salt_g": 0.695,
    "sat_fat_g": 7.25,
    "sodium_mg": 278.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167954",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
