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
  "id": "usda-sr-legacy-170170",
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
  "name": "Nuts, coconut meat, dried (desiccated), not sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 23.6,
    "energy_kcal": 660.0,
    "fat_g": 64.5,
    "fibre_g": 16.3,
    "folate_ug": 9.0,
    "iron_mg": 3.32,
    "magnesium_mg": 90.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 206.0,
    "potassium_mg": 543.0,
    "protein_g": 6.88,
    "salt_g": 0.0925,
    "sat_fat_g": 57.2,
    "sodium_mg": 37.0,
    "sugar_g": 7.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170170",
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
