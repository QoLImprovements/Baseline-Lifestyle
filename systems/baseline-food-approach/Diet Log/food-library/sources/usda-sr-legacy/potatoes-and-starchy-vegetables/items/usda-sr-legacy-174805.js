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
  "id": "usda-sr-legacy-174805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "bag",
      "kind": "unit",
      "label": "bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "23-pieces",
      "kind": "unit",
      "label": "23 pieces"
    }
  ],
  "name": "Snacks, potato chips, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 53.5,
    "energy_kcal": 560.0,
    "fat_g": 35.4,
    "fibre_g": 4.2,
    "folate_ug": 58.0,
    "iron_mg": 1.43,
    "magnesium_mg": 62.0,
    "omega3_g": 0.392,
    "phosphorus_mg": 148.0,
    "potassium_mg": 1300.0,
    "protein_g": 6.72,
    "salt_g": 0.4675,
    "sat_fat_g": 5.49,
    "sodium_mg": 187.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.3,
    "vitamin_e_mg": 7.72,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174805",
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
