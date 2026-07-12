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
  "id": "usda-sr-legacy-170582",
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
  "name": "Nuts, hazelnuts or filberts, blanched",
  "nutritionPerBasis": {
    "calcium_mg": 149.0,
    "carbs_g": 17.0,
    "energy_kcal": 2630.0,
    "fat_g": 61.2,
    "fibre_g": 11.0,
    "folate_ug": 78.0,
    "iron_mg": 3.3,
    "magnesium_mg": 160.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 658.0,
    "protein_g": 13.7,
    "salt_g": 0.0,
    "sat_fat_g": 4.67,
    "sodium_mg": 0.0,
    "sugar_g": 3.49,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 17.5,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170582",
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
