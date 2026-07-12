/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170587",
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
      "gramsPerUnit": 134.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Nuts, mixed nuts, oil roasted, with peanuts, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 21.0,
    "energy_kcal": 2540.0,
    "fat_g": 54.0,
    "fibre_g": 7.0,
    "folate_ug": 83.0,
    "iron_mg": 2.61,
    "magnesium_mg": 229.0,
    "omega3_g": 0.087,
    "phosphorus_mg": 456.0,
    "potassium_mg": 632.0,
    "protein_g": 20.0,
    "salt_g": 0.0125,
    "sat_fat_g": 8.71,
    "sodium_mg": 5.0,
    "sugar_g": 4.15,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 7.82,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170587",
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
