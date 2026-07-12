/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-168865",
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
    },
    {
      "gramsPerUnit": 23.0,
      "key": "10-chips",
      "kind": "unit",
      "label": "10 chips"
    }
  ],
  "name": "Snacks, taro chips",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 68.1,
    "energy_kcal": 2080.0,
    "fat_g": 24.9,
    "fibre_g": 7.2,
    "folate_ug": 20.0,
    "iron_mg": 1.2,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 755.0,
    "protein_g": 2.3,
    "salt_g": 0.855,
    "sat_fat_g": 6.43,
    "sodium_mg": 342.0,
    "sugar_g": 3.82,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 11.3,
    "vitamin_k_ug": 18.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168865",
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
