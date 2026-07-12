/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "2-cakes",
  "description": "Snacks",
  "id": "usda-sr-legacy-170652",
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
  "name": "Snacks, rice cakes, brown rice, sesame seed, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 81.5,
    "energy_kcal": 1640.0,
    "fat_g": 3.8,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 1.58,
    "magnesium_mg": 136.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 375.0,
    "potassium_mg": 290.0,
    "protein_g": 7.6,
    "salt_g": 0.01,
    "sat_fat_g": 0.54,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170652",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "nuts-and-seeds",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
