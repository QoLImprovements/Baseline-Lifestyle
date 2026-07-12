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
  "id": "usda-sr-legacy-170186",
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
      "gramsPerUnit": 7.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Nuts, walnuts, black, dried",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 9.58,
    "energy_kcal": 2590.0,
    "fat_g": 59.3,
    "fibre_g": 6.8,
    "folate_ug": 31.0,
    "iron_mg": 3.12,
    "magnesium_mg": 201.0,
    "omega3_g": 2.68,
    "phosphorus_mg": 513.0,
    "potassium_mg": 523.0,
    "protein_g": 24.1,
    "salt_g": 0.005,
    "sat_fat_g": 3.48,
    "sodium_mg": 2.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170186",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
