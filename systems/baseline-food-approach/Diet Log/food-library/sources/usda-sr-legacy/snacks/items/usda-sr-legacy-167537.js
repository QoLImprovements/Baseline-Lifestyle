/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167537",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "bag-7-oz",
      "kind": "unit",
      "label": "bag (7 oz)"
    }
  ],
  "name": "Snacks, corn-based, extruded, chips, plain",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 57.3,
    "energy_kcal": 539.0,
    "fat_g": 33.4,
    "fibre_g": 4.0,
    "folate_ug": 8.0,
    "iron_mg": 1.2,
    "magnesium_mg": 72.0,
    "omega3_g": 0.27,
    "phosphorus_mg": 194.0,
    "potassium_mg": 144.0,
    "protein_g": 6.17,
    "salt_g": 1.285,
    "sat_fat_g": 4.33,
    "sodium_mg": 514.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.23,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167537",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
