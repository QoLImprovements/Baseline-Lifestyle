/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "envelope-swiss-miss-53-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-171886",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "envelope-swiss-miss-53-oz",
      "kind": "unit",
      "label": "envelope Swiss Miss (.53 oz)"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "envelope-alba-675-oz",
      "kind": "unit",
      "label": "envelope Alba (.675 oz)"
    }
  ],
  "name": "Beverages, Cocoa mix, no sugar added, powder",
  "nutritionPerBasis": {
    "calcium_mg": 576.0,
    "carbs_g": 71.9,
    "energy_kcal": 1580.0,
    "fat_g": 3.0,
    "fibre_g": 7.5,
    "folate_ug": 14.0,
    "iron_mg": 4.96,
    "magnesium_mg": 208.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 893.0,
    "potassium_mg": 2700.0,
    "protein_g": 15.5,
    "salt_g": 2.19,
    "sat_fat_g": 1.78,
    "sodium_mg": 876.0,
    "sugar_g": 37.6,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171886",
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
