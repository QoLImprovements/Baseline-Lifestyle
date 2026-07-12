/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-10-of-10-6-oz-cake",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174940",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "piece-1-10-of-10-6-oz-cake",
      "kind": "unit",
      "label": "piece (1/10 of 10.6 oz cake)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "piece-1-12-of-12-oz-cake",
      "kind": "unit",
      "label": "piece (1/12 of 12 oz cake)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "snack-cake-2-5-oz",
      "kind": "unit",
      "label": "snack cake (2.5 oz)"
    }
  ],
  "name": "Cake, pound, commercially prepared, other than all butter, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 52.5,
    "energy_kcal": 1630.0,
    "fat_g": 17.9,
    "fibre_g": 1.0,
    "folate_ug": 36.0,
    "iron_mg": 1.62,
    "magnesium_mg": 13.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 134.0,
    "potassium_mg": 106.0,
    "protein_g": 5.2,
    "salt_g": 1.0,
    "sat_fat_g": 4.65,
    "sodium_mg": 400.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174940",
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
