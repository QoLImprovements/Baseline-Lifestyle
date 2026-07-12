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
  "id": "usda-sr-legacy-168599",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, mixed nuts, dry roasted, with peanuts, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 25.4,
    "energy_kcal": 2480.0,
    "fat_g": 51.4,
    "fibre_g": 9.0,
    "folate_ug": 50.0,
    "iron_mg": 3.7,
    "magnesium_mg": 225.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 435.0,
    "potassium_mg": 693.0,
    "protein_g": 17.3,
    "salt_g": 0.8625,
    "sat_fat_g": 6.5,
    "sodium_mg": 345.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 10.9,
    "vitamin_k_ug": 12.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168599",
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
