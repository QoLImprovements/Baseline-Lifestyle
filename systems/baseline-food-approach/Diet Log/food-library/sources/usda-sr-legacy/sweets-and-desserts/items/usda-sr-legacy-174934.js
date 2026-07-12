/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-12-of-a-cake",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174934",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
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
      "gramsPerUnit": 1660.0,
      "key": "cake",
      "kind": "unit",
      "label": "cake"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, chocolate, commercially prepared with chocolate frosting, in-store bakery",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 52.8,
    "energy_kcal": 389.0,
    "fat_g": 20.0,
    "fibre_g": 2.2,
    "folate_ug": 17.0,
    "iron_mg": 3.04,
    "magnesium_mg": 31.0,
    "omega3_g": 0.454,
    "phosphorus_mg": 137.0,
    "potassium_mg": 270.0,
    "protein_g": 3.48,
    "salt_g": 0.87,
    "sat_fat_g": 5.92,
    "sodium_mg": 348.0,
    "sugar_g": 40.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 4.33,
    "vitamin_k_ug": 28.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174934",
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
