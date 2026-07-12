/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "toast",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174978",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "toast",
      "kind": "unit",
      "label": "toast"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, melba toast, rye (includes pumpernickel)",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 77.3,
    "energy_kcal": 1630.0,
    "fat_g": 3.4,
    "fibre_g": 8.0,
    "folate_ug": 85.0,
    "iron_mg": 3.68,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 183.0,
    "potassium_mg": 193.0,
    "protein_g": 11.6,
    "salt_g": 2.2475,
    "sat_fat_g": 0.453,
    "sodium_mg": 899.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174978",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
