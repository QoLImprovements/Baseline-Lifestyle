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
  "id": "usda-sr-legacy-170588",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
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
  "name": "Nuts, mixed nuts, oil roasted, without peanuts, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 22.3,
    "energy_kcal": 2570.0,
    "fat_g": 56.2,
    "fibre_g": 5.5,
    "folate_ug": 56.0,
    "iron_mg": 2.57,
    "magnesium_mg": 251.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 449.0,
    "potassium_mg": 544.0,
    "protein_g": 15.5,
    "salt_g": 0.0275,
    "sat_fat_g": 9.09,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170588",
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
