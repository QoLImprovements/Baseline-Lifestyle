/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "2-cakes",
  "description": "Snacks",
  "id": "usda-sr-legacy-173155",
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
  "name": "Snacks, brown rice chips",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 81.5,
    "energy_kcal": 1610.0,
    "fat_g": 2.8,
    "fibre_g": 4.2,
    "folate_ug": 21.0,
    "iron_mg": 1.49,
    "magnesium_mg": 131.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 360.0,
    "potassium_mg": 290.0,
    "protein_g": 8.2,
    "salt_g": 0.815,
    "sat_fat_g": 0.642,
    "sodium_mg": 326.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.54,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173155",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
