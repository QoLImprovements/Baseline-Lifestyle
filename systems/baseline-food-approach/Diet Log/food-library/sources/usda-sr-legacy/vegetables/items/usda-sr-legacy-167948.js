/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "2-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167948",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, corn-based, extruded, onion-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 65.1,
    "energy_kcal": 2090.0,
    "fat_g": 22.6,
    "fibre_g": 3.9,
    "folate_ug": 110.0,
    "iron_mg": 3.72,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 143.0,
    "protein_g": 7.7,
    "salt_g": 2.375,
    "sat_fat_g": 4.34,
    "sodium_mg": 950.0,
    "sugar_g": 4.83,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 2.69,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167948",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
