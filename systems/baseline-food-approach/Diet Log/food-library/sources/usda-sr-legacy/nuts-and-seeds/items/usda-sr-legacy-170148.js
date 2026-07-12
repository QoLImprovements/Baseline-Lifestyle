/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "3-tbsp",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170148",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "3-tbsp",
      "kind": "unit",
      "label": "3 tbsp"
    }
  ],
  "name": "Seeds, hemp seed, hulled",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 8.67,
    "energy_kcal": 2310.0,
    "fat_g": 48.8,
    "fibre_g": 4.0,
    "folate_ug": 110.0,
    "iron_mg": 7.95,
    "magnesium_mg": 700.0,
    "omega3_g": 8.68,
    "phosphorus_mg": 1650.0,
    "potassium_mg": 1200.0,
    "protein_g": 31.6,
    "salt_g": 0.0125,
    "sat_fat_g": 4.6,
    "sodium_mg": 5.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170148",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
