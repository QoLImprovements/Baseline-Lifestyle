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
  "id": "usda-sr-legacy-167544",
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
    },
    {
      "gramsPerUnit": 43.0,
      "key": "bar-1-5-oz",
      "kind": "unit",
      "label": "bar (1.5 oz)"
    }
  ],
  "name": "Snacks, granola bars, soft, uncoated, raisin",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 66.4,
    "energy_kcal": 1870.0,
    "fat_g": 17.8,
    "fibre_g": 4.2,
    "folate_ug": 21.0,
    "iron_mg": 2.44,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 362.0,
    "protein_g": 7.6,
    "salt_g": 0.705,
    "sat_fat_g": 9.57,
    "sodium_mg": 282.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167544",
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
