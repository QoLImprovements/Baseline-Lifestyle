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
  "id": "usda-sr-legacy-170594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, walnuts, dry roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 17.9,
    "energy_kcal": 643.0,
    "fat_g": 60.7,
    "fibre_g": 7.1,
    "folate_ug": 91.0,
    "iron_mg": 2.57,
    "magnesium_mg": 151.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 329.0,
    "potassium_mg": 459.0,
    "protein_g": 14.3,
    "salt_g": 1.6075,
    "sat_fat_g": 5.36,
    "sodium_mg": 643.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170594",
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
