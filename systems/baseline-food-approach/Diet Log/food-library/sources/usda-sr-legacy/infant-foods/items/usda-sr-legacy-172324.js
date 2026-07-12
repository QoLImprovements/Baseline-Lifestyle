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
  "id": "usda-sr-legacy-172324",
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
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, NEOSURE, powder, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 541.0,
    "carbs_g": 51.8,
    "energy_kcal": 2170.0,
    "fat_g": 28.3,
    "fibre_g": 0.0,
    "folate_ug": 128.0,
    "iron_mg": 9.26,
    "magnesium_mg": 46.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 319.0,
    "potassium_mg": 731.0,
    "protein_g": 14.4,
    "salt_g": 0.425,
    "sat_fat_g": 9.87,
    "sodium_mg": 170.0,
    "sugar_g": 52.0,
    "vitamin_a_ug": 711.0,
    "vitamin_c_mg": 77.2,
    "vitamin_e_mg": 8.34,
    "vitamin_k_ug": 56.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172324",
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
