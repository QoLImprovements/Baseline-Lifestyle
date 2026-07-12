/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snack, Mixed Berry Bar",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 58.8,
    "energy_kcal": 383.0,
    "fat_g": 10.5,
    "fibre_g": 7.9,
    "folate_ug": 28.0,
    "iron_mg": 1.89,
    "magnesium_mg": 91.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 343.0,
    "potassium_mg": 446.0,
    "protein_g": 13.2,
    "salt_g": 1.1175,
    "sat_fat_g": 3.85,
    "sodium_mg": 447.0,
    "sugar_g": 26.3,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174803",
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
