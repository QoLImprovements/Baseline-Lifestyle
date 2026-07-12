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
  "id": "usda-sr-legacy-170183",
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
    }
  ],
  "name": "Nuts, pecans, dry roasted, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 13.6,
    "energy_kcal": 710.0,
    "fat_g": 74.3,
    "fibre_g": 9.4,
    "folate_ug": 16.0,
    "iron_mg": 2.8,
    "magnesium_mg": 132.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 293.0,
    "potassium_mg": 424.0,
    "protein_g": 9.5,
    "salt_g": 0.0025,
    "sat_fat_g": 6.28,
    "sodium_mg": 1.0,
    "sugar_g": 4.06,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170183",
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
