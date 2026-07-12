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
  "id": "usda-sr-legacy-170256",
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
  "name": "Snacks, tortilla chips, nacho-flavor, made with enriched masa flour",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 62.3,
    "energy_kcal": 2140.0,
    "fat_g": 25.6,
    "fibre_g": 5.3,
    "folate_ug": 130.0,
    "iron_mg": 3.7,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 244.0,
    "potassium_mg": 216.0,
    "protein_g": 7.8,
    "salt_g": 1.77,
    "sat_fat_g": 4.9,
    "sodium_mg": 708.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170256",
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
