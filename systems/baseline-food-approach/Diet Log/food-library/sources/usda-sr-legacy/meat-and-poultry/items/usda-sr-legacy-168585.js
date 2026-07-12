/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-168585",
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
  "name": "Nuts, coconut meat, dried (desiccated), creamed",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 21.5,
    "energy_kcal": 2860.0,
    "fat_g": 69.1,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 3.36,
    "magnesium_mg": 92.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 209.0,
    "potassium_mg": 551.0,
    "protein_g": 5.3,
    "salt_g": 0.0925,
    "sat_fat_g": 61.3,
    "sodium_mg": 37.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168585",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "meat-and-poultry",
    "nut-and-seed-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
