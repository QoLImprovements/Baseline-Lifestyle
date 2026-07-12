/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174907",
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
      "gramsPerUnit": 45.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, boston brown, canned",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 43.3,
    "energy_kcal": 817.0,
    "fat_g": 1.5,
    "fibre_g": 4.7,
    "folate_ug": 11.0,
    "iron_mg": 2.1,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 318.0,
    "protein_g": 5.2,
    "salt_g": 1.5775,
    "sat_fat_g": 0.282,
    "sodium_mg": 631.0,
    "sugar_g": 2.42,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174907",
  "state": "Canned",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "canned",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
