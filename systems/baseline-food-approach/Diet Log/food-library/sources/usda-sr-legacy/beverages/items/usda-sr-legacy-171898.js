/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "nlea-serving",
  "description": "Beverages",
  "id": "usda-sr-legacy-171898",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA Serving"
    }
  ],
  "name": "Beverages, KRAFT, coffee, instant, French Vanilla Cafe",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 74.6,
    "energy_kcal": 481.0,
    "fat_g": 19.2,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 0.33,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 203.0,
    "potassium_mg": 546.0,
    "protein_g": 2.5,
    "salt_g": 0.9975,
    "sat_fat_g": 4.6,
    "sodium_mg": 399.0,
    "sugar_g": 54.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171898",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
