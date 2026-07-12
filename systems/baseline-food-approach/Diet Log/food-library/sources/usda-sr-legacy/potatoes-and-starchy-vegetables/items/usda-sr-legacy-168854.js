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
  "id": "usda-sr-legacy-168854",
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
      "gramsPerUnit": 18.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Snacks, potato sticks",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 53.3,
    "energy_kcal": 2180.0,
    "fat_g": 34.4,
    "fibre_g": 3.4,
    "folate_ug": 40.0,
    "iron_mg": 2.27,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 172.0,
    "potassium_mg": 1240.0,
    "protein_g": 6.7,
    "salt_g": 1.5825,
    "sat_fat_g": 8.88,
    "sodium_mg": 633.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 47.3,
    "vitamin_e_mg": 9.11,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168854",
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
