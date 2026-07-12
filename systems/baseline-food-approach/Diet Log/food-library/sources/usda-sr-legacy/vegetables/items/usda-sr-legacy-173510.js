/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "jar-gerber-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-4-oz",
      "kind": "unit",
      "label": "jar, Gerber (4 oz)"
    }
  ],
  "name": "Babyfood, vegetable, butternut squash and corn",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 9.26,
    "energy_kcal": 50.0,
    "fat_g": 0.6,
    "fibre_g": 2.0,
    "folate_ug": 23.0,
    "iron_mg": 0.4,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 352.0,
    "protein_g": 2.0,
    "salt_g": 0.0125,
    "sat_fat_g": 0.095,
    "sodium_mg": 5.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 140.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173510",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
