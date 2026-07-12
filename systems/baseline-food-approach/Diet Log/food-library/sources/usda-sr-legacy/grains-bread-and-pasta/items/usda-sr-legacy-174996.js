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
  "id": "usda-sr-legacy-174996",
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
      "gramsPerUnit": 66.0,
      "key": "muffin",
      "kind": "unit",
      "label": "muffin"
    }
  ],
  "name": "Muffins, English, mixed-grain (includes granola)",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 46.3,
    "energy_kcal": 983.0,
    "fat_g": 1.8,
    "fibre_g": 2.8,
    "folate_ug": 80.0,
    "iron_mg": 3.02,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 156.0,
    "protein_g": 9.1,
    "salt_g": 0.745,
    "sat_fat_g": 0.23,
    "sodium_mg": 298.0,
    "sugar_g": 0.81,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174996",
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
