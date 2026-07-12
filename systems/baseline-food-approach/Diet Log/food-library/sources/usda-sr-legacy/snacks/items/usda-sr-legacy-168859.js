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
  "id": "usda-sr-legacy-168859",
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
  "name": "Tortilla chips, low fat, baked without fat",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 80.2,
    "energy_kcal": 1880.0,
    "fat_g": 5.7,
    "fibre_g": 5.3,
    "folate_ug": 16.0,
    "iron_mg": 1.6,
    "magnesium_mg": 97.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 272.0,
    "protein_g": 11.0,
    "salt_g": 1.2925,
    "sat_fat_g": 0.85,
    "sodium_mg": 517.0,
    "sugar_g": 0.67,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168859",
  "state": "Baked",
  "subcategory": "Snacks",
  "tags": [
    "baked",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
