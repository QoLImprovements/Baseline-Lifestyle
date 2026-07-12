/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174944",
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
      "gramsPerUnit": 144.0,
      "key": "piece-1-12-of-a-cake",
      "kind": "unit",
      "label": "piece (1/12 of a cake)"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "piece-1-8-of-18-oz-cake",
      "kind": "unit",
      "label": "piece (1/8 of 18 oz cake)"
    },
    {
      "gramsPerUnit": 1729.0,
      "key": "cake",
      "kind": "unit",
      "label": "cake"
    }
  ],
  "name": "Cake, yellow, commercially prepared, with chocolate frosting, in-store bakery",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 55.4,
    "energy_kcal": 1580.0,
    "fat_g": 17.8,
    "fibre_g": 1.5,
    "folate_ug": 22.0,
    "iron_mg": 2.03,
    "magnesium_mg": 20.0,
    "omega3_g": 0.474,
    "phosphorus_mg": 138.0,
    "potassium_mg": 187.0,
    "protein_g": 3.16,
    "salt_g": 0.775,
    "sat_fat_g": 5.79,
    "sodium_mg": 310.0,
    "sugar_g": 39.2,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 25.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174944",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
