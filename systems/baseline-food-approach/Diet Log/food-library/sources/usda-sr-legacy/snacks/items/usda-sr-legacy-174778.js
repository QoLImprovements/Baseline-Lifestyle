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
  "id": "usda-sr-legacy-174778",
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
  "name": "Snacks, popcorn, microwave, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 72.0,
    "energy_kcal": 1770.0,
    "fat_g": 9.5,
    "fibre_g": 14.2,
    "folate_ug": 17.0,
    "iron_mg": 2.28,
    "magnesium_mg": 151.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 264.0,
    "potassium_mg": 241.0,
    "protein_g": 12.6,
    "salt_g": 1.5725,
    "sat_fat_g": 1.42,
    "sodium_mg": 629.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174778",
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
