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
  "id": "usda-sr-legacy-173131",
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
  "name": "Snacks, popcorn, microwave, 94% fat free",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 76.0,
    "energy_kcal": 402.0,
    "fat_g": 6.1,
    "fibre_g": 13.6,
    "folate_ug": 18.0,
    "iron_mg": 2.87,
    "magnesium_mg": 124.0,
    "omega3_g": 0.055,
    "phosphorus_mg": 304.0,
    "potassium_mg": 284.0,
    "protein_g": 10.7,
    "salt_g": 1.4275,
    "sat_fat_g": 1.18,
    "sodium_mg": 571.0,
    "sugar_g": 0.65,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173131",
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
