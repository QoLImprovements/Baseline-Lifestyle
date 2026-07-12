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
  "id": "usda-sr-legacy-173537",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.3,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, LIPIL, low iron, liquid concentrate, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 14.2,
    "energy_kcal": 547.0,
    "fat_g": 7.16,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 0.92,
    "magnesium_mg": 11.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 70.0,
    "potassium_mg": 142.0,
    "protein_g": 2.76,
    "salt_g": 0.0975,
    "sat_fat_g": 3.08,
    "sodium_mg": 39.0,
    "sugar_g": 14.2,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 15.8,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173537",
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
