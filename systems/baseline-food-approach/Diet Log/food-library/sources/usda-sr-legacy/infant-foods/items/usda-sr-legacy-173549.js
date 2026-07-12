/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173549",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Infant formula, NESTLE, GOOD START SOY, with DHA and ARA, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 7.13,
    "energy_kcal": 64.0,
    "fat_g": 3.28,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.15,
    "magnesium_mg": 7.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 41.0,
    "potassium_mg": 74.0,
    "protein_g": 1.6,
    "salt_g": 0.065,
    "sat_fat_g": 1.4,
    "sodium_mg": 26.0,
    "sugar_g": 5.68,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173549",
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
