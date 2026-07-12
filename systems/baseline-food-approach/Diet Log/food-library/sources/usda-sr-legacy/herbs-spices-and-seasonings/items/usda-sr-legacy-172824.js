/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "pastry-4-1-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172824",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
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
      "gramsPerUnit": 142.0,
      "key": "large-approx-7-dia",
      "kind": "unit",
      "label": "large (approx 7\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "toaster-strudel",
      "kind": "unit",
      "label": "Toaster Strudel"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "piece-1-8-of-15-oz-ring",
      "kind": "unit",
      "label": "piece (1/8 of 15 oz ring)"
    }
  ],
  "name": "Danish pastry, cinnamon, unenriched",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 44.6,
    "energy_kcal": 1690.0,
    "fat_g": 22.4,
    "fibre_g": 1.2,
    "folate_ug": 33.0,
    "iron_mg": 0.78,
    "magnesium_mg": 19.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 107.0,
    "potassium_mg": 125.0,
    "protein_g": 7.0,
    "salt_g": 0.9275,
    "sat_fat_g": 5.68,
    "sodium_mg": 371.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172824",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
