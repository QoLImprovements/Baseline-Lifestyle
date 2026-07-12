/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170181",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Nuts, mixed nuts, dry roasted, with peanuts, salt added, CHOSEN ROASTER",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 24.6,
    "energy_kcal": 608.0,
    "fat_g": 53.2,
    "fibre_g": 7.1,
    "folate_ug": 60.0,
    "iron_mg": 3.22,
    "magnesium_mg": 202.0,
    "omega3_g": 2.028,
    "phosphorus_mg": 412.0,
    "potassium_mg": 585.0,
    "protein_g": 18.0,
    "salt_g": 0.2825,
    "sat_fat_g": 7.02,
    "sodium_mg": 113.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170181",
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
