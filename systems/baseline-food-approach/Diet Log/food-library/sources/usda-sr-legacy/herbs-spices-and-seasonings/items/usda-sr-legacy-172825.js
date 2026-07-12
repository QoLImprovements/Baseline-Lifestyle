/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "toaster-strudel",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "toaster-strudel",
      "kind": "unit",
      "label": "Toaster Strudel"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "pastry-4-1-4-dia",
      "kind": "unit",
      "label": "pastry (4-1/4\" dia)"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "small-or-frozen-approx-3-dia",
      "kind": "unit",
      "label": "small or frozen (approx 3\" dia)"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "piece-1-8-of-15-oz-ring",
      "kind": "unit",
      "label": "piece (1/8 of 15 oz ring)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "container-3-oz",
      "kind": "unit",
      "label": "container (3 oz)"
    }
  ],
  "name": "Danish pastry, fruit, unenriched (includes apple, cinnamon, raisin, strawberry)",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 47.8,
    "energy_kcal": 1550.0,
    "fat_g": 18.5,
    "fibre_g": 1.9,
    "folate_ug": 16.0,
    "iron_mg": 0.75,
    "magnesium_mg": 15.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 89.0,
    "potassium_mg": 83.0,
    "protein_g": 5.4,
    "salt_g": 0.885,
    "sat_fat_g": 2.83,
    "sodium_mg": 354.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172825",
  "state": "Raw",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
