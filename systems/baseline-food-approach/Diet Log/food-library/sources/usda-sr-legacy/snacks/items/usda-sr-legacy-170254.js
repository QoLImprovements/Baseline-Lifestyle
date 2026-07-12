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
  "id": "usda-sr-legacy-170254",
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
  "name": "Snacks, tortilla chips, low fat, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 80.1,
    "energy_kcal": 1740.0,
    "fat_g": 5.7,
    "fibre_g": 5.3,
    "folate_ug": 16.0,
    "iron_mg": 1.6,
    "magnesium_mg": 97.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 272.0,
    "protein_g": 11.0,
    "salt_g": 0.0375,
    "sat_fat_g": 0.85,
    "sodium_mg": 15.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 20.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170254",
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
