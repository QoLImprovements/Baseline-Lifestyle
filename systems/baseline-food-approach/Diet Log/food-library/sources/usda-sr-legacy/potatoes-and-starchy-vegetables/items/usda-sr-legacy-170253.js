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
  "id": "usda-sr-legacy-170253",
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
  "name": "Potato chips, without salt, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 67.8,
    "energy_kcal": 487.0,
    "fat_g": 20.8,
    "fibre_g": 6.1,
    "folate_ug": 10.0,
    "iron_mg": 1.35,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 193.0,
    "potassium_mg": 1740.0,
    "protein_g": 7.1,
    "salt_g": 0.02,
    "sat_fat_g": 4.16,
    "sodium_mg": 8.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 25.7,
    "vitamin_e_mg": 5.47,
    "vitamin_k_ug": 13.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170253",
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
