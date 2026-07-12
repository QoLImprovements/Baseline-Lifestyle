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
  "id": "usda-sr-legacy-174933",
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
      "gramsPerUnit": 71.0,
      "key": "piece-1-8-cake",
      "kind": "unit",
      "label": "piece (1/8 cake)"
    }
  ],
  "name": "Cake, cherry fudge with chocolate frosting",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 38.0,
    "energy_kcal": 1100.0,
    "fat_g": 12.5,
    "fibre_g": 0.5,
    "folate_ug": 10.0,
    "iron_mg": 1.1,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 105.0,
    "potassium_mg": 166.0,
    "protein_g": 2.4,
    "salt_g": 0.41,
    "sat_fat_g": 5.07,
    "sodium_mg": 164.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 13.6,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174933",
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
