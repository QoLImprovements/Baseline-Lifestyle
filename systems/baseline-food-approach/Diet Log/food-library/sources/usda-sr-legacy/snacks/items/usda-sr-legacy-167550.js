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
  "id": "usda-sr-legacy-167550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "2-cakes",
      "kind": "unit",
      "label": "2 cakes"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "cake",
      "kind": "unit",
      "label": "cake"
    }
  ],
  "name": "Snacks, popcorn, cakes",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 80.1,
    "energy_kcal": 1610.0,
    "fat_g": 3.1,
    "fibre_g": 2.9,
    "folate_ug": 18.0,
    "iron_mg": 1.87,
    "magnesium_mg": 159.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 277.0,
    "potassium_mg": 327.0,
    "protein_g": 9.7,
    "salt_g": 0.72,
    "sat_fat_g": 0.48,
    "sodium_mg": 288.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167550",
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
