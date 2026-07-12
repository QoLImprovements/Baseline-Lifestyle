/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "2-cakes",
  "description": "Snacks",
  "id": "usda-sr-legacy-170647",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "2-cakes",
      "kind": "unit",
      "label": "2 cakes"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "cake",
      "kind": "unit",
      "label": "cake"
    }
  ],
  "name": "Snacks, corn cakes, very low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 83.4,
    "energy_kcal": 1620.0,
    "fat_g": 2.4,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.4,
    "magnesium_mg": 114.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 157.0,
    "potassium_mg": 157.0,
    "protein_g": 8.1,
    "salt_g": 0.07,
    "sat_fat_g": 0.42,
    "sodium_mg": 28.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170647",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
