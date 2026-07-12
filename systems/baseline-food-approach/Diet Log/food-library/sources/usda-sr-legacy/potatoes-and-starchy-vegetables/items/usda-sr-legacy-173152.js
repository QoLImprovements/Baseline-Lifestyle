/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "bag",
  "description": "Snacks",
  "id": "usda-sr-legacy-173152",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "bag",
      "kind": "unit",
      "label": "bag"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "10-chips",
      "kind": "unit",
      "label": "10 chips"
    }
  ],
  "name": "Snacks, yucca (cassava) chips, salted",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 69.2,
    "energy_kcal": 2160.0,
    "fat_g": 25.9,
    "fibre_g": 3.7,
    "folate_ug": 0.0,
    "iron_mg": 0.72,
    "magnesium_mg": 46.0,
    "omega3_g": 0.091,
    "phosphorus_mg": 99.0,
    "potassium_mg": 868.0,
    "protein_g": 1.34,
    "salt_g": 0.74,
    "sat_fat_g": 8.69,
    "sodium_mg": 296.0,
    "sugar_g": 3.36,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.78,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173152",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
