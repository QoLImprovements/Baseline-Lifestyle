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
  "id": "usda-sr-legacy-172293",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "100-ml",
      "kind": "unit",
      "label": "100 ml"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, Pregestimil 24 Calories, ready to feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 5.95,
    "energy_kcal": 302.0,
    "fat_g": 4.4,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.4,
    "magnesium_mg": 6.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 41.0,
    "potassium_mg": 86.0,
    "protein_g": 2.2,
    "salt_g": 0.0925,
    "sat_fat_g": 2.6,
    "sodium_mg": 37.0,
    "sugar_g": 0.02,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 9.4,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172293",
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
