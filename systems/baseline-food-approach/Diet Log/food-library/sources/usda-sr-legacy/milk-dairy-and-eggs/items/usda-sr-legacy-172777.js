/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pie-9-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172777",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1186.0,
      "key": "pie-9-dia",
      "kind": "unit",
      "label": "pie (9\" dia)"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pie, banana cream, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 32.9,
    "energy_kcal": 1120.0,
    "fat_g": 13.6,
    "fibre_g": 0.7,
    "folate_ug": 27.0,
    "iron_mg": 1.04,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 92.0,
    "potassium_mg": 165.0,
    "protein_g": 4.4,
    "salt_g": 0.6,
    "sat_fat_g": 3.76,
    "sodium_mg": 240.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172777",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
