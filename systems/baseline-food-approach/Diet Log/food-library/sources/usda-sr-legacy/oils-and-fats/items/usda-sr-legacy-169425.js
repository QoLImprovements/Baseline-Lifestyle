/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169425",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-15-halves",
      "kind": "unit",
      "label": "oz (15 halves)"
    }
  ],
  "name": "Nuts, pecans, oil roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 13.0,
    "energy_kcal": 715.0,
    "fat_g": 75.2,
    "fibre_g": 9.5,
    "folate_ug": 15.0,
    "iron_mg": 2.47,
    "magnesium_mg": 121.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 263.0,
    "potassium_mg": 392.0,
    "protein_g": 9.2,
    "salt_g": 0.9825,
    "sat_fat_g": 7.24,
    "sodium_mg": 393.0,
    "sugar_g": 3.97,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 2.53,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169425",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
