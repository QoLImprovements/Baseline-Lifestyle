/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, walnuts, glazed",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 47.6,
    "energy_kcal": 2090.0,
    "fat_g": 35.7,
    "fibre_g": 3.6,
    "folate_ug": 0.0,
    "iron_mg": 1.29,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 232.0,
    "protein_g": 8.28,
    "salt_g": 1.115,
    "sat_fat_g": 3.57,
    "sodium_mg": 446.0,
    "sugar_g": 32.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170593",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
