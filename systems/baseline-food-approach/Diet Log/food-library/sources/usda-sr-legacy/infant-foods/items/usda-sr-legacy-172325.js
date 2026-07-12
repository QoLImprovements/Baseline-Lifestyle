/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172325",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, SENSITIVE (LACTOSE FREE) ready-to-feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 7.4,
    "energy_kcal": 68.0,
    "fat_g": 3.74,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.24,
    "magnesium_mg": 3.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 39.0,
    "potassium_mg": 74.0,
    "protein_g": 1.48,
    "salt_g": 0.0525,
    "sat_fat_g": 2.43,
    "sodium_mg": 21.0,
    "sugar_g": 7.4,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172325",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
