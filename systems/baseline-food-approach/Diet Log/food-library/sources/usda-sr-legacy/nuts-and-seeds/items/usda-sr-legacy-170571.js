/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170571",
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
      "gramsPerUnit": 137.0,
      "key": "cup-halves-and-whole",
      "kind": "unit",
      "label": "cup, halves and whole"
    },
    {
      "gramsPerUnit": 8.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Nuts, cashew nuts, dry roasted, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 32.7,
    "energy_kcal": 574.0,
    "fat_g": 46.4,
    "fibre_g": 3.0,
    "folate_ug": 69.0,
    "iron_mg": 6.0,
    "magnesium_mg": 260.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 490.0,
    "potassium_mg": 565.0,
    "protein_g": 15.3,
    "salt_g": 0.04,
    "sat_fat_g": 9.16,
    "sodium_mg": 16.0,
    "sugar_g": 5.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 34.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170571",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
