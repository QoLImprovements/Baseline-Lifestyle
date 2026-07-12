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
  "id": "usda-sr-legacy-172290",
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
  "name": "Infant formula, MEAD JOHNSON, Enfamil Premature 30 Calories, ready to feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 11.1,
    "energy_kcal": 101.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 1.74,
    "magnesium_mg": 9.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 87.0,
    "potassium_mg": 95.0,
    "protein_g": 3.2,
    "salt_g": 0.17,
    "sat_fat_g": 2.2,
    "sodium_mg": 68.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 400.0,
    "vitamin_c_mg": 19.3,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172290",
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
