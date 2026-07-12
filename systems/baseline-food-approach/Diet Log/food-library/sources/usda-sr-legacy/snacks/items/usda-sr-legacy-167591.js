/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "3-crackers",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.9,
      "key": "3-crackers",
      "kind": "unit",
      "label": "3 crackers"
    }
  ],
  "name": "Crunchmaster, Multi-Grain Crisps, Snack Crackers, Gluten-Free",
  "nutritionPerBasis": {
    "calcium_mg": 246.0,
    "carbs_g": 67.2,
    "energy_kcal": 1910.0,
    "fat_g": 15.9,
    "fibre_g": 7.5,
    "folate_ug": 35.0,
    "iron_mg": 2.68,
    "magnesium_mg": 149.0,
    "omega3_g": 0.93,
    "phosphorus_mg": 354.0,
    "potassium_mg": 339.0,
    "protein_g": 10.9,
    "salt_g": 0.925,
    "sat_fat_g": 2.07,
    "sodium_mg": 370.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167591",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
