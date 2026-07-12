/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-174784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, FRITOLAY, SUNCHIPS, Multigrain Snack, original flavor",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 67.3,
    "energy_kcal": 2050.0,
    "fat_g": 21.1,
    "fibre_g": 8.8,
    "folate_ug": 25.0,
    "iron_mg": 1.74,
    "magnesium_mg": 76.0,
    "omega3_g": 0.093,
    "phosphorus_mg": 222.0,
    "potassium_mg": 232.0,
    "protein_g": 7.95,
    "salt_g": 1.0575,
    "sat_fat_g": 2.17,
    "sodium_mg": 423.0,
    "sugar_g": 7.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.04,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174784",
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
