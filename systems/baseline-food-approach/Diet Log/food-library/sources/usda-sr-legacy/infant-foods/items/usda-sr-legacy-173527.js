/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "100-ml",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "100-ml",
      "kind": "unit",
      "label": "100 ml"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, Pregestimil 20 Calories, ready to feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 7.0,
    "energy_kcal": 69.0,
    "fat_g": 3.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.18,
    "magnesium_mg": 5.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 34.0,
    "potassium_mg": 72.0,
    "protein_g": 1.84,
    "salt_g": 0.0775,
    "sat_fat_g": 2.2,
    "sodium_mg": 31.0,
    "sugar_g": 0.02,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173527",
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
