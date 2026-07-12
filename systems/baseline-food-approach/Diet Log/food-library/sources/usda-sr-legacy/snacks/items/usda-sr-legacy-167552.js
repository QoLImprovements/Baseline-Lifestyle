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
  "id": "usda-sr-legacy-167552",
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
  "name": "Snacks, popcorn, caramel-coated, without peanuts",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 79.1,
    "energy_kcal": 1800.0,
    "fat_g": 12.8,
    "fibre_g": 5.2,
    "folate_ug": 5.0,
    "iron_mg": 1.74,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 109.0,
    "protein_g": 3.8,
    "salt_g": 0.515,
    "sat_fat_g": 3.61,
    "sodium_mg": 206.0,
    "sugar_g": 53.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167552",
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
